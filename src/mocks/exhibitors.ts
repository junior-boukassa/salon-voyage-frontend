import type { Exhibitor } from '../types';

export const exhibitors: Exhibitor[] = [
  {
    id: 'voyages-kivu',
    name: 'Voyages Kivu Expériences',
    sector: 'Agences & Tour-opérateurs',
    standNumber: 'A04',
    description: 'Circuits immersifs autour du lac Kivu, des volcans et des expériences nature.',
    products: ['Séjours découverte', 'Guides locaux', 'Packages groupes'],
    website: 'https://example.com',
    featured: true,
  },
  {
    id: 'fleuve-congo',
    name: 'Fleuve Congo Cruises',
    sector: 'Hébergement',
    standNumber: 'B02',
    description: 'Offres de croisières et d’hébergements sur le corridor du fleuve Congo.',
    products: ['Croisières', 'Lodges', 'Excursions'],
    website: 'https://example.com',
    featured: true,
  },
  {
    id: 'kin-pay',
    name: 'KinPay Travel',
    sector: 'Paiement & Fintech',
    standNumber: 'C03',
    description: 'Solutions de paiement et de réservation pour opérateurs touristiques.',
    products: ['Paiement mobile', 'Billetterie', 'Reporting'],
    website: 'https://example.com',
  },
  {
    id: 'saveurs-rdc',
    name: 'Saveurs RDC',
    sector: 'Gastronomie',
    standNumber: 'D01',
    description: 'Expériences culinaires congolaises pour circuits et événements.',
    products: ['Dégustations', 'Catering', 'Ateliers'],
    website: 'https://example.com',
  },
];
