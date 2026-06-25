import { motion, useReducedMotion } from 'framer-motion';
import { classNames } from '../../utils/format';

type KubaPatternProps = {
  className?: string;
  variant?: 'gold' | 'dark' | 'light';
};

export function KubaPattern({ className, variant = 'gold' }: KubaPatternProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className={classNames('pointer-events-none absolute inset-0 kuba-pattern', variant === 'dark' && 'opacity-10', variant === 'light' && 'opacity-20', variant === 'gold' && 'opacity-25', className)}
      animate={reducedMotion ? undefined : { backgroundPosition: ['0px 0px', '28px 28px'] }}
      transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
    />
  );
}
