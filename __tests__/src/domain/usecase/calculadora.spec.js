import { expect, it, describe } from '@jest/globals'
import { Calculator } from '../../../../src/domain/usecase'

describe('Calculator usecase', () => {
  it('', () => {
    let out = Calculator(['2', '+', '2'])
    expect(out).toEqual(4)
    out = Calculator(['2', '-', '2'])
    expect(out).toEqual(0)
    out = Calculator(['2', '*', '2'])
    expect(out).toEqual(4)
    out = Calculator(['2', '/', '2'])
    expect(out).toEqual(1)
    out = Calculator(['2', '+', '3', '+', '(', '4', '*', '(', '5', '+', '1', ')', ')'])
    expect(out).toEqual(29)
    out = Calculator(['(', '2', '+', '3', ')', '+', '(', '4', '*', '(', '5', '+', '1', ')', ')'])
    expect(out).toEqual(29)
    out = Calculator(['(', '2', '+', '3', ')', '+', '(', '(', '4', '*', '8', '*', '8', ')', '*', '2', ')'])
    expect(out).toEqual(517)
    out = Calculator(['(', '2', '+', '3', ')', '+', '(', '4', '*', '(', '5', '+', '1', '+', '1', '+', '1', ')', ')'])
    expect(out).toEqual(37)
  })
})
