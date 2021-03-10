import T from '@sanity/base/initial-value-template-builder';

export default [
  ...T.defaults(),
  T.template({
    id: 'articleWithParentCategory',
    title: 'Article with parent category',
    schemaType: 'article',
    parameters: [
      {
        name: 'categoryId',
        type: 'string',
      },
    ],
    value: params => ({
      mainCategory: { _type: 'reference', _ref: params.categoryId },
    }),
  }),
];
