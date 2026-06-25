import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Exhibitor } from '../../types';
import { slideUp } from '../../utils/animations';

export function ExhibitorCard({ exhibitor }: { exhibitor: Exhibitor }) {
  return (
    <motion.div variants={slideUp} whileHover={{ y: -7, scale: 1.012 }}>
      <Link
        to={`/exposants/${exhibitor.id}`}
        className="focus-ring group relative block min-h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-soft"
      >
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-gold/20 to-turquoise/20" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-premium text-lg font-extrabold text-white">
        {exhibitor.name.slice(0, 2).toUpperCase()}
      </div>
      <p className="relative mt-5 text-sm font-black uppercase tracking-[0.12em] text-gold">{exhibitor.sector}</p>
      <h3 className="relative mt-2 text-xl font-black uppercase leading-tight text-ink">{exhibitor.name}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{exhibitor.description}</p>
      <div className="mt-5 flex items-center justify-between text-sm font-bold text-ink">
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-turquoise" /> Stand {exhibitor.standNumber}
        </span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
      </Link>
    </motion.div>
  );
}
