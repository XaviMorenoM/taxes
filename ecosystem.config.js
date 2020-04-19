module.exports = {
	apps: [
		{
			name: 'taxes.backend',
			script: 'index.ts',
			env: {
				watch: true,
				PORT: 8080
			},
			env_prod: {
				watch: false
			},
			watch_options: {
				useFsEvents: false
			}
		}
	]
}
