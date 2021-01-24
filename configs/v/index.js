const variables = require('./variables');
const plugin = require('tailwindcss/plugin')

/*
	--vspace-layout: 20px;
	--vspace-inside-section: 10px;
	--vspace-between-sections: 10px;
	--vspace-between-items: 10px;
	--vspace-item-heading: 10px;
*/

let names = [
	'v-layout',
	'v-inside-section',
	'v-between-sections',
	'v-between-items',
	'v-item-heading',
];
let SPACE = names.reduce((result, name) => {
	result[name] = `var(--${name})`
	return result;
}, {});

module.exports = {
	corePlugins: [
		// 'space',
		// 'margin',
		// 'padding',
		// 'gap',
	],
	theme: {
		// space: SPACE,
		// margin: SPACE,
		// padding: SPACE,
		spacing: {
			'v-layout': '20px',
			'v-inside-section': '16px',
			'v-between-sections': '10px',
			'v-between-items': '10px',
			// 'v-item-heading': '10px',
		},
		screens: [],
		extend: {},

	},
	variants: {
	},
	plugins: [
		// @ts-ignore
		plugin(require('./root')),
		plugin(require('./gap-y')),
		plugin(require('./margin-y')),
		plugin(require('./space-y')),
		plugin(require('./padding-y')),
		// require('tailwind-css-variables')(variables, {})
	]
};
