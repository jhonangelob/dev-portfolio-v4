'use client';

import { motion } from 'framer-motion';

import { EXPERIENCES } from '@/data/experience';
import { fadeUp, stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const Experience = () => {
  return (
    <div className='wrapper scroll-mt-10!' id='experience'>
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
            03 — Experience
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='text-foreground text-2xl font-bold md:text-4xl'
          >
            Where I&apos;ve
            <br />
            <span className='text-primary italic'>worked.</span>
          </motion.p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='w-full border-t'
        >
          {EXPERIENCES.map((item) => (
            <motion.div
              key={item.company}
              variants={fadeUp}
              className='flex w-full flex-col gap-4 border-b py-10 md:flex-row'
            >
              <div className='flex w-80 min-w-80 flex-col gap-1'>
                <p className='text-muted-foreground text-sm'>{item.period}</p>
                <p className='text-muted-foreground text-sm'>{item.location}</p>
                <div
                  className={cn(
                    'mt-1 w-fit rounded-md border px-2 py-1 text-[8px] uppercase',
                    item.type === 'Current'
                      ? 'border border-green-400 text-green-400'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.type}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-foreground text-sm'>{item.role}</p>
                <p className='text-muted-foreground text-sm'>{item.company}</p>
                <p className='text-muted-foreground mt-1 text-sm'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
