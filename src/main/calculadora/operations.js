import { readdirSync } from 'fs'
import { dirname, join } from 'path'

export const importOperations = async () => {
  let obj = {}
  const files = readdirSync(join(dirname('.'), '/src/domain/model/operations'))
  for (const file of files) {
    const promise = await (await import(`../../domain/model/operations/${file}`)).default
    const key = String.fromCharCode(...file.match(/\d+/g))
    obj = { ...obj, [key]: promise }
  }
  return obj
}
