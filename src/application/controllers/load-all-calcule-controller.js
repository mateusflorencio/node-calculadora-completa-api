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
          statusCode: 500,
          data: error.message
        }
      }
    }
  }
}
