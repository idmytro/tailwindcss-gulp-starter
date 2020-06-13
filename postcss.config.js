const tailwind = require('tailwindcss')
const tailwindConfig = require('./tailwind')

const clean = require('postcss-clean')
const cleanConfig = require('./configs/clean-css')

module.exports = {
    plugins: [
        tailwind(tailwindConfig),
        clean(cleanConfig)
    ]
}