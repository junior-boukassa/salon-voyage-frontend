import type { PropsWithChildren, ReactNode } from 'react';
import { classNames } from '../../utils/format';
import { AnimatedSection } from '../animations/AnimatedSection';
import { KubaPattern } from './KubaPattern';
import { SectionHeader } from './SectionHeader';

type SectionProps = PropsWithChildren<{
  eyebrow?: string;
  title?: string;
  description?: string;
  aside?: ReactNode;
  className?: string;
  muted?: boolean;
}>;

export function Section({ eyebrow, title, description, aside, children, className, muted }: SectionProps) {
  return (
    <section className={classNames('relative overflow-hidden py-16 sm:py-20', muted && 'bg-mist', className)}>
      {muted && <KubaPattern className="opacity-[0.08]" variant="light" />}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || eyebrow || description || aside) && (
          <SectionHeader eyebrow={eyebrow} title={title ?? ''} description={description} action={aside} />
        )}
        <AnimatedSection>{children}</AnimatedSection>
      </div>
    </section>
  );
}
