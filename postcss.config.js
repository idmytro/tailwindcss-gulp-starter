const tailwind = require('tailwindcss')
const tailwindConfig = require('./tailwind')

const clean = require('postcss-clean')
const cleanConfig = require('./configs/clean-css')

module.exports = {
    plugins: [
        tailwind(tailwindConfig),
        clean(cleanConfig),
        require('postcss-discard-comments')({removeAll: true}),
        require('postcss-banner')({
            inline: true,
            banner: 'styles:start',
            footer: 'styles:end'
        })
    ]
}