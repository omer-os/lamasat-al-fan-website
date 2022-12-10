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
  ],
};
