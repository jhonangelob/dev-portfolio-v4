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
          className='flex w-full flex-row'
        >
          <motion.div
            variants={fadeUp}
            className='text-muted-foreground w-80 min-w-80 text-sm font-light uppercase'
          >
            02 — Services
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='text-foreground text-4xl font-bold'
          >
            What I
            <br />
            <p className='text-primary italic'>offer.</p>
            <p className='text-muted-foreground mt-4 text-sm font-normal'>
              Combining thoughtful design with solid engineering across the
              entire
              <br /> stack — from pixel-perfect UIs to reliable backend systems.
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
                'flex flex-row items-center gap-4 p-8',
                index !== SERVICES.length - 1 && 'border-b'
              )}
            >
              <p className='text-foreground w-1/4 max-w-1/4 min-w-1/4 text-sm font-bold'>
                {item.name}
              </p>
              <p className='text-muted-foreground text-xs'>
                {item.description}
              </p>
              <MoveRightIcon size={18} className='text-primary ml-auto' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
