export default {
  name: "categories",
  title: "categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "LocaleString",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "order",
      title: "order",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      order: "order",
    },
  },
};
