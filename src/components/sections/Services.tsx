'use client';

import { motion } from 'framer-motion';
import { MoveRightIcon } from 'lucide-react';

import { SERVICES } from '@/data/services';
import { fadeUp, stagger } from '@/lib/motion';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <div className='wrapper' id='services'>
      <div className='mx-auto flex h-full w-full max-w-6xl flex-col items-center gap-16 py-30'>
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
            02 — Services
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='text-foreground text-2xl font-bold md:text-4xl'
          >
            What I
            <br />
            <p className='text-primary italic'>offer.</p>
            <p className='text-muted-foreground mt-4 text-sm font-normal'>
              Combining thoughtful design with solid engineering across the
              entire stack — from pixel-perfect UIs to reliable backend systems.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={stagger}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: '-80px' }}
          className='bg-secondary flex w-full flex-col rounded-xl border'
        >
          {SERVICES.map((item, index) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className={cn(
                'flex flex-col items-center gap-4 p-8 md:flex-row',
                index !== SERVICES.length - 1 && 'border-b'
              )}
            >
              <p className='text-foreground text-sm font-bold md:min-w-1/4'>
                {item.name}
              </p>
              <p className='text-muted-foreground text-center text-xs md:text-left'>
                {item.description}
              </p>
              <MoveRightIcon
                size={18}
                className='text-primary ml-auto hidden md:block'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
