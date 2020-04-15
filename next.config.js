const withSass = require('@zeit/next-sass')
const dotenv = require('dotenv')
const path = require('path')
const Dotenv = require('dotenv-webpack')

dotenv.config()

module.exports = withSass({
  env: { MONGO_URI: 'mongodb+srv://Ebere:qWjOLsZTlMxY0uHM@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority' },
  webpack: config => {
    config.plugins = config.plugins || []

    config.node = {
      fs: 'empty'
    }

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ]

    return config
  },
})