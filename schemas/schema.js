// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import page document types
import { pageType1 } from './pages/pageType1'
import { pageType2 } from './pages/pageType2'

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
    pageType1,
    pageType2,
    /* Your Block Document Types here! */
  ])
})
