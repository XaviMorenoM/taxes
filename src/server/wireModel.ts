import mongoose from 'mongoose'
import { Express } from 'express'
import actionsForModel, {
  availableModelsWithActions
} from '../actions/actionsForModel'

export default (model: mongoose.Model<any>, app: Express) => {
  const modelName = model.collection.collectionName
  const actions = actionsForModel(modelName as availableModelsWithActions)

  if (!actions) throw new Error(`There are no actions for ${modelName}`)

  if (actions.get) {
    app.get(`/${modelName}`, (req, res) => res.send(model.find().exec()))
  }

  if (actions.post) {
    app.post(`/${modelName}`, (req, res) => res.send({ created: true }))
  }
}
