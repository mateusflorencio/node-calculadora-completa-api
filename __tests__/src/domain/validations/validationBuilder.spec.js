
import { expect, it, describe } from '@jest/globals'
import { ValidationBuilder } from '../../../../src/domain/validations'

describe('Validation', () => {
  it('should remove all spaces', () => {
    const out = ValidationBuilder().of('2+(48*8/4 ').sanitize().build()
    expect(out).toEqual('2+(48*8/4')
  })

  it('should return error if null', () => {
    const error = ValidationBuilder().of().isNull().build()
    expect(error).toBeInstanceOf(Error)
    expect(error).toEqual(new Error('Missing Param'))
  })

  it('should return input no null', () => {
    const out = ValidationBuilder().of('any_input').isNull().build()
    expect(out).toEqual('any_input')
  })

  it('should return error if input missing parentheses ', () => {
    const error = ValidationBuilder().of('(()').verifyParentheses().isNull().build()
    expect(error).toBeInstanceOf(Error)
    expect(error).toEqual(new Error('Missing Parentheses, verify equation'))
  })
})
