import express from 'express'

export default (port: number) => {
	const app = express()
	app.listen(port, () => console.log(`Started server on ${port}`))
}
