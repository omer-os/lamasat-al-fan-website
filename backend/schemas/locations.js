export default {
  name: "locations",
  title: "locations",
  type: "document",
  fields: [
    {
      name: "location",
      title: "location",
      type: "LocaleString",
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: "location.en",
    },
  },
};
