import { motion } from 'framer-motion';
import type { Stand } from '../../types';
import { classNames } from '../../utils/format';

const statusStyles = {
  disponible: 'bg-turquoise text-white hover:ring-4 hover:ring-turquoise/20',
  reserve: 'bg-slate-300 text-slate-700 cursor-not-allowed',
  verrouille: 'bg-gold text-white cursor-not-allowed',
  paye: 'bg-premium text-white cursor-not-allowed',
};

type StandCardProps = {
  stand: Stand;
  selected?: boolean;
  disabled?: boolean;
  onSelect: () => void;
};

export function StandCard({ stand, selected, disabled, onSelect }: StandCardProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onSelect}
      whileHover={!disabled ? { scale: 1.06 } : undefined}
      animate={selected ? { scale: [1, 1.08, 1], boxShadow: '0 0 0 6px rgba(239, 142, 1, 0.22)' } : { scale: 1 }}
      transition={{ duration: 0.35 }}
      className={classNames(
        'focus-ring absolute flex h-20 w-24 flex-col items-center justify-center rounded-3xl text-xs font-black shadow-sm transition',
        statusStyles[stand.status],
        selected && 'ring-4 ring-gold/30',
      )}
      style={{ left: `${stand.x}%`, top: `${stand.y}%` }}
      title={`${stand.number} - ${stand.sector}`}
    >
      <span>{stand.number}</span>
      <span className="text-[10px] opacity-80">{stand.size}</span>
    </motion.button>
  );
}
