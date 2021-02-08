const templates = {
    // This is the display name for the type
    title: "Templates",

    // The identifier for this document type used in the api's
    name: "templates",

    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        {
            title: "Title",

            // The identifier for this field used in the api's
            name: "title",

            // The type of this field
            type: "string",
        },
        {
            title: 'Template Set',
            name: 'templateSet',
            type: 'array',
            of: [
                {type: 'pageTemplate'},
                {type: 'articleTemplate'},
                {type: 'frontPageTemplate'},
            ],
        }
    ]
};

export { templates }
