import { expect, it, describe, beforeAll, jest } from '@jest/globals'
import { saveCalculatorUsecase } from '../../../src/domain/usecase'
describe('saveCalculatorUsecase', () => {
  let sut
  const repo = { save: jest.fn().mockResolvedValue() }
  beforeAll(() => {
    sut = saveCalculatorUsecase(repo)
  })
  it('should return undefined', async () => {
    const input = ['any', 'any2', 'any3']
    const output = await sut(...input)
    expect(output).toBeUndefined()
  })

  it('should return call save with correct value', async () => {
    const input = ['any', 'any2', 'any3']
    await sut(...input)
    expect(repo.save).toHaveBeenCalledWith(...input)
  })
})
