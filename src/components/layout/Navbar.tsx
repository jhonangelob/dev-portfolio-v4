'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

const NAVIGATIONS = ['about', 'services', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeNav, setActiveNav] = useState<string>('about');

  const handleClickNav = (nav: string) => {
    setActiveNav(nav);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'bg-background sticky top-0 w-full px-4 opacity-95',
        scrollY >= 40 && 'border-b'
      )}
    >
      <div className='mx-auto flex max-w-6xl flex-row items-center justify-between px-3 py-4'>
        <Link
          href='/'
          className='text-accent-foreground text-xl font-bold italic'
        >
          jhn.
        </Link>
        <div className='flex flex-row gap-10'>
          {NAVIGATIONS.map((item) => (
            <Link
              href={'#' + item}
              key={item}
              className={cn(
                'text-muted-foreground hover:text-foreground relative cursor-pointer text-[13px] font-medium capitalize transition-all duration-300',
                activeNav === item ? 'text-foreground' : ''
              )}
              onClick={() => handleClickNav(item)}
            >
              {item}
              <span
                className={cn(
                  'bg-primary absolute -bottom-0.5 left-0 h-px w-full transition-all duration-300 group-hover:w-full',
                  activeNav === item ? 'visible' : 'hidden'
                )}
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
