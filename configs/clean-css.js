module.exports = {
    format: {
        breaks: { // controls where to insert breaks
            afterAtRule: false, // controls if a line break comes after an at-rule; e.g. `@charset`; defaults to `false`
            afterBlockBegins: false, // controls if a line break comes after a block begins; e.g. `@media`; defaults to `false`
            afterBlockEnds: false, // controls if a line break comes after a block ends, defaults to `false`
            afterComment: false, // controls if a line break comes after a comment; defaults to `false`
            afterProperty: false, // controls if a line break comes after a property; defaults to `false`
            afterRuleBegins: false, // controls if a line break comes after a rule begins; defaults to `false`
            afterRuleEnds: true, // controls if a line break comes after a rule ends; defaults to `false`
            beforeBlockEnds: false, // controls if a line break comes before a block ends; defaults to `false`
            betweenSelectors: false // controls if a line break comes between selectors; defaults to `false`
        },
        breakWith: '\n', // controls the new line character, can be `'\r\n'` or `'\n'` (aliased as `'windows'` and `'unix'` or `'crlf'` and `'lf'`); defaults to system one, so former on Windows and latter on Unix
        indentBy: 0, // controls number of characters to indent with; defaults to `0`
        spaces: { // controls where to insert spaces
            aroundSelectorRelation: true, // controls if spaces come around selector relations; e.g. `div > a`; defaults to `false`
            beforeBlockBegins: true, // controls if a space comes before a block begins; e.g. `.block {`; defaults to `false`
            beforeValue: false // controls if a space comes before a value; e.g. `width: 1rem`; defaults to `false`
        },
        semicolonAfterLastProperty: false // controls removing trailing semicolons in rule; defaults to `false` - means remove
    }
};
