import { expect, it, describe, beforeEach } from '@jest/globals'
import { Calculator } from '../../../../src/domain/usecase'

describe('Calculator', () => {
  let sut
  beforeEach(() => {
    sut = new Calculator()
  })
  it('should return explode correct', () => {
    sut.calc('22454*45/8/4')
    expect(sut.eq).toEqual(['22454', '*', '45', '/', '8', '/', '4'])
  })

  it('should return explode correct', () => {
    sut.calc('2+(48*8)/4')
    expect(sut.eq).toEqual(['2', '+', '(', '48', '*', '8', ')', '/', '4'])
  })

  it('should return explode correct', () => {
    sut.calc('2+((48*8)/4)')
    expect(sut.eq).toEqual(['2', '+', '(', '(', '48', '*', '8', ')', '/', '4', ')'])
  })

  it('should return throw if input null', () => {
    try {
      sut.calc()
    } catch (error) {
      expect(error.message).toEqual('Missing Param')
    }
  })

  it('should return throw if input missing parentheses ', () => {
    try {
      sut.calc('2+(48*8/4')
    } catch (error) {
      expect(error.message).toEqual('Mising Parentheses, verify equation')
    }
  })
})
