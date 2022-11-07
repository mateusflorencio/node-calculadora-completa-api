export const LoadAllCalculeController = (repo) => {
  return {
    handle: async function () {
      try {
        const res = await repo.loadAll()
        return {
          statusCode: 200,
          data: res
        }
      } catch (error) {
        return {
          statusCode: 400,
          data: error.message
        }
      }
    }
  }
}
