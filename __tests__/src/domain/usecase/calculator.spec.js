import { expect, it, describe } from '@jest/globals'
import { Calculator } from '../../../../src/domain/usecase'

describe('Calculator', () => {
  it('should return explode correct', () => {
    const sut = new Calculator()

    sut.calc('22454*45/8/4')
    expect(sut.eq).toEqual(['22454', '*', '45', '/', '8', '/', '4'])
  })

  it('should return explode correct', () => {
    const sut = new Calculator()

    sut.calc('2+(48*8)/4')
    expect(sut.eq).toEqual(['2', '+', '(', '48', '*', '8', ')', '/', '4'])
  })

  it('should return explode correct', () => {
    const sut = new Calculator()

    sut.calc('2+((48*8)/4)')
    expect(sut.eq).toEqual(['2', '+', '(', '(', '48', '*', '8', ')', '/', '4', ')'])
  })
})
