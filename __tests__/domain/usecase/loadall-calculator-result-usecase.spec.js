import { expect, it, describe, beforeAll, jest } from '@jest/globals'
import { loadAllCalculatorResultUsecase } from '../../../src/domain/usecase'
describe('saveCalculatorUsecase', () => {
  let sut
  const repo = { loadAll: jest.fn().mockResolvedValue(['any_value']) }
  beforeAll(() => {
    sut = loadAllCalculatorResultUsecase(repo)
  })

  it('should return with correct value', async () => {
    const res = await sut()
    expect(res).toEqual(['any_value'])
    expect(repo.loadAll).toHaveBeenCalledTimes(1)
  })

  it('should call load empty', async () => {
    await sut()
    expect(repo.loadAll).toHaveBeenCalledWith()
  })
})
