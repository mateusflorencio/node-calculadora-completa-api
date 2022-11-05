import { expect, it, describe, beforeEach, jest } from '@jest/globals'
import { Calculator } from '../../../src/application/controllers'
import { missingParam } from '../../../src/application/errors'

describe('Calculator', () => {
  let sut
  const validations = jest.fn().mockReturnValue('22454*45/8/4')
  const explode = jest.fn().mockReturnValue(['any_data'])

  beforeEach(() => {
    sut = new Calculator(validations, explode)
  })
  it('should return explode correct', () => {
    sut.handle('')
    expect(explode).toHaveReturnedWith(['any_data'])
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
})
