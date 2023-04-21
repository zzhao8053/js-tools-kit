import { urlSearchParam, parseUrlParams, stringify, parse } from '../src'

const url = 'https://www.baidu.com?q=1&topic=api'
const subUrl = 'q=searchParams&topic=api'

test('urlSearchParam test', () => {
  const topic = urlSearchParam(subUrl, 'topic')
  expect(topic).not.toBeNull()
  expect(topic).toEqual('api')

  const q = urlSearchParam(url, 'q')
  expect(q).toEqual('1')
})

test('parseUrlParams test', () => {
  const paramsString1 = 'q=1&topic=api'
  const params1 = parseUrlParams(paramsString1)
  expect(params1).toEqual({ q: '1', topic: 'api' })

  const paramsString2 = 'https://www.baidu.com?q=1&topic=api'
  const params2 = parseUrlParams(paramsString2)
  expect(params2).toEqual({ q: '1', topic: 'api' })
})

test('obj2url test', () => {
  const params = {
    q: '1',
    topic: 'api',
  }
  const url = stringify(params)
  const url2 = stringify(params, true)
  expect(url).toEqual('q=1&topic=api')
  expect(url2).toEqual('?q=1&topic=api')
})

test('url2obj test', () => {
  const url = '?q=1&topic=api'
  const params = parse(url)
  expect(params).toEqual({ q: '1', topic: 'api' })
})
