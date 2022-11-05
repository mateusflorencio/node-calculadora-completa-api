import { expect, it, describe, beforeEach, jest } from '@jest/globals'
import { Calculator } from '../../../../src/domain/usecase'
import { missingParam } from '../../../../src/domain/errors'
describe('Calculator', () => {
  let sut
  const validations = jest.fn().mockReturnValue('22454*45/8/4')
  beforeEach(() => {
    sut = new Calculator(validations)
  })
  it('should return explode correct', () => {
    const input = '22454*45/8/4'
    sut.calc(input)
    expect(sut.eq).toEqual(['22454', '*', '45', '/', '8', '/', '4'])
  })

  it('should call once', () => {
    const spySut = jest.spyOn(sut, 'calc')
    sut.calc()
    expect(spySut).toBeCalledTimes(1)
  })

  it('should return throw if validations return error', () => {
    validations.mockReturnValueOnce(missingParam())
    try {
      sut.calc('')
    } catch (error) {
      expect(error.message).toEqual(missingParam().message)
    }
  })
})
