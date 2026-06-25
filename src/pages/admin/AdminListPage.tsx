import type { ReactNode } from 'react';

type AdminListPageProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function AdminListPage({ title, description, children }: AdminListPageProps) {
  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Administration</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        {children ?? (
          <div className="grid min-h-64 place-items-center rounded-[1.5rem] bg-mist p-8 text-center">
            <div>
              <h2 className="text-xl font-extrabold text-ink">Module prêt à connecter</h2>
              <p className="mt-2 text-sm text-slate-600">Les composants d’administration sont prêts pour les endpoints Laravel API.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
