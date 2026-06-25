import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

type FieldProps = {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
};

export function Input({ label, error, registration, ...props }: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">{label}</span>
      <input
        className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm"
        {...registration}
        {...props}
      />
      {error && <span className="mt-1 block text-sm font-semibold text-red-600">{error}</span>}
    </label>
  );
}

export function Select({
  label,
  error,
  registration,
  children,
  ...props
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">{label}</span>
      <select
        className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm"
        {...registration}
        {...props}
      >
        {children}
      </select>
      {error && <span className="mt-1 block text-sm font-semibold text-red-600">{error}</span>}
    </label>
  );
}

export function Textarea({
  label,
  error,
  registration,
  ...props
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-ink">{label}</span>
      <textarea
        className="focus-ring mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink shadow-sm"
        {...registration}
        {...props}
      />
      {error && <span className="mt-1 block text-sm font-semibold text-red-600">{error}</span>}
    </label>
  );
}
