
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AndaluciaMunicipalitiesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AndaluciaMunicipalitiesSDK.test()
    equal(testsdk instanceof AndaluciaMunicipalitiesSDK, true,
      'AndaluciaMunicipalitiesSDK.test() must return a client synchronously')
  })

})
