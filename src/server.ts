import express from 'express'
import manager from './db/manager'
import wireModel from './server/wireModel'

export default (port: number) => {
  const app = express()
  Object.values(manager().models).forEach(model => wireModel(model, app))
  app.listen(port, () => console.log(`Started server on ${port}`))
}
