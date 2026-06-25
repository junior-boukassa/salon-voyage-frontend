export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat('fr-CD', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);

export const classNames = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
