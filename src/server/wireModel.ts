import { Express } from 'express'
import actionsForModel from '../actions/actionsForModel'
import { models } from '../db/manager'
import { ValueOf } from '../utils/typescript'

export default (model: ValueOf<typeof models>, app: Express) => {
  const modelName = model.collection.collectionName as keyof typeof models
  const actions = actionsForModel(modelName)

  if (!actions) throw new Error(`There are no actions for ${modelName}`)

  if (actions.get) {
    app.get(`/${modelName}`, (req, res) => res.send(model.find().exec()))
  }

  if (actions.post) {
    const executor =
      typeof actions.post === 'function'
        ? (data: {}) => actions.post(data)
        : (data: {}) => new model(data)
    app.post(`/${modelName}`, async (req, res) => {
      await res.send(executor(req.body))
    })
  }
}
