const page = {
    // This is the display name for the type
    title: "Pages",

    // The identifier for this document type used in the api's
    name: "page",

    // Documents have the type 'document'. Your schema may describe types beyond documents
    // but let's get back to that later.
    type: "document",

    // Now we proceed to list the fields of our document
    fields: [
        {
            title: "Title",

            // The identifier for this field used in the api's
            name: "title",

            // The type of this field
            type: "localeString",
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            title: "Featured?",

            // The identifier for this field used in the api's
            name: "isFeatured",

            // The type of this field
            type: "boolean",
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    type: 'authorReference'
                }
            ]
        },
        {
            name: 'categories',
            type: 'array',
            title: 'Categories',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'category'
                    }
                }
            ]
        },
        {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Main image'
        },
        {
            name: 'ingress',
            type: 'localeBlocks',
        },
        {
            name: 'body',
            type: 'localeBlocks',
            title: 'Body'
        }
    ],
    preview: {
        select: {
            name: 'title.en',
        },
        prepare(selection) {
            const { name } = selection;

            return {
                title: name,
            };
        },
    },
};

export { page }
