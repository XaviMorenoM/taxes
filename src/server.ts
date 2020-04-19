import express from 'express'
import manager from './db/manager'

export default (port: number) => {
	const app = express()
	console.log(manager().models)
	app.listen(port, () => console.log(`Started server on ${port}`))
}
