export default {
  title: "All Projects",
  name: "projects",
  type: "document",
  fields: [
    {
      title: "Document Name",
      name: "SanityName",
      type: "string",
    },
    {
      title: "project name",
      name: "ProjectName",
      type: "LocaleString",
      description: "should be uniqe",
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "project description",
      name: "description",
      type: "LocaleString",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "ProjectName.en",
        maxLength: 20,
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "cover image",
      name: "ProjectCover",
      type: "image",
      description: "project first cover. ",
    },
    {
      name: "ProjectImages",
      title: "ProjectImages",
      type: "array",
      of: [{ type: "image" }],
    },

    // {
    //   title: "Category",
    //   name: "Category",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "residential", value: "residential" },
    //       { title: "commercial", value: "commercial" },
    //       { title: "govermental", value: "govermental" },
    //     ],
    //   },
    // },
    {
      name: "category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => [Rule.required()],
    },
  ],
};
