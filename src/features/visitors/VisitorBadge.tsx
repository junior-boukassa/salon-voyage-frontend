import { Download } from 'lucide-react';
import { eventInfo } from '../../constants/site';
import { Button } from '../../components/common/Button';

export function VisitorBadge({ visitor }: { visitor: { firstName: string; lastName: string; type: string; city: string } }) {
  return (
    <div className="mx-auto max-w-md rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="rounded-3xl bg-ink p-6 text-white">
        <p className="text-sm font-bold text-gold">{eventInfo.name}</p>
        <h2 className="mt-6 text-3xl font-extrabold">{visitor.firstName} {visitor.lastName}</h2>
        <p className="mt-2 text-white/75">{visitor.type} · {visitor.city}</p>
        <div className="mt-8 grid place-items-center rounded-2xl bg-white p-6">
          <div className="grid h-32 w-32 grid-cols-5 gap-1">
            {Array.from({ length: 25 }).map((_, index) => (
              <span key={index} className={index % 2 === 0 || index % 7 === 0 ? 'bg-ink' : 'bg-white'} />
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm font-bold">{eventInfo.date}</p>
      </div>
      <Button className="mt-5 w-full" icon={<Download className="h-4 w-4" />} onClick={() => window.print()}>
        Télécharger le badge
      </Button>
    </div>
  );
}
