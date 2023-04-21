import { arrayMax, arrayMin, isArrayLike, chunk, difference, groupBy, count, isArrayLength } from '../src'

describe('array utils', () => {
  it('arrayMax function', function () {
    expect(arrayMax([1, 3, 4, 90])).toBe(90)
    expect(arrayMax([1, 3, 4, 90, 100])).not.toBe(90)
  })

  it('arrayMin function', function () {
    expect(arrayMin([1, 3, 4, 90])).toBe(1)
    expect(arrayMin([1, 3, 4, 90, 100])).not.toBe(3)
  })

  it('isArrayLength function', function () {
    expect(isArrayLength(1)).toBe(true)
    expect(isArrayLength([1])).toBe(false)
    expect(isArrayLength(-1)).toBe(false)
    expect(isArrayLength(0.01)).toBe(false)
    expect(isArrayLength(9007199254740991 + 1000)).toBe(false)
  })

  it('isArrayLike function', function () {
    expect(
      isArrayLike(() => {
        console.log(123)
      })
    ).toBe(false)
    expect(isArrayLike({ length: 10 })).toBe(true)
    expect(isArrayLike({ length: 0.1 })).toBe(false)
    expect(isArrayLike({ length: -1 })).toBe(false)
    expect(isArrayLike({ length: [1] })).toBe(false)
    expect(isArrayLike({ length: 9007199254740991 + 1000 })).toBe(false)
  })

  it('chunk function', function () {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]])
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
      [1, 2, 3],
      [4, 5],
    ])
    expect(chunk([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3, 4], [5]])
    expect(chunk([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]])
  })

  it('count function', () => {
    expect(count([1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 5, 6, 6, 8, 8, 8], 5)).toBe(1)
  })

  it('difference function', () => {
    expect(difference([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7])).toEqual([5, 6, 7])
  })

  it('groupBy function', () => {
    expect(groupBy(['one', 'two', 'three'])).toEqual({ 3: ['one', 'two'], '5': ['three'] })
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({ 3: ['one', 'two'], '5': ['three'] })
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: [4.2], 6: [6.1, 6.3] })
    expect(
      groupBy<{ name: string; id: number }>(
        [
          { id: 1, name: '---' },
          { id: 1, name: '--' },
          { id: 2, name: 'xxx' },
          { id: 2, name: 'xx' },
        ],
        (value) => value.id
      )
    ).toEqual({
      '1': [
        { id: 1, name: '---' },
        { id: 1, name: '--' },
      ],
      '2': [
        { id: 2, name: 'xxx' },
        { id: 2, name: 'xx' },
      ],
    })
  })
})
