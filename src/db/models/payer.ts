import mongoose from 'mongoose'

export default mongoose.model(
  'Payer',
  new mongoose.Schema(
    {
      name: String,
      insertedAt: Date
    },
    {
      collection: 'payer'
    }
  )
)
