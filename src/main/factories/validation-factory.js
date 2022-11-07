
import { ValidationBuilder } from '../../application/validations/validationBuilder.js'

export const validationFactory = (input) => {
  return ValidationBuilder().of(input).isNull().sanitize().verifyParentheses().build()
}
