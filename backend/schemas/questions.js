export default {
  name: "questions",
  title: "asked questions",
  type: "document",
  fields: [
    {
      name: "q",
      title: "question",
      type: "LocaleString",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "a",
      title: "answer",
      type: "LocaleString",
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: "q.en",
    },
  },
};
