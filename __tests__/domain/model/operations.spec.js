import { expect, it, describe } from '@jest/globals'
import div from '../../../src/domain/model/operations/div47'
import multi from '../../../src/domain/model/operations/multi42'
import sub from '../../../src/domain/model/operations/sub45'
import sum from '../../../src/domain/model/operations/sum43'

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
