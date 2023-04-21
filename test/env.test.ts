import { getRuntimeEnv } from '../dist'

test('env', () => {
  const currentEnv = getRuntimeEnv()
  expect(currentEnv.node).toBe(true)
})
