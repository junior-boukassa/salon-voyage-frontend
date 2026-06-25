import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { ButtonLink } from './Button';

type CTAButtonProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'outline';
  ariaLabel?: string;
};

export function CTAButton({ to, children, variant = 'primary', ariaLabel }: CTAButtonProps) {
  return (
    <ButtonLink to={to} variant={variant} aria-label={ariaLabel} className="group shadow-lg shadow-ink/10">
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </ButtonLink>
  );
}
