export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Current' | 'Previous' | 'Internship';
  description: string;
};

export const EXPERIENCES: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Solutions in Engineering',
    period: 'Jan 2026 — Present',
    location: 'Queensland, AU · Remote',
    type: 'Current',
    description:
      'Building internal tooling and data-heavy applications including a Mining Tool for sinking fund and strata property data. Working extensively with MUI DataGrid v7+, TanStack Query, Zod validation, and AWS. Set up Husky pre-push hooks and lint-staged for team-wide code quality enforcement.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'Vananaz Technologies Inc.',
    period: 'Jan 2022 — Dec 2025',
    location: 'Cebu, PH · Remote',
    type: 'Previous',
    description:
      'Developed and maintained scalable web applications using React and TypeScript. Contributed to frontend architecture decisions, performance optimization, and full-stack feature delivery across multiple client projects.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Internship Program',
    period: '2021',
    location: '',
    type: 'Internship',
    description:
      'Gained foundational professional experience in web development — collaborating in a team environment and delivering features using HTML, CSS, JavaScript, and backend integration.',
  },
];
