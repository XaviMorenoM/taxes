import mongoose, { Document } from 'mongoose'

export interface IPayer extends Document {
  name: string
  insertedAt: Date
}

export default mongoose.model<IPayer>(
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
