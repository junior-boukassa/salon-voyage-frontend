import type { Sponsor } from '../../types';
import { motion } from 'framer-motion';
import { scaleIn } from '../../utils/animations';

export function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -6, scale: 1.02 }} className="rounded-[2rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/12 text-lg font-extrabold text-turquoise">
        {sponsor.name.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="mt-4 text-base font-extrabold text-ink">{sponsor.name}</h3>
      <p className="mt-1 text-sm text-slate-500">{sponsor.packageName}</p>
    </motion.div>
  );
}
