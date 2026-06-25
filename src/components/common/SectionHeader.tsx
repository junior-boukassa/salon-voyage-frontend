import type { ReactNode } from 'react';
import { AnimatedSection } from '../animations/AnimatedSection';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, align = 'left', action }: SectionHeaderProps) {
  return (
    <div className={`mb-10 flex flex-col gap-5 ${align === 'center' ? 'items-center text-center' : 'lg:flex-row lg:items-end lg:justify-between'}`}>
      <AnimatedSection className={align === 'center' ? 'max-w-3xl' : 'max-w-3xl'}>
        {eyebrow && <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-gold">{eyebrow}</p>}
        <h2 className="text-3xl font-black uppercase leading-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
      </AnimatedSection>
      {action}
    </div>
  );
}
