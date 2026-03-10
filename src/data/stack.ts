export type StackCategory = {
  label: string;
  items: string[];
};

export const STACK: StackCategory[] = [
  {
    label: 'Frontend',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Sass',
      'styled-components',
      'Ant Design',
      'Material UI',
      'TanStack',
      'GraphQL',
    ],
  },
  {
    label: 'Backend & Cloud',
    items: ['Node.js', 'Express', 'Python', 'AWS', 'Azure', 'Prisma'],
  },
  {
    label: 'Tooling & Others',
    items: [
      'git',
      'Figma',
      'Postman',
      'Sanity',
      'Contentful',
      'Stripe',
      'Sentry',
      'Slack',
      'HeidiSQL',
    ],
  },
];
