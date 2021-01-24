const variables = require('./variables');
const colors = require('./colors');

module.exports = {
	corePlugins: [],
	theme: {
		colors,
		screens: [],
		extend: {
		}
	},
	variants: {
	},
	plugins: [
		require('tailwind-css-variables')(variables, {})
	]
};
