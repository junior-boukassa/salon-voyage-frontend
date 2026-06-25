import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from '../../utils/animations';
import { classNames } from '../../utils/format';

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  tone?: 'gold' | 'turquoise' | 'dark' | 'light';
};

const toneClasses = {
  gold: 'bg-gold text-white',
  turquoise: 'bg-turquoise text-white',
  dark: 'bg-premium text-white',
  light: 'bg-white text-ink',
};

export function FeatureCard({ title, description, icon, tone = 'light' }: FeatureCardProps) {
  return (
    <motion.article
      variants={slideUp}
      whileHover={{ y: -6, scale: 1.01 }}
      className={classNames('relative overflow-hidden rounded-[2rem] border border-white/30 p-6 shadow-soft transition', toneClasses[tone])}
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/12" />
      {icon && <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18">{icon}</div>}
      <h3 className="text-xl font-black uppercase leading-tight">{title}</h3>
      <p className={classNames('mt-3 text-sm leading-6', tone === 'light' ? 'text-slate-600' : 'text-white/78')}>{description}</p>
    </motion.article>
  );
}
