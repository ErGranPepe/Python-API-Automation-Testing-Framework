# Voxgig paid exercise 1 — isolated CI evaluation

This branch is an **isolated diagnostic build**, not a completed, submitted, or invoiced SDK. It does not change the main branch.

**Objective:** Generate a TypeScript SDK via Voxgig's **official** `@voxgig/create-sdkgen` from the Junta de Andalucía's public [Municipios OpenAPI 3.0.2](https://datos.juntadeandalucia.es/api/v0/municipalities/openapi.json) specification, then run the generated offline tests.

- Client brief: 29 September 2026, two exercises at USD 50 **total**, payment only after both are submitted and a valid invoice is received.
- Human effort budget: **30 minutes per exercise**, not unlimited development.
- Repository catalog check: search `org:voxgig-sdk andalucia` had no result on 13 October 2026, but this alone does not prove the API has no SDK under another name. Perform a final catalog review.
- Generator source: https://github.com/voxgig/create-sdkgen ; pin `@voxgig/create-sdkgen@0.30.7` only for reproducibility and change if npm package is not published.
- Public API may have downtime; successful OpenAPI download does **not** establish live API correctness.
- No credentials are used; production API integration testing and client-specific error flows are **not** confirmed by offline tests.
- CI sets GitHub token contents read-only; generated outputs stay as an Actions artifact. The workflow **does not push**, create a release, or send email.

## Running locally

Requires Node 24, npm, Git and internet.

```sh
mkdir -p experiments/voxgig
curl -fLsS --retry 2 -o experiments/voxgig/openapi.json https://datos.juntadeandalucia.es/api/v0/municipalities/openapi.json
npx --yes @voxgig/create-sdkgen@0.30.7 andalucia-municipalities -d ./experiments/voxgig/openapi.json -o ./experiments/voxgig/generated -t ts -f test
(cd experiments/voxgig/generated/.sdk && npm run generate)
(cd experiments/voxgig/generated/ts && npm install && npm run build && npm test)
```

**Acceptance before sending to Voxgig:** review generator logs and generated SDK structure, verify a live API call (or truthfully report failure), check MIT license, create a **dedicated public repository** in the user's account for the actual SDK, add the generated code and developer-experience observations, and send the real link to Richard. Do not claim these are completed until verified.
