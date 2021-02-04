/*
.w-full {width:100%}
.m-20px {margin:20px}
.mt-4px {margin-top:4px}
.mt-10px {margin-top:10px}
.ml-10px {margin-left:10px}
.mt-12px {margin-top:12px}
.mt-20px {margin-top:20px}
.ml-20px {margin-left:20px}
.p-20px {padding:20px}
.pr-4px {padding-right:4px}
.border {border-width:1px}
*/

const px = v => `${v}px`


module.exports = {
	// https://github.com/tailwindcss/tailwindcss/blob/master/src/corePlugins.js
	corePlugins: [
		'width',
		'space',
		'margin',
		'padding',
		'borderWidth',
	],
	// https://tailwindcss.com/docs/theme/#configuration-reference
	theme: {
		borderWidth: {
			'0': '0',
			DEFAULT: '1px'
		},
		width: {
			'0': '0',
			full: '100%'
		},
		space: {
			...require('./margins-paddings').padding
		},
		margin: {
			...require('./margins-paddings').margin,
		},
		padding: {
			...require('./margins-paddings').padding,
		},
		screens: []
	},
	variants: {

	},
	plugins: [

	]
};
