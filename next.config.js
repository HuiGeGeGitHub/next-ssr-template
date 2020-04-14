const webpack = require("webpack")
const path = require("path")
const withSass = require("@zeit/next-sass")
const withCss = require('@zeit/next-css')
const withPlugins = require("next-compose-plugins/lib")

module.exports = withPlugins([withSass, withCss], {
    /* webpack(config, options) { // 貌似新的next 已经内置配置 不需要配置sass ts
        const { dev, isServer } = options
        return config
    }, */
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    }
})
