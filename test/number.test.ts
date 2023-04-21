import { isInteger } from '../dist'

describe('number test', () => {
  it('isInteger function', () => {
    expect(isInteger(10)).toBe(true)
    expect(isInteger('10')).toBe(false)
    // 10.0 === 10 😁
    expect(isInteger(10.0)).toBe(true)
    expect(isInteger(10.22)).toBe(false)
    expect(isInteger(0.0001022)).toBe(false)
  })
})
