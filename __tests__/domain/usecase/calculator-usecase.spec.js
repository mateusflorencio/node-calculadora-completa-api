import { expect, it, describe, beforeAll } from '@jest/globals'
import { CalculatorUsecase, equationsStrategy } from '../../../src/domain/usecase'
import { importOperations } from '../../../src/main/calculadora/import-operations'

describe('CalculatorUsecase', () => {
  let sut
  let out
  beforeAll(async () => {
    const op = await importOperations()
    sut = CalculatorUsecase(equationsStrategy(op))
  })
  it('should return 4', async () => {
    out = sut('2+2')
    expect(out).toEqual(4)
  })

  it('should return 1 ', () => {
    out = sut('2/2')
    expect(out).toEqual(1)
  })

  it('should return -0.5 ', () => {
    out = sut('2-2.5')
    expect(out).toEqual(-0.5)
  })

  it('should  return 29', () => {
    out = sut('2+3+(4*(5+1))')
    expect(out).toEqual(29)
  })

  it('should  return 141', () => {
    out = sut('(2+3)+((4+8*8)*2)')
    expect(out).toEqual(141)
  })

  it('should  return 45', () => {
    out = sut('(2+3)+(4*(5+1+2*2))')
    expect(out).toEqual(45)
  })

  it('should return 5.4', () => {
    out = sut('(2+3)+(4/(5+1+2*2))')
    expect(out).toEqual(5.4)
  })
})
