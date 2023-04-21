import { stringFormat } from '../src'

describe('stringUtils', () => {
  it('should telephoneFormat', function () {
    expect(stringFormat('11111111111111111111')).toBe('111****1111111111111')
    expect(stringFormat('13163395910', 1, 9)).toBe('1*********0')
    expect(stringFormat('13163395910', 1, 9, '-')).toBe('1---------0')
    expect(stringFormat('13163395910', 1, 20, '-')).toBe('1----------')
  })
})
