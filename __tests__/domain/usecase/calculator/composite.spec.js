import { expect, it, describe } from '@jest/globals'
import { equationsStrategy } from '../../../../src/domain/usecase/calculator'

const functionMap = {
  '+': function () { return 'fn_1' },
  '-': function () { return 'fn_2' }
}

const sut = equationsStrategy(functionMap)
describe('compositeEquation', () => {
  it('should return fn_1', () => {
    const res = sut(1, '+', 2)
    expect(res).toEqual('fn_1')
  })

  it('should return fn_2', () => {
    const res = sut(1, '-', 2)
    expect(res).toEqual('fn_2')
  })
})
