import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { pageTransition } from '../../utils/animations';

export function PageTransition({ children }: PropsWithChildren) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
      {children}
    </motion.div>
  );
}
