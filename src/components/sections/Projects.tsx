'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { MoveUpRightIcon } from 'lucide-react';

import { PROJECTS } from '@/data/projects';
import { fadeUp, stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const Projects = () => {
  return (
    <div className='wrapper' id='projects'>
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
            05 — Projects
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='text-foreground text-2xl font-bold md:text-4xl'
          >
            Selected
            <br />
            <p className='text-primary italic'>work.</p>
            <p className='text-muted-foreground mt-4 text-sm font-normal'>
              A selection of personal and professional projects reflecting my
              <br className='hidden md:block' /> approach to engineering and
              design.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='bg-secondary grid w-full grid-cols-1 rounded-lg border md:grid-cols-2'
        >
          {PROJECTS.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={cn(
                'flex flex-col gap-4 p-6 md:p-10',
                index % 2 === 0 && 'border-b md:border-r'
              )}
            >
              <div className='flex flex-row justify-between'>
                <p className='text-muted-foreground text-xs uppercase'>
                  {item.type}
                </p>
                <div className='flex flex-row gap-6'>
                  <Link
                    href={item.github}
                    className='text-muted-foreground border-muted-foreground/40 hover:text-foreground border-b pb-2 text-xs uppercase'
                  >
                    Github
                  </Link>
                  <Link
                    href={item.live}
                    className='border-muted-foreground/40 text-muted-foreground hover:text-foreground flex flex-row gap-1 border-b text-xs uppercase transition-colors duration-200'
                  >
                    Preview <MoveUpRightIcon size={10} className='mt-1' />
                  </Link>
                </div>
              </div>
              <p className='text-foreground text-sm font-bold'>{item.name}</p>
              <p className='text-muted-foreground text-justify text-sm'>
                {item.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {item.stack.map((tag) => (
                  <div
                    key={tag}
                    className='border-border text-muted-foreground bg-card hover:text-foreground rounded-sm border px-3 py-1.5 text-xs transition-colors duration-200 hover:border-white/20'
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
