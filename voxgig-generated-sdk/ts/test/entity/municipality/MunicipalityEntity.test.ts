

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AndaluciaMunicipalitiesSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('MunicipalityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ANDALUCIA_MUNICIPALITIES_TEST_LIVE=TRUE.
  afterEach(liveDelay('ANDALUCIA_MUNICIPALITIES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AndaluciaMunicipalitiesSDK.test()
    const ent = testsdk.Municipality()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = AndaluciaMunicipalitiesSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Municipality().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ANDALUCIA_MUNICIPALITIES_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'municipality.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"municipality","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["capital_city","format","mode","municipality_name","order_by","province_identifier","size"],"co":{"id":"POST /api/v0/municipalities/search","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/v0/municipalities/search","q":{"$action":"search"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v0/municipalities/search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"-","k":"query","n":"capital_city","or":"capital_city","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"mode","or":"mode","r":true,"t":"`$ANY`","index$":2},{"a":true,"ex":"-","k":"query","n":"municipality_name","or":"municipality_name","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"order_by","or":"order_by","r":true,"t":"`$ANY`","index$":4},{"a":true,"ex":"-","k":"query","n":"province_identifier","or":"province_identifier","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":0,"k":"query","n":"size","or":"size","r":false,"t":"`$INTEGER`","index$":6}]},"k":"http","m":"GET","o":"/api/v0/municipalities/search","q":{"$action":"search","exist":["mode","order_by"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v0/municipalities/{bid}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"bid","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v0/municipalities/{bid}","q":{"exist":["id"]},"r":{"param":{"bid":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v0/municipalities/all","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v0/municipalities/all","q":{"$action":"all"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"lit":"all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v0/municipalities/count","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v0/municipalities/count","q":{"$action":"count"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"lit":"count"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/v0/municipalities/generate_files","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/v0/municipalities/generate_files","q":{"$action":"generate_file"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v0"},{"lit":"municipalities"},{"lit":"generate_files"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"municipality","name__orig":"municipality","Name":"Municipality","name_":"municipality","name-":"municipality","NAME":"MUNICIPALITY","index$":0}, {"active":true,"entity":"municipality","key$":"BasicMunicipalityFlow","kind":"basic","name":"BasicMunicipalityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"municipality_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{"ref":"municipality_ref01","srcdatavar":"municipality_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-municipality_ref01"}}]}]}, 'Municipality', {"POST /api/v0/municipalities/search":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"title":"PositionQuery","type":"object","properties":{"municipality_name":{"title":"Municipality Name","type":"string"},"province_identifier":{"title":"Province Identifier","type":"string"},"capital_city":{"title":"Capital City","type":"string"},"order_by":{"title":"Order By","type":"string"},"mode":{"title":"Mode","type":"string"},"format":{"title":"Format","type":"string"},"size":{"title":"Size","type":"integer"}},"example":{"municipality_name":"Abla","province_identifier":"4","capital_city":"0","order_by":"municipality_ine","mode":"ASC","format":"json","size":10},"x-ref":"#/components/schemas/PositionQuery"}}},"required":true},"parameters":[]},"GET /api/v0/municipalities/search":{"protocol":"http","parameters":[{"required":true,"schema":{"title":"_Enum_fields","enum":["resource","latitude","municipality_ine","municipality_name","icmsId","modified","available","capital_city","collection","longitude","identifier","province_identifier"],"description":"An enumeration.","x-ref":"#/components/schemas/_Enum_fields"},"name":"order_by","in":"query","index$":0},{"required":true,"schema":{"title":"_Enum_Mode","enum":["DESC","ASC"],"description":"An enumeration.","x-ref":"#/components/schemas/_Enum_Mode"},"name":"mode","in":"query","index$":1},{"required":false,"schema":{"allOf":[{"title":"OutputFormats","enum":["json","csv","txt","yaml","geojson"],"type":"string","description":"An enumeration.","x-ref":"#/components/schemas/OutputFormats"}],"default":"json"},"name":"format","in":"query","index$":2},{"required":false,"schema":{"title":"Size","type":"integer","default":0},"name":"size","in":"query","index$":3},{"required":false,"schema":{"title":"Municipality Name","type":"string","default":"-"},"name":"municipality_name","in":"query","index$":4},{"required":false,"schema":{"title":"Province Identifier","type":"string","default":"-"},"name":"province_identifier","in":"query","index$":5},{"required":false,"schema":{"title":"Capital City","type":"string","default":"-"},"name":"capital_city","in":"query","index$":6}]},"GET /api/v0/municipalities/{bid}":{"protocol":"http","parameters":[{"required":true,"schema":{"title":"Bid","type":"string"},"name":"bid","in":"path","index$":0}]},"GET /api/v0/municipalities/all":{"protocol":"http","parameters":[{"required":false,"schema":{"allOf":[{"title":"DownloadFormats","enum":["json","csv","txt","yaml","geojson"],"type":"string","description":"An enumeration.","x-ref":"#/components/schemas/DownloadFormats"}],"default":"json"},"name":"format","in":"query","index$":0}]},"GET /api/v0/municipalities/count":{"protocol":"http","parameters":[]},"GET /api/v0/municipalities/generate_files":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const municipality_ref01_ent = client.Municipality()
    let municipality_ref01_data = setup.data.new.municipality['municipality_ref01']

    municipality_ref01_data = (await municipality_ref01_ent.create(municipality_ref01_data)).data()
    assert(null != municipality_ref01_data.id)


    // LOAD
    const municipality_ref01_match_dt0: any = {}
    municipality_ref01_match_dt0.id = municipality_ref01_data.id
    const municipality_ref01_data_dt0 = (await municipality_ref01_ent.load(municipality_ref01_match_dt0)).data()
    assert(municipality_ref01_data_dt0.id === municipality_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/municipality/MunicipalityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AndaluciaMunicipalitiesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['municipality01','municipality02','municipality03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ANDALUCIA_MUNICIPALITIES_TEST_MUNICIPALITY_ENTID': idmap,
    'ANDALUCIA_MUNICIPALITIES_TEST_LIVE': 'FALSE',
    'ANDALUCIA_MUNICIPALITIES_TEST_EXPLAIN': 'FALSE',
    'ANDALUCIA_MUNICIPALITIES_APIKEY': '',
    'ANDALUCIA_MUNICIPALITIES_SECRET': '',
    'ANDALUCIA_MUNICIPALITIES_SERVER_BASE': "",
  })

  idmap = env['ANDALUCIA_MUNICIPALITIES_TEST_MUNICIPALITY_ENTID']

  const live = 'TRUE' === env.ANDALUCIA_MUNICIPALITIES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ANDALUCIA_MUNICIPALITIES_TEST_MUNICIPALITY_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AndaluciaMunicipalitiesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.ANDALUCIA_MUNICIPALITIES_APIKEY,
        secret: env.ANDALUCIA_MUNICIPALITIES_SECRET,
        server: {
          base: env.ANDALUCIA_MUNICIPALITIES_SERVER_BASE,
        },
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ANDALUCIA_MUNICIPALITIES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
