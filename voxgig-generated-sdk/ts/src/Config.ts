
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'AndaluciaMunicipalities',
        slug: "andalucia-municipalities",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "{base}",

    server: {
      "base": "",
    },

    auth: {
      prefix: 'Basic',
      basic: true,
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        municipality: {
        },
  
        option_value: {
        },
  
    }
  }


  entity = {
    "municipality": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "municipality",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/api/v0/municipalities/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "search"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/search",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "search"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "search"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "capital_city",
                    "orig": "capital_city",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "-"
                  },
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`",
                    "kind": "query",
                    "example": "json"
                  },
                  {
                    "name": "mode",
                    "orig": "mode",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "municipality_name",
                    "orig": "municipality_name",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "-"
                  },
                  {
                    "name": "order_by",
                    "orig": "order_by",
                    "type": "`$ANY`",
                    "kind": "query",
                    "reqd": true
                  },
                  {
                    "name": "province_identifier",
                    "orig": "province_identifier",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "-"
                  },
                  {
                    "name": "size",
                    "orig": "size",
                    "type": "`$INTEGER`",
                    "kind": "query",
                    "example": 0
                  }
                ]
              },
              "select": {
                "$action": "search",
                "exist": [
                  "mode",
                  "order_by"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/{bid}",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "{id}"
              ],
              "rename": {
                "param": {
                  "bid": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "bid",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/all",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "all"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "all"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "format",
                    "orig": "format",
                    "type": "`$ANY`",
                    "kind": "query",
                    "example": "json"
                  }
                ]
              },
              "select": {
                "$action": "all"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/count",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "count"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "count"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "count"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/generate_files",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "generate_files"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "generate_files"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "generate_file"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "option_value": {
      "fields": [],
      "name": "option_value",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api/v0/municipalities/option-values/municipality_names",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "v0"
                },
                {
                  "lit": "municipalities"
                },
                {
                  "lit": "option-values"
                },
                {
                  "lit": "municipality_names"
                }
              ],
              "parts": [
                "api",
                "v0",
                "municipalities",
                "option-values",
                "municipality_names"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "municipality_name"
              },
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

