import { expect, it, describe, beforeAll, jest } from '@jest/globals'
import { LoadAllCalculeController } from '../../../src/application/controllers'

describe('LoadAllCalculeController', () => {
  let sut
  let calculatorRepo
  beforeAll(() => {
    calculatorRepo = { loadAll: jest.fn().mockResolvedValue(['any_value']) }
    sut = LoadAllCalculeController(calculatorRepo)
  })

  it('should call once', async () => {
    const spySut = jest.spyOn(sut, 'handle')
    await sut.handle()
    expect(spySut).toBeCalledTimes(1)
    expect(spySut).toHaveBeenCalledWith()
  })

  it('should return with correct value', async () => {
    const output = await sut.handle()
    expect(output).toEqual({ statusCode: 200, data: ['any_value'] })
  })

  it('should return statusCode 500', async () => {
    calculatorRepo = { loadAll: jest.fn().mockRejectedValueOnce(new Error('error')) }
    sut = LoadAllCalculeController(calculatorRepo)
    const promise = await sut.handle()
    expect(promise).toEqual({ statusCode: 500, data: 'error' })
  })
})
