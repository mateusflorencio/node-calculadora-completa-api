import { expect, it, describe } from '@jest/globals'
import { div, multi, sub, sum } from '../../../../src/domain/model'

describe('Calculator', () => {
  it('1 + 3 must be 4', () => {
    expect(sum(1, 3)).toEqual(4)
  })

  it('should return 12 if 22 -  10 = 12', () => {
    expect(sub(22, 10)).toEqual(12)
  })

  it('should return 4 if 12 /  3 = 4', () => {
    expect(div(12, 3)).toEqual(4)
  })

  it('should return 12 if 4 *  3 = 12', () => {
    expect(multi(4, 3)).toEqual(12)
  })
})
