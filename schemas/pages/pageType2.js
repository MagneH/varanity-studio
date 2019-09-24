const pageType2 = {
    // This is the display name for the type
    title: "PageType2",

    // The identifier for this document type used in the api's
    name: "pagetype2",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        {
            // The display name for this field
            title: "Navn",

            // The identifier for this field used in the api's
            name: "name",

            // The type of this field
            type: "string",
        }
    ]
};

export { pageType2 }
