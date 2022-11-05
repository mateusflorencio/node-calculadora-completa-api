export const ValidationBuilder = () => {
  return {
    of: function (input) {
      this.input = input
      return this
    },
    isNull: function () {
      if (!this.input) this.error = new Error('Missing Param')
      return this
    },
    sanitize: function () {
      if (this.input) this.input = this.input.trim()
      return this
    },
    verifyParentheses: function () {
      if (this.input) {
        const res = this.input.match(/[()]/g)
        if (res && res.length % 2 === 1) this.error = new Error('Missing Parentheses, verify equation')
      }
      return this
    },
    build: function () {
      return this.error || this.input
    }
  }
}
