export default {
  name: 'FeaturedProjects',
  title: 'featured projects',
  type: 'document',
  fields: [
    {
      name: 'project',
      title: 'select a project',
      type: 'reference',
      to: [{type: 'projects'}],
      validation: (Rule) => [Rule.required()],
    },
  ],

  preview: {
    select: {
      title: 'project.ProjectName.en',
      coverImage: 'project.ProjectCover',
    },
    prepare(selection) {
      const {title, coverImage} = selection
      return {
        title: `${title}`,
        media: coverImage,
      }
    },
  },
}
