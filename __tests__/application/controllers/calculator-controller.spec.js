import { expect, it, describe, beforeEach, jest } from '@jest/globals'
import { CalculatorController } from '../../../src/application/controllers'
import { missingParam } from '../../../src/application/errors'

describe('CalculatorController', () => {
  let sut
  const input = { user: 'any_user', equation: 'any_equation' }
  let validations = jest.fn().mockReturnValue('vali_result')
  let calculatorUsecase = jest.fn().mockReturnValue('any_value')
  let calculatorRepo = { save: jest.fn() }
  beforeEach(() => {
    validations = jest.fn().mockReturnValue('vali_result')
    calculatorUsecase = jest.fn().mockReturnValue('any_value')
    calculatorRepo = { save: jest.fn() }
    sut = CalculatorController(validations, calculatorUsecase, calculatorRepo)
  })

  it('should call once', () => {
    const spySut = jest.spyOn(sut, 'handle')
    sut.handle(input)
    expect(spySut).toBeCalledTimes(1)
  })

  it('should return throw if validations return error', () => {
    validations.mockReturnValueOnce(missingParam())
    try {
      sut.handle(input)
    } catch (error) {
      expect(error.message).toEqual(missingParam().message)
    }
  })

  it('should call calculatorUsecase with correct value ', () => {
    sut.handle(input)
    expect(calculatorUsecase).toBeCalledTimes(1)
    expect(calculatorUsecase).toHaveBeenCalledWith('vali_result')
  })

  it('should return a value', () => {
    sut.handle(input)
    expect(calculatorUsecase).toHaveReturnedWith('any_value')
  })

  it('should call calculatorRepo with correct value ', () => {
    sut.handle(input)
    expect(calculatorRepo.save).toBeCalledTimes(1)
    expect(calculatorRepo.save).toHaveBeenCalledWith(input.user, 'vali_result', 'any_value')
  })
  it('should return with correct value', () => {
    expect(sut.handle(input)).toEqual({ data: { result: 'any_value' }, statusCode: 200 })
  })
})
