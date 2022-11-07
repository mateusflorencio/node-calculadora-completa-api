export const routerAdapt = (controller) => async (req, res) => {
  const { statusCode, data } = await controller.handle({ ...req.body })
  const json = [200].includes(statusCode) ? data : { error: data }
  return res.status(statusCode).json(json)
}
