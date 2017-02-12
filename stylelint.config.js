module.exports = {
    extends: [
        'stylelint-config-standard',
    ],

    rules: {
        indentation: 4,

        'shorthand-property-no-redundant-values': null,

        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['global', 'local'],
        }],
    },
};
