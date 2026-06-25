import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from '../../utils/format';

const variants = {
  primary: 'bg-gold text-white shadow-lg shadow-gold/25 hover:bg-[#d47d00]',
  secondary: 'bg-turquoise text-white shadow-lg shadow-turquoise/20 hover:bg-[#008980]',
  dark: 'bg-premium text-white shadow-lg shadow-premium/20 hover:bg-[#101010]',
  ghost: 'bg-white/90 text-ink shadow-lg shadow-white/10 hover:bg-white',
  outline: 'border border-ink/15 bg-white text-ink hover:border-gold hover:text-gold hover:shadow-lg hover:shadow-gold/10',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  icon?: ReactNode;
};

export function Button({ className, variant = 'primary', icon, children, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 active:translate-y-0',
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}

type ButtonLinkProps = LinkProps & {
  variant?: keyof typeof variants;
  icon?: ReactNode;
};

export function ButtonLink({ className, variant = 'primary', icon, children, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={classNames(
        'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition duration-300 hover:-translate-y-0.5 active:translate-y-0',
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </Link>
  );
}
