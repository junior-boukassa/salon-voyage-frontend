import { Lock, MousePointer2 } from 'lucide-react';
import { useMemo } from 'react';
import { stands } from '../../mocks/stands';
import { useCountdown } from '../../hooks/useCountdown';
import { useAppStore } from '../../store/useAppStore';
import type { Stand } from '../../types';
import { classNames, formatCurrency } from '../../utils/format';
import { StandCard } from './StandCard';

const zones = [
  { label: 'Accueil salon', className: 'left-[4%] bottom-7 bg-gold text-premium' },
  { label: 'LED accueil', className: 'left-[20%] bottom-7 bg-premium text-white' },
  { label: 'Scène centrale', className: 'left-[42%] top-[47%] bg-gold text-premium' },
  { label: 'VR space', className: 'right-[7%] top-[9%] bg-turquoise text-white' },
  { label: 'Medias Square', className: 'right-[6%] bottom-[15%] bg-white text-ink border border-slate-200' },
  { label: 'Espaces restauration', className: 'left-[5%] top-[62%] bg-white text-ink border border-slate-200' },
  { label: 'Orange Money', className: 'left-[62%] top-[72%] bg-gold text-premium' },
  { label: 'illicocash', className: 'left-[75%] top-[72%] bg-white text-ink border border-slate-200' },
  { label: 'Airtel Money', className: 'left-[62%] top-[82%] bg-red-600 text-white' },
  { label: 'Mpesa', className: 'left-[75%] top-[82%] bg-turquoise text-white' },
];

const standStatuses = ['disponible', 'reserve', 'verrouille', 'paye'];

export function StandMap({ sector }: { sector?: string }) {
  const { selectedStand, lockedStandId, lockUntil, selectStand } = useAppStore();
  const countdown = useCountdown(lockUntil);

  const visibleStands = useMemo(() => stands.filter((stand) => !sector || stand.sector === sector), [sector]);

  const withClientStatus = (stand: Stand) => {
    if (stand.id === lockedStandId && countdown.remaining > 0) return { ...stand, status: 'verrouille' as const };
    return stand;
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
      <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
        <div className="absolute inset-0 opacity-[0.08] kuba-pattern" />
        <div className="absolute left-[4%] right-[4%] top-1/2 h-20 -translate-y-1/2 rounded-full bg-slate-100" />
        <div className="absolute left-[55%] top-[5%] rounded-3xl bg-mist px-4 py-3 text-xs font-black uppercase text-ink">Parcs et sites touristiques</div>
        <div className="absolute left-[6%] top-[5%] rounded-3xl bg-mist px-4 py-3 text-xs font-black uppercase text-ink">Compagnies aériennes & agences</div>
        <div className="absolute left-[7%] top-[54%] rounded-3xl bg-mist px-4 py-3 text-xs font-black uppercase text-ink">HORECA</div>
        {zones.map((zone) => (
          <span key={zone.label} className={classNames('absolute rounded-2xl px-3 py-2 text-[11px] font-black uppercase shadow-sm', zone.className)}>
            {zone.label}
          </span>
        ))}
        {visibleStands.map((baseStand) => {
          const stand = withClientStatus(baseStand);
          const disabled = stand.status !== 'disponible';
          return (
            <StandCard
              key={stand.id}
              stand={stand}
              disabled={disabled}
              selected={selectedStand?.id === stand.id}
              onSelect={() => selectStand(baseStand)}
            />
          );
        })}
      </div>
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/12 text-gold">
            {countdown.remaining > 0 ? <Lock className="h-5 w-5" /> : <MousePointer2 className="h-5 w-5" />}
          </span>
          <div>
            <p className="text-sm font-bold text-slate-500">Sélection</p>
            <h3 className="text-xl font-extrabold text-ink">{selectedStand ? `Stand ${selectedStand.number}` : 'Aucun stand'}</h3>
          </div>
        </div>
        {selectedStand ? (
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p><strong className="text-ink">Secteur :</strong> {selectedStand.sector}</p>
            <p><strong className="text-ink">Surface :</strong> {selectedStand.size}</p>
            <p><strong className="text-ink">Tarif :</strong> {formatCurrency(selectedStand.price)}</p>
            {countdown.remaining > 0 && (
              <div className="rounded-[1.5rem] bg-premium p-4 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">Verrouillage temporaire</p>
                <p className="mt-2 text-4xl font-black">{countdown.label}</p>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-6 text-sm leading-6 text-slate-600">Sélectionnez un stand disponible pour démarrer le verrouillage de 3 minutes.</p>
        )}
        <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
          {standStatuses.map((status) => (
            <span key={status} className="flex items-center gap-2">
              <span className={classNames('h-3 w-3 rounded-full', status === 'disponible' && 'bg-turquoise', status === 'reserve' && 'bg-slate-300', status === 'verrouille' && 'bg-gold', status === 'paye' && 'bg-premium')} />
              {status}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}
