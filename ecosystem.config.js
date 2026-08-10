module.exports = {
  apps: [
    {
      name: 'simple-application',
      script: './bin/www',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        PORT: 8080,
        HOST: '127.0.0.1'
      }
    }
  ]
};
