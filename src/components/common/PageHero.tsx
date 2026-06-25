import type { ReactNode } from 'react';
import { KubaPattern } from './KubaPattern';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-premium py-16 text-white sm:py-20">
      <KubaPattern className="opacity-[0.12]" variant="dark" />
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gold/10" />
      <div className="absolute bottom-0 left-0 h-3 w-2/3 bg-turquoise" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        {eyebrow && <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight sm:text-5xl">{title}</h1>
        {description && <p className="max-w-3xl text-lg leading-8 text-white/78">{description}</p>}
        {children}
      </div>
    </section>
  );
}
