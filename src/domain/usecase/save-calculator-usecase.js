export const saveCalculatorUsecase = (repo) => async (user, equation, result) => repo.save(user, equation, result)
