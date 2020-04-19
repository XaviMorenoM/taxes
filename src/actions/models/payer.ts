import payer from '../../db/models/payer'

export default {
  get: true,
  post: (data: {}) => payer.create(data)
}
