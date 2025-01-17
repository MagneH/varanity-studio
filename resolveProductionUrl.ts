const standardLanguage = 'en';

const frontendHostName = process.env.SANITY_STUDIO_FRONTEND_HOST_NAME;

export default function resolveProductionUrl(document) {
    // First, we select a specific type of document
    console.log(document);
    if (document._type === 'article') {
        // Then we get its ID
        let id = document._id;
        // if it's a draft, we split its _id with the "drafts." substring, which will return an array,
        // and get the second item in it, which will be the isolated _id without "drafts."
        if (isDraft(id)) {
            id = document._id.split('drafts.')[1];
        }
        // And return a template string reflecting the URL structure we want. In this case, we're doing a
        // simple conditional to return '&isDraft=true' as a param for drafts as we'll query them
        // differently in the front-end
        return `${frontendHostName}/${standardLanguage}/preview/articles/${id}?${isDraft(document._id) ? 'isDraft=true' : 'isDraft=false'}`
    }
    if (document._type === 'page') {
        // Then we get its ID
        let id = document._id;
        // if it's a draft, we split its _id with the "drafts." substring, which will return an array,
        // and get the second item in it, which will be the isolated _id without "drafts."
        if (isDraft(id)) {
            id = document._id.split('drafts.')[1];
        }
        // And return a template string reflecting the URL structure we want. In this case, we're doing a
        // simple conditional to return '&isDraft=true' as a param for drafts as we'll query them
        // differently in the front-end
        return `${frontendHostName}/${standardLanguage}/preview/pages/${id}?${isDraft(document._id) ? 'isDraft=true' : 'isDraft=false'}`
    }
}

const isDraft = id => id.includes('drafts');

