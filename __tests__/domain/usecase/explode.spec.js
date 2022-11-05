import { expect, it, describe } from '@jest/globals'
import { Explode as sut } from '../../../src/domain/usecase'
describe('Explode', () => {
  it('should return explode correct', () => {
    expect(sut('22454*45/8/4')).toEqual(['22454', '*', '45', '/', '8', '/', '4'])
    expect(sut('22454*(45/8)/4')).toEqual(['22454', '*', '(', '45', '/', '8', ')', '/', '4'])
    expect(sut('2*45)/8)/4')).toEqual(['2', '*', '45', ')', '/', '8', ')', '/', '4'])
  })
})
