// const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [
        optimizedImages,
        {
            // these are the default values so you don't have to provide them if they are good enough for your use-case.
            // but you can overwrite them here with any valid value you want.
            // imagesFolder: 'images/*',
           // name: '[name].[ext]',
            inlineImageLimit: -1,
            handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
            optimizedImagesInDev: true,
            webp: {
                preset: 'default',
                quality: 50,
              }
        },
    ],
    // [
    //     withImages,
    //     {
    //         webpack(config, options) {
    //             return config;
    //         },
    //     },
    // ],
]);
