'use client';

import { motion } from 'framer-motion';

import { STACK } from '@/data/stack';
import { fadeUp, stagger } from '@/lib/motion';

const TechStack = () => {
  return (
    <div className='w-full border-b px-4'>
      <div className='mx-auto flex h-full w-full max-w-6xl flex-col items-center gap-16 py-30'>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-row'
        >
          <motion.div
            variants={fadeUp}
            className='text-muted-foreground w-80 min-w-80 text-sm font-light uppercase'
          >
            04 — Stack
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='text-foreground text-4xl font-bold'
          >
            Technologies &
            <br />
            <span className='text-primary italic'>tools I use.</span>
          </motion.p>
        </motion.div>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='flex w-full flex-row'
        >
          <div className='w-80 min-w-80' />
          <motion.div variants={fadeUp}>
            {STACK.map((category) => (
              <div key={category.label} className='mb-8 last:mb-0'>
                <p className='text-muted-foreground mb-3 text-xs tracking-widest uppercase'>
                  {category.label}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className='border-border text-muted-foreground bg-card hover:text-foreground rounded-sm border px-3 py-1.5 text-xs transition-colors duration-200 hover:border-white/20'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
