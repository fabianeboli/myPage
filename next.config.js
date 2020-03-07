const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')


module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

