module.exports = function ({addUtilities, config}) {
    const options = config().theme?.spacing || {};

    const newUtilities = Object.keys(options).reduce((result, key) => {
        result[`.gap-y-${key}`] = {
            'row-gap': `var(--${key})`
        };
        return result;
    }, {});

    addUtilities(newUtilities);
}
