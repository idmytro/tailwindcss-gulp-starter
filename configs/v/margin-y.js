module.exports = function ({addUtilities, config}) {
    const options = config().theme?.spacing || {};

    const newUtilities = Object.keys(options).reduce((result, key) => {
        result[`.my-${key}`] = {
            'margin-top': `var(--${key})`,
            'margin-bottom': `var(--${key})`,
        };
        result[`.mt-${key}`] = {
            'margin-top': `var(--${key})`
        };
        result[`.mb-${key}`] = {
            'margin-bottom': `var(--${key})`
        };
        return result;
    }, {});

    addUtilities(newUtilities);
}
