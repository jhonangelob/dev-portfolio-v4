'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { fadeUp, staggerHero } from '@/lib/motion';

const Hero = () => {
  return (
    <motion.div
      className='section-wrapper px-4'
      variants={staggerHero}
      initial='hidden'
      animate='show'
    >
      <div className='mx-auto flex h-full max-w-6xl flex-row items-center justify-between gap-20'>
        <div className='space-y-8'>
          <motion.div
            variants={fadeUp}
            className='text-muted-foreground flex flex-row items-center gap-2 text-sm'
          >
            <div className='h-1.5 w-1.5 rounded-full bg-green-400 text-xs' />
            Available for new opportunities
          </motion.div>
          <motion.div
            variants={fadeUp}
            className='text-foreground text-4xl font-bold md:text-7xl'
          >
            I specialize in the
            <br /> intricate domain of
            <br />
            <span className='text-primary italic'>Web Development.</span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className='text-secondary-foreground text-xs md:text-sm'
          >
            Software Engineer based in the Philippines — building scalable,
            <br className='hidden md:block' /> user-focused web applications
            with modern tooling and a strong eye
            <br className='hidden md:block' /> for quality.
          </motion.p>
          <motion.div variants={fadeUp} className='space-x-2'>
            <Link
              href='#projects'
              className='bg-primary text-foreground hover:bg-primary/80 cursor-pointer rounded-sm border px-4 py-2 text-xs md:text-sm'
            >
              View my work
            </Link>
            <Link
              href='#contact'
              className='bg-background text-muted-foreground hover:text-foreground hover:bg-secondary hover:border-secondary cursor-pointer rounded-sm border px-4 py-2 text-xs md:text-sm'
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
        <div className='mt-60 hidden min-w-90 space-y-4 lg:block'>
          <motion.p
            variants={fadeUp}
            className='text-muted-foreground text-xs uppercase'
          >
            Quick overview
          </motion.p>
          <motion.div
            variants={fadeUp}
            className='bg-secondary rounded-2xl border'
          >
            <div className='flex flex-row items-center justify-between border-b p-4'>
              <p className='text-muted-foreground text-xs'>Role</p>
              <p className='text-accent-foregorund text-xs font-bold'>
                Software Engineer
              </p>
            </div>
            <div className='flex flex-row items-center justify-between border-b p-4'>
              <p className='text-muted-foreground text-xs'>Experience</p>
              <p className='text-accent-foregorund text-xs font-bold'>
                3+ years
              </p>
            </div>
            <div className='flex flex-row items-center justify-between border-b p-4'>
              <p className='text-muted-foreground text-xs'>Location</p>
              <p className='text-accent-foregorund text-xs font-bold'>
                Philippines
              </p>
            </div>
            <div className='flex flex-row items-center justify-between border-b p-4'>
              <p className='text-muted-foreground text-xs'>Current</p>
              <p className='text-accent-foregorund text-xs font-semibold'>
                Solutions in Engineering
              </p>
            </div>
            <div className='flex flex-row items-center justify-between p-4'>
              <p className='text-muted-foreground text-xs'>Status</p>
              <p className='text-xs font-bold text-green-400'>Open to work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
