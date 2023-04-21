import { isStatic, isNull, isOriginalType, isPlainObject, isArray, isRegExp, isDate, isFunction, isEmpty } from '../dist'

describe('typeUtils Test', () => {
  it('isStatic function', () => {
    expect(isStatic('true')).toBe(true)
    expect(isStatic(1)).toBe(true)
    expect(isStatic(true)).toBe(true)
    expect(isStatic(undefined)).toBe(true)
    expect(isStatic(null)).toBe(true)
    expect(isStatic(Symbol('111'))).toBe(false)
  })

  it('isStatic function', () => {
    expect(isNull('')).toBe(false)
    expect(isNull(undefined)).toBe(false)
    expect(isNull(null)).toBe(true)
  })

  it('isOriginalType function', () => {
    expect(isOriginalType('string')).toBe(true)
    expect(isOriginalType(10)).toBe(true)
    expect(isOriginalType(true)).toBe(true)
    expect(isOriginalType(null)).toBe(true)
    expect(isOriginalType(undefined)).toBe(true)
    expect(isOriginalType(new String('new String'))).toBe(false)
    expect(isOriginalType(new Number(1000))).toBe(false)
  })

  it('isPlainObject function', function () {
    expect(isPlainObject({})).toBe(true)
    expect(isPlainObject(String('111'))).toBe(false)
    expect(isPlainObject(Number(111))).toBe(false)
  })

  it('isArray function', function () {
    expect(isArray([])).toBe(true)
    expect(isArray(new Array(10))).toBe(true)
    expect(isArray('1')).toBe(false)
    expect(isArray(2)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(true)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(Symbol('2123'))).toBe(false)
  })

  it('isRegExp function', function () {
    expect(isRegExp(new RegExp(/test/))).toBe(true)
  })

  it('isDate function', function () {
    expect(isDate(new Date())).toBe(true)
  })

  it('isFunction function', function () {
    expect(
      isFunction(function () {
        console.log(13212)
      })
    ).toBe(true)
  })

  it('isEmpty function', function () {
    expect(isEmpty(null)).toBe(true)

    expect(isEmpty({})).toBe(true)
    expect(isEmpty({ name: 1 })).toBe(false)

    expect(isEmpty({ length: 0 })).toBe(true)
    expect(isEmpty({ length: 10 })).toBe(false)
  })
})
