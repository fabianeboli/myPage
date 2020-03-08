const withImages = require('next-images')


module.exports = withImages({
  exportTrailingSlash: true,
 
  webpack(config, options) {
    return config
  }
})


