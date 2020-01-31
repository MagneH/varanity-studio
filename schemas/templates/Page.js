const pageTemplate = {
    // This is the display name for the type
    title: "pageTemplate",

    // The identifier for this document type used in the api's
    name: "pageTemplate",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "object",

    // Now we proceed to list the fields of our document
    fields: [
        {
            title: "Title",

            // The identifier for this field used in the api's
            name: "title",

            // The type of this field
            type: "string",
        },
    ]
};

export { pageTemplate }
