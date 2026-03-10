import Link from 'next/link';

import { SOCIAL_LINKS } from '@/data/links';

const Footer = () => {
  return (
    <footer className='px-4'>
      <div className='mx-auto flex max-w-6xl flex-row items-center justify-between p-4'>
        <span className='text-muted-foreground text-xs font-light'>
          © 2026 Jhon Angelo Bustarde
        </span>
        <div className='flex flex-row gap-6'>
          {SOCIAL_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className='text-muted-foreground hover:text-foreground cursor-pointer text-xs transition-all duration-300'
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
