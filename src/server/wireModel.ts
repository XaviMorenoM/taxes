import { Express } from 'express'
import actionsForModel from '../actions/actionsForModel'
import { models, Model } from '../db/manager'
import { ValueOf } from '../utils/typescript'

export default (model: ValueOf<typeof models>, app: Express) => {
  const modelName = model.collection.collectionName as keyof typeof models
  const actions = actionsForModel(modelName)

  if (!actions) throw new Error(`There are no actions for ${modelName}`)

  if (actions.get) {
    app.get(`/${modelName}`, async (req, res) =>
      res.send(await model.find().exec())
    )
  }

  if (actions.post) {
    const executor =
      typeof actions.post === 'function'
        ? (data: ValueOf<Model>) => actions.post(data)
        : (data: ValueOf<Model>) => new model(data)
    app.post(`/${modelName}`, async (req, res) => {
      res.send(await executor(req.body))
    })
  }
}
