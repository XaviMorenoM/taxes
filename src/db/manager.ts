import mongoose from 'mongoose'
import payer from './models/payer'

export const models = { payer }

let isMongooseConnected = false
export default () => {
  if (!isMongooseConnected) {
    mongoose
      .connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .catch(err => {
        throw new Error(err.message)
      })
    isMongooseConnected = true
  }
  return { models }
}
