export const category = {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
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
      },
      validation: Rule => Rule.required(),
    },
    {
      title: 'Parent Category',
      name: 'parent',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      name: 'title',
      parent: 'parent.title',
      parent2: 'parent.parent.title',
      parent3: 'parent.parent.parent.title',
      parent4: 'parent.parent.parent.title',
    },
    prepare(selection) {
      const { name, parent, parent2, parent3, parent4 } = selection;

      const n = [parent4, parent3, parent2, parent, name]
        .filter(a => a != null)
        .join(' -> ')
        .trim();

      return {
        title: n,
      };
    },
  },
}
