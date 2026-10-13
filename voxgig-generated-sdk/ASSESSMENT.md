# One-off Voxgig DevRel exercise — verification record

This **unofficial** TypeScript SDK was generated with the real Voxgig
`@voxgig/create-sdkgen@0.30.7` from the Junta de Andalucía
Municipalities OpenAPI 3.0.2 specification (six paths). The source
specification is included as `openapi.json`.

## Evidence
- GitHub Actions 13 Oct 2026: generator success; `npm run build`
  success; `npm test`: 224 tests, 215 passed, 0 failed, 9 skipped.
- The official count endpoint returned HTTP 200 in CI. This checks
  service reachability, **not** an end-to-end SDK request.
- Tests are mainly the generator's built-in offline test transport.
- Re-run the workflow if further live SDK request verification is needed.

## How generated
```bash
npx --yes @voxgig/create-sdkgen@0.30.7 andalucia-municipalities \
  -d source.openapi.json -o generated -t ts -f test
(cd generated/.sdk && npm run generate)
(cd generated/ts && npm install && npm run build && npm test)
```

No authentication credentials, paid API access, npm release, or other
deployment was used. This is evaluation source in a dedicated branch
of a repository owned by the contributor, not a published package.
Review `LICENSE` for MIT grant and upstream Voxgig copyright.

## Developer-experience feedback
1. The generator produces a usable project with an offline test harness;
   it would help newcomers to distinguish those tests from live integration.
2. API method names produced from OpenAPI operation IDs may require
   a manual model audit for idiomatic SDK ergonomics.
3. Reproducible examples should include exact CLI and toolchain versions,
   input-spec URL, and whether service credentials are required.
4. Generated npm metadata defaults to a Voxgig catalogue repository URL;
   contributors should replace it with their actual project URL to avoid
   broken links before publishing.
