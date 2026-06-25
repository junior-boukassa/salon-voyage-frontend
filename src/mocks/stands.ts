import type { Stand } from '../types';

export const stands: Stand[] = [
  { id: 'a01', number: 'A01', sector: 'Hébergement', status: 'disponible', price: 850, size: '9 m²', x: 8, y: 14 },
  { id: 'a02', number: 'A02', sector: 'Hébergement', status: 'reserve', price: 850, size: '9 m²', x: 21, y: 14 },
  { id: 'a03', number: 'A03', sector: 'Transport aérien', status: 'paye', price: 1200, size: '12 m²', x: 34, y: 14 },
  { id: 'a04', number: 'A04', sector: 'Agences & Tour-opérateurs', status: 'disponible', price: 900, size: '9 m²', x: 47, y: 14 },
  { id: 'b01', number: 'B01', sector: 'Gastronomie', status: 'disponible', price: 750, size: '9 m²', x: 8, y: 38 },
  { id: 'b02', number: 'B02', sector: 'Hébergement', status: 'reserve', price: 850, size: '9 m²', x: 21, y: 38 },
  { id: 'b03', number: 'B03', sector: 'Paiement & Fintech', status: 'disponible', price: 950, size: '9 m²', x: 34, y: 38 },
  { id: 'b04', number: 'B04', sector: 'Province à l’honneur', status: 'disponible', price: 1100, size: '12 m²', x: 47, y: 38 },
  { id: 'c01', number: 'C01', sector: 'Stand ONT', status: 'paye', price: 0, size: '18 m²', x: 67, y: 20 },
  { id: 'c02', number: 'C02', sector: 'Agences & Tour-opérateurs', status: 'disponible', price: 900, size: '9 m²', x: 80, y: 20 },
  { id: 'c03', number: 'C03', sector: 'Paiement & Fintech', status: 'reserve', price: 950, size: '9 m²', x: 67, y: 48 },
  { id: 'c04', number: 'C04', sector: 'Transport aérien', status: 'disponible', price: 1200, size: '12 m²', x: 80, y: 48 },
];
