export const accordeon = {
  name: 'accordeon',
  type: 'object',
  title: 'Accordeon',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Initially Open?',
      name: 'isInitiallyOpen',
      type: 'boolean',
    },
    {
      title: 'Content',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
