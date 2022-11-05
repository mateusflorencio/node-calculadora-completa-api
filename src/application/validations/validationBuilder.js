import { missingParam, missingParentheses } from '../errors'

export const ValidationBuilder = () => {
  return {
    of: function (input) {
      this.input = input
      return this
    },
    isNull: function () {
      if (!this.input) this.error = missingParam()
      return this
    },
    sanitize: function () {
      if (this.input) this.input = this.input.trim()
      return this
    },
    verifyParentheses: function () {
      if (this.input) {
        const res = this.input.match(/[()]/g)
        if (res && res.length % 2 === 1) this.error = missingParentheses()
      }
      return this
    },
    build: function () {
      return this.error || this.input
    }
  }
}
