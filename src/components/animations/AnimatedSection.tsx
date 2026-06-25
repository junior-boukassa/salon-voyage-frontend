import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { slideUp } from '../../utils/animations';

type AnimatedSectionProps = PropsWithChildren<HTMLMotionProps<'div'>>;

export function AnimatedSection({ children, variants = slideUp, ...props }: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={variants} {...props}>
      {children}
    </motion.div>
  );
}
