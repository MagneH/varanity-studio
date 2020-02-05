const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'no', title: 'Norsk' },
];

export const localeString = {
    name: 'localeString',
    type: 'object',
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: {collapsible: false}
        }
    ],
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: 'string',
            fieldset: lang.isDefault ? null : 'translations'
        }
    ))
};
