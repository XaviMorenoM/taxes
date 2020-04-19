import mongoose from 'mongoose'
import payer from './models/payer'

export default () => {
	mongoose.connect('mongodb://localhost:27017', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	return {
		models: { payer }
	}
}
