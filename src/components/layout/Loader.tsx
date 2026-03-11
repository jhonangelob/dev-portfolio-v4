'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='bg-background fixed inset-0 z-999999 flex items-center justify-center'
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className='text-foreground text-2xl font-semibold italic'
          >
            jhn
            <motion.span
              initial={{ opacity: 0, y: 10, color: 'var(--foreground)' }}
              animate={{ opacity: 1, y: 0, color: 'var(--primary)' }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.4,
                color: { delay: 0.8, duration: 0.4 },
              }}
            >
              .
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
