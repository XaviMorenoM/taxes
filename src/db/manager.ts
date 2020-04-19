import mongoose from 'mongoose'

export default () => {
	mongoose.connect('mongodb://localhost:27017', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

	return {
		models: []
	}
}
