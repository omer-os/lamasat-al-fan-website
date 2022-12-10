import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import projects from "./projects";
import categories from "./categories";
import locations from "./locations";
import featuredProjects from "./featuredProjects";
import questions from "./questions";

const LocaleString = {
  title: "locale",
  name: "LocaleString",
  type: "object",
  fields: [
    {
      title: "English",
      name: "en",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
    {
      title: "Arabic",
      name: "ar",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
  ],
};

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    projects,
    LocaleString,
    categories,
    locations,
    featuredProjects,
    questions,
  ]),
});
