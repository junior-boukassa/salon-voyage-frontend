import type { SponsorPackage } from '../types';

export const sponsorPackages: SponsorPackage[] = [
  {
    id: 'titre',
    name: 'Partenaire Titre',
    visibility: 'Visibilité maximale sur l’ensemble de l’événement',
    featured: true,
    benefits: ['Naming associé au salon', 'Logo premium sur tous les supports', 'Prise de parole officielle', 'Stand premium inclus'],
  },
  {
    id: 'or',
    name: 'Partenaire Or',
    visibility: 'Très forte visibilité institutionnelle et média',
    benefits: ['Logo grand format', 'Espace stand stratégique', 'Mention dans les communiqués', 'Accès networking VIP'],
  },
  {
    id: 'argent',
    name: 'Partenaire Argent',
    visibility: 'Visibilité renforcée sur site et digital',
    benefits: ['Logo sur supports digitaux', 'Stand professionnel', 'Invitations officielles', 'Mention réseaux sociaux'],
  },
  {
    id: 'technique',
    name: 'Partenaire Technique',
    visibility: 'Mise en avant liée à une expertise ou solution',
    benefits: ['Démonstrations dédiées', 'Branding espace technique', 'Intervention masterclass', 'Accès exposants'],
  },
  {
    id: 'soiree',
    name: 'Sponsor Soirée Réseautage',
    visibility: 'Exposition ciblée auprès des décideurs',
    benefits: ['Branding soirée', 'Prise de parole courte', 'Invitations VIP', 'Logo sur invitations'],
  },
  {
    id: 'participant',
    name: 'Participant',
    visibility: 'Présence officielle au salon',
    benefits: ['Mention annuaire', 'Badge participant', 'Accès conférences', 'Kit communication'],
  },
];
