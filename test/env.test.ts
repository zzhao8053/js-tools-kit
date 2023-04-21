import { getRuntimeEnv } from '../src'

describe('env', function () {
  it('should be able to set env', function () {
    const currentEnv = getRuntimeEnv()
    expect(currentEnv.node).toBe(true)
  })
})
