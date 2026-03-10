import { STACK } from './stack';

export const ABOUT = {
  name: 'Jhon Angelo Bustarde',
  role: 'Software Engineer',
  location: 'Calamba, Laguna · Philippines',
  timezone: 'UTC+8 · Philippine Standard Time',
  availability: 'Open to opportunities',
  email: 'bustarde.aj@gmail.com',
  bio: [
    "I'm a Software Engineer with over 3 years of professional experience, specializing in building scalable, user-focused web applications. I primarily work with React, TypeScript, and Node.js, with hands-on experience across the full development lifecycle on cloud-based solutions.",
    'My background in Information Technology from the Polytechnic University of the Philippines gives me a strong technical foundation that I apply daily in real-world projects. I enjoy solving complex problems, writing clean and maintainable code, and continuously improving both application performance and user experience.',
    "I'm passionate about creating efficient, well-designed web solutions that make a meaningful impact in fast-moving product environments.",
  ],
  skills: STACK.flatMap((category) => category.items),
};
