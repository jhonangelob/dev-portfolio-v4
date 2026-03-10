import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}
