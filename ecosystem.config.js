module.exports = {
  apps : [{
    name: "taxes.backend",
    script: 'index.ts',
    env: {
      watch: ['.']
    },
    env_prod: {
      watch: false,
    }
  }],
};
