module.exports = {
  apps: [
    {
      name: 'simple-application',
      script: './bin/www',
      env: {
        NODE_ENV: 'production',
        PORT: 8080,
        HOST: '0.0.0.0'
      }
    }
  ]
};
