import projects from './projects'
import categories from './categories'
import locations from './locations'
import featuredProjects from './featuredProjects'
import questions from './questions'

const LocaleString = {
  title: 'locale',
  name: 'LocaleString',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    },
    {
      title: 'Arabic',
      name: 'ar',
      type: 'string',
      validation: (Rule) => [Rule.required()],
    },
  ],
}

export const schemaTypes = [
  projects,
  LocaleString,
  categories,
  locations,
  featuredProjects,
  questions,
]
