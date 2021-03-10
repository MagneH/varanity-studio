// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import page document types
import { article } from './documents/Article'
import { page } from './documents/Page'
import { templates } from './templates/Templates'
import { pageTemplate } from './templates/Page'
import { articleTemplate } from './templates/Article';
import { frontPageTemplate } from './templates/FrontPage';
import { authorReference } from './objects/authorReference';
import { bioPortableText } from './objects/bioPortableText';
import { bodyPortableText } from './objects/bodyPortableText';
import { excerptPortableText } from './objects/excerptPortableText';
import { accordeon } from './objects/accordeon';
import { mainImage } from './objects/mainImage';
import { author } from './documents/Author';
import { category } from './documents/Category';
import { localeString } from './dataTypes/localeString';
import { localeText } from './dataTypes/localeText';
import { localeBlocks } from './dataTypes/localeBlocks';

// Import component document types
// import { richTextBlock } from './blocks/richTextBlock';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your Page Document Types here! */
    article,
    page,
    templates,
    author,
    category,
    /* Your Block Document Types here! */
    pageTemplate,
    articleTemplate,
    frontPageTemplate,
    authorReference,
    bioPortableText,
    bodyPortableText,
    excerptPortableText,
    mainImage,
    localeString,
    localeText,
    localeBlocks,
    accordeon,
  ])
})
