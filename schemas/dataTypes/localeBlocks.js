const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'no', title: 'Norsk' },
];

export const localeBlocks = {
    name: 'localeBlocks',
    type: 'object',
    fieldsets: [
        {
            title: 'Translations',
            name: 'translations',
            options: { collapsible: false }
        }
    ],
    fields: supportedLanguages.map(lang => (
        {
            title: lang.title,
            name: lang.id,
            type: "array",
            of: [
                { type: "image" },
                {
                    type: 'block',
                    marks: {
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'External link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string',
                                        title: 'URL'
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean'
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            fieldset: lang.isDefault ? null : 'translations'
        }
    ))
};
