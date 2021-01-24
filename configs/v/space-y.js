module.exports = function ({addUtilities, config}) {
    const options = config().theme?.spacing || {};

    /*
    .space-y-0 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse:0;margin-top:calc(0 * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0 * var(--tw-space-y-reverse))}
.space-y-2px > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse:0;
    margin-top:calc(2px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom:calc(2px * var(--tw-space-y-reverse))
}

    */

    const newUtilities = Object.keys(options).reduce((result, key) => {
        result[`.space-y-${key} > :not([hidden]) ~ :not([hidden])`] = {
            '--tw-space-y-reverse': 0,
            'margin-top': `calc(var(--${key}) * calc(1 - var(--tw-space-y-reverse)))`,
            'margin-bottom': `calc(var(--${key}) * var(--tw-space-y-reverse))`
        };
        return result;
    }, {});

    addUtilities(newUtilities);
}
