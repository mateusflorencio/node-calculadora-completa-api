import { expect, it, describe } from '@jest/globals'
import { Calculator, compositeEquation } from '../../../src/domain/usecase'
import { sum, sub, div, multi } from '../../../src/domain/model'

describe('Calculator usecase', () => {
  const composite = {
    '+': sum,
    '-': sub,
    '*': multi,
    '/': div
  }

  const sut = Calculator(compositeEquation(composite))
  it('calcule', () => {
    let out = sut(['2', '+', '2'])
    expect(out).toEqual(4)
    out = sut(['2', '-', '2'])
    expect(out).toEqual(0)
    out = sut(['2', '*', '2'])
    expect(out).toEqual(4)
    out = sut(['2', '/', '2'])
    expect(out).toEqual(1)
    out = sut(['2', '+', '3', '+', '(', '4', '*', '(', '5', '+', '1', ')', ')'])
    expect(out).toEqual(29)
    out = sut(['(', '2', '+', '3', ')', '+', '(', '4', '*', '(', '5', '+', '1', ')', ')'])
    expect(out).toEqual(29)
    out = sut(['(', '2', '+', '3', ')', '+', '(', '(', '4', '*', '8', '*', '8', ')', '*', '2', ')'])
    expect(out).toEqual(517)
    out = sut(['(', '2', '+', '3', ')', '+', '(', '4', '*', '(', '5', '+', '1', '+', '1', '+', '1', ')', ')'])
    expect(out).toEqual(37)
  })
})
