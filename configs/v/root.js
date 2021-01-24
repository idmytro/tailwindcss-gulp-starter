module.exports = function ({addUtilities, config}) {
    const options = config().theme?.spacing || {};

    // const newUtilities = Object.keys(options).reduce((result, key) => {
    //     result[`.gap-y-${key}`] = {
    //         'row-gap': `var(--${key})`
    //     };
    //     return result;
    // }, {});

    const newUtilities = {
        ':root': Object.keys(options).reduce((result, key) => {
            console.log(options[key], result);
            result[`--${key}`] = options[key];
            return result;
        }, {})
    }

    addUtilities(newUtilities);
}
