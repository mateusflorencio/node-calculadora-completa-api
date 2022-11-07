import { expect, it, describe, beforeEach, jest } from '@jest/globals'
import { CalculatorController } from '../../../src/application/controllers'
import { missingParam } from '../../../src/application/errors'

describe('CalculatorController', () => {
  let sut
  const validations = jest.fn().mockReturnValue('vali_result')
  const calculatorUsecase = jest.fn().mockReturnValue('any_value')
  beforeEach(() => {
    sut = new CalculatorController(validations, calculatorUsecase)
  })

  it('should call once', () => {
    const spySut = jest.spyOn(sut, 'handle')
    sut.handle()
    expect(spySut).toBeCalledTimes(1)
  })

  it('should return throw if validations return error', () => {
    validations.mockReturnValueOnce(missingParam())
    try {
      sut.handle('')
    } catch (error) {
      expect(error.message).toEqual(missingParam().message)
    }
  })

  it('should call calculatorUsecase with correct value ', () => {
    sut.handle('')
    expect(calculatorUsecase).toBeCalledTimes(1)
    expect(calculatorUsecase).toHaveBeenCalledWith('vali_result')
  })

  it('should return an value', () => {
    sut.handle('')
    expect(calculatorUsecase).toHaveReturnedWith('any_value')
  })
})
