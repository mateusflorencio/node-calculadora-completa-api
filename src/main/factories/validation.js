
import { ValidationBuilder } from '../../application/validations/validation-builder.js'

export const validationFactory = () => (input) => ValidationBuilder().of(input).isNull().sanitize().verifyParentheses().build()
