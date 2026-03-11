'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { ABOUT } from '@/data/about';
import { SOCIAL_LINKS } from '@/data/links';
import { fadeUp, stagger } from '@/lib/motion';

const About = () => {
  return (
    <div className='wrapper' id='about'>
      <div className='sub-wrapper'>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-col gap-4 md:flex-row'
        >
          <motion.div
            variants={fadeUp}
            className='text-muted-foreground w-80 min-w-80 text-sm font-light uppercase'
          >
            01 — About
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='text-foreground text-2xl font-bold md:text-4xl'
          >
            Building with
            <br /> purpose
            <span className='text-primary italic'> & precision.</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-col gap-4 md:flex-row'
        >
          <motion.div variants={fadeUp} className='w-80 min-w-80 space-y-2'>
            <p className='text-foreground font-bold'>Jhon Angelo Bustarde</p>
            <p className='text-muted-foreground text-sm font-light'>
              Software Engineer
            </p>
            <div className='mt-4 flex flex-col gap-2'>
              {SOCIAL_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.url}
                  className='text-muted-foreground hover:text-foreground flex cursor-pointer flex-row items-center gap-4 text-sm transition-colors duration-200'
                >
                  <item.icon className='h-4 w-4' />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className='flex flex-col gap-8'>
            {ABOUT.bio.map((item, index) => (
              <p
                key={index}
                className='text-muted-foreground text-justify text-sm leading-relaxed'
              >
                {item}
              </p>
            ))}
            <div className='flex flex-wrap gap-2'>
              {ABOUT.skills.map((item) => (
                <div
                  key={item}
                  className='bg-secondary text-muted-foreground hover:text-foreground rounded-lg border p-2 text-xs transition-colors duration-200'
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
