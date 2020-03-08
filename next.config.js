const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withImages = require('next-images')


module.exports = withImages({
  exportTrailingSlash: true,
 
  webpack(config, options) {
    return config
  }
})


