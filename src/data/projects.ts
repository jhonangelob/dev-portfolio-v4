export type Project = {
  name: string;
  description: string;
  type: string;
  stack: string[];
  github: string;
  live: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Homebase',
    description:
      'A personal browser new tab dashboard built as a Chrome extension. Features bookmarks management with collapsible groups, a notes system with full CRUD and tagging, theme switching, and a fully persistent nested settings store.',
    type: 'Personal project',
    stack: [
      'TanStack Start',
      'TanStack Router',
      'Zustand',
      'shadcn/ui',
      'Tailwind CSS',
    ],
    github: 'https://github.com/jhonangelob/homebase',
    live: '#',
  },
  {
    name: 'Portfolio Website',
    description:
      'Personal portfolio site designed and built from scratch — clean dark aesthetic, smooth scroll animations, and fully responsive across all screen sizes.',
    type: 'Personal project',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Next.js',
      'motion',
      'shadcn',
      'Formspree',
    ],
    github: 'https://github.com/jhonangelob/dev-portfolio-v4',
    live: 'https://www.jhonangelob.com/',
  },
];
