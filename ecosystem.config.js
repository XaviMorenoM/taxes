module.exports = {
	apps: [
		{
			name: 'taxes.backend',
			script: 'index.ts',
			env: {
				watch: ['.'],
				PORT: 8080
			},
			env_prod: {
				watch: false
			}
		}
	]
}
