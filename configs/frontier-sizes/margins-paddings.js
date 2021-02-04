const { keysToOptions } = require('../helpers');

const keys = [
	'1px',
	'2px',
	'4px',
	'8px',
	'10px',
	'12px',
	'16px',
	'20px',
	'24px',
	'30px',
	'32px',
	'40px',
];

const commonOptions = keysToOptions(keys);
const negativeOptions = keysToOptions(keys.map(key => `-${key}`));
const autoOptions = {auto: 'auto'};
const zeroOptions = {'0': 0};

const padding = {
	...zeroOptions,
	...commonOptions
};

const margin = {
	...autoOptions,
	...zeroOptions,
	...commonOptions,
	...negativeOptions
};

module.exports = {
	padding,
	margin,
	space: padding
};
