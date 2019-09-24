const pageType1 = {
    // This is the display name for the type
    title: "PageType1",

    // The identifier for this document type used in the api's
    name: "pagetype1",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        // This document has only one field
        {
            // The display name for this field
            title: "Name",

            // The identifier for this field used in the api's
            name: "name",

            // The type of this field
            type: "string",
        }
    ]
};

export { pageType1 }
