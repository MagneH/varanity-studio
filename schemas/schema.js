// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import page document types
import { article } from './pages/Article'
import { page } from './pages/Page'
import { templates } from './templates/Templates'
import { pageTemplate } from './templates/Page'
import { articleTemplate } from './templates/Article';

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
    /* Your Block Document Types here! */
    pageTemplate,
    articleTemplate,
  ])
})
