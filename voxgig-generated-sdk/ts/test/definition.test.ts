import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "create",
    "method": "POST",
    "path": "/api/v0/municipalities/search",
    "action": "search",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/search",
    "action": "search",
    "args": [],
    "select": {
      "mode": "v1",
      "order_by": "v1",
      "capital_city": "-",
      "format": "json",
      "municipality_name": "-",
      "province_identifier": "-",
      "size": 0
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "order_by",
      "mode",
      "format",
      "size",
      "municipality_name",
      "province_identifier",
      "capital_city"
    ],
    "queryArgs": [
      {
        "name": "capital_city",
        "wire": "capital_city"
      },
      {
        "name": "format",
        "wire": "format"
      },
      {
        "name": "mode",
        "wire": "mode"
      },
      {
        "name": "municipality_name",
        "wire": "municipality_name"
      },
      {
        "name": "order_by",
        "wire": "order_by"
      },
      {
        "name": "province_identifier",
        "wire": "province_identifier"
      },
      {
        "name": "size",
        "wire": "size"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/{bid}",
    "args": [
      {
        "name": "id",
        "wire": "bid",
        "value": "p1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/all",
    "action": "all",
    "args": [],
    "select": {
      "format": "json"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "format"
    ],
    "queryArgs": [
      {
        "name": "format",
        "wire": "format"
      }
    ],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/count",
    "action": "count",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {},
    "idField": "id"
  },
  {
    "entity": "municipality",
    "accessor": "Municipality",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/generate_files",
    "action": "generate_file",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "basic"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "option_value",
    "accessor": "OptionValue",
    "op": "load",
    "method": "GET",
    "path": "/api/v0/municipalities/option-values/municipality_names",
    "action": "municipality_name",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": null,
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
