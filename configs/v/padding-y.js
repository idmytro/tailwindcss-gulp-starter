module.exports = function ({addUtilities, config}) {
    const options = config().theme?.spacing || {};

    const newUtilities = Object.keys(options).reduce((result, key) => {
        result[`.py-${key}`] = {
            'padding-top': `var(--${key})`,
            'padding-bottom': `var(--${key})`,
        };
        result[`.pt-${key}`] = {
            'padding-top': `var(--${key})`
        };
        result[`.pb-${key}`] = {
            'padding-bottom': `var(--${key})`
        };
        return result;
    }, {});

    addUtilities(newUtilities);
}
