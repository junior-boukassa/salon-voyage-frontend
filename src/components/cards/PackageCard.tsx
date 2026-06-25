import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { ButtonLink } from '../common/Button';
import type { SponsorPackage } from '../../types';
import { slideUp } from '../../utils/animations';

export function PackageCard({ item }: { item: SponsorPackage }) {
  return (
    <motion.article
      variants={slideUp}
      whileHover={{ y: -8, scale: 1.015 }}
      className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft"
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-gold via-turquoise to-ink" />
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/12" />
      {item.featured && (
        <span className="relative mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gold/12 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-gold">
          <Sparkles className="h-3.5 w-3.5" /> Prioritaire
        </span>
      )}
      <h3 className="relative text-2xl font-black uppercase leading-tight text-ink">{item.name}</h3>
      <p className="mt-2 text-sm font-semibold text-turquoise">{item.visibility}</p>
      <ul className="mt-5 space-y-3 text-sm text-slate-600">
        {item.benefits.map((benefit) => (
          <li key={benefit} className="flex gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-turquoise" />
            {benefit}
          </li>
        ))}
      </ul>
      <ButtonLink to={`/devenir-sponsor?package=${item.id}`} className="mt-6 w-full" variant={item.featured ? 'primary' : 'outline'}>
        Choisir ce package
      </ButtonLink>
    </motion.article>
  );
}
