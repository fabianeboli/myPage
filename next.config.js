// const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [
        optimizedImages,
        {
         
            inlineImageLimit: -1,
            handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
            optimizedImagesInDev: true,
            webp: {
                preset: 'default',
                quality: 50,
              }
        },
    ],
    
]);
