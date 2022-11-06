import { expect, it, describe } from '@jest/globals'
import { Explode as sut } from '../../../src/domain/usecase'
describe('Explode', () => {
  it('should return explode correct', () => {
    let out = sut('22454*45/8/4')
    expect(out).toEqual(['22454', '*', '45', '/', '8', '/', '4'])
    out = sut('22454*(45/8)/4')
    expect(out).toEqual(['22454', '*', '(', '45', '/', '8', ')', '/', '4'])
    out = sut('2*45)/8)/4')
    expect(out).toEqual(['2', '*', '45', ')', '/', '8', ')', '/', '4'])
    out = sut('((2*45)/8)/4')
    expect(out).toEqual(['(', '(', '2', '*', '45', ')', '/', '8', ')', '/', '4'])
  })

  it('should return explode correct with parentheses in starting', () => {
    const out = sut('((2*45)(/8)/4')
    expect(out).toEqual(['(', '(', '2', '*', '45', ')', '(', '/', '8', ')', '/', '4'])
  })
})
