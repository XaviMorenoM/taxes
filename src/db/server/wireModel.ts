import mongoose from 'mongoose'
import { Express } from 'express'

export default (model: mongoose.Model<any>, app: Express) => {
	const modelName = model.collection.collectionName

	app.get(`/${modelName}`, (req, res) => res.send(model.find().exec()))
}
