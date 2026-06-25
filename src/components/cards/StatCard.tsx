import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/animations';

export function StatCard({ value, label, icon }: { value: string | number; label: string; icon?: ReactNode }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -5 }} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">{icon}</div>
      <p className="text-3xl font-black text-ink">{value}</p>
      <p className="mt-2 text-sm font-semibold text-slate-600">{label}</p>
    </motion.div>
  );
}
