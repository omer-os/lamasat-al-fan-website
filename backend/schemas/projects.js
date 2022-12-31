export default {
  title: 'All Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'project name',
      name: 'ProjectName',
      type: 'LocaleString',
      description: 'should be uniqe',
      validation: (Rule) => [Rule.required()],
    },
    {
      title: 'project location',
      name: 'ProjectLocation',
      type: 'reference',
      to: [{type: 'locations'}],
    },
    {
      title: 'project status',
      name: 'ProjectStatus',
      type: 'string',
      options: {
        list: [
          {title: 'منجز', value: 'done'},
          {title: 'قيد الانشاء', value: 'progress'},
          {title: 'تصميم', value: 'design'},
        ],
      },
    },
    {
      title: 'project description',
      name: 'description',
      type: 'LocaleString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'ProjectName.en',
        maxLength: 20,
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      title: 'cover image',
      name: 'ProjectCover',
      type: 'image',
      description: 'project cover image.',
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'ProjectImages',
      title: 'ProjectImages',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => [Rule.required()],
    },
    {
      name: 'category',
      type: 'reference',
      to: [{type: 'categories'}],
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: 'ProjectName.en',
      media: 'ProjectCover',
    },
  },
}
