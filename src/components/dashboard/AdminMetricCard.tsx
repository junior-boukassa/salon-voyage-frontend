import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/animations';

export function AdminMetricCard({ label, value, icon }: { label: string; value: string | number; icon?: ReactNode }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-slate-500">{label}</p>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/12 text-gold">{icon}</span>
      </div>
      <p className="mt-4 text-3xl font-black text-ink">{value}</p>
    </motion.div>
  );
}
