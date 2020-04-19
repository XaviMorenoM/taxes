import express from 'express'
import manager from './db/manager'
import wireModel from './server/wireModel'
import bodyParser from 'body-parser'

export default (port: number) => {
  const app = express()
  app.use(bodyParser.urlencoded({ extended: false }))
  Object.values(manager().models).forEach(model => wireModel(model, app))
  app.listen(port, () => console.log(`Started server on ${port}`))
}
