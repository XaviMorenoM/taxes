import payer, { IPayer } from '../../db/models/payer'

export default {
  get: true,
  post: async (data: IPayer) => {
    return await payer.create({
      name: data.name ?? `payer-${await payer.estimatedDocumentCount()}`,
      insertedAt: new Date()
    })
  }
}
