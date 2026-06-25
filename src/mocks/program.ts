import type { ProgramDay } from '../types';

export const program: ProgramDay[] = [
  {
    day: 'Jour 1',
    date: '02 décembre 2026',
    items: [
      { time: '08h00', title: 'Cérémonie officielle de lancement', description: 'Ouverture institutionnelle de la première édition.' },
      { time: '10h00', title: 'Inauguration et visite des stands', description: 'Découverte des exposants et espaces partenaires.' },
      { time: '16h00', title: 'Mini-concert de bienvenue', description: 'Animation culturelle et accueil du grand public.' },
      { time: '17h30', title: 'Tombola quotidienne', description: 'Tirage et remise de lots aux visiteurs inscrits.' },
    ],
  },
  {
    day: 'Jour 2',
    date: '03 décembre 2026',
    items: [
      { time: '08h00', title: 'Visite des stands', description: 'Rencontres B2B et découverte des offres.' },
      { time: '11h00', title: 'Masterclass tourisme', description: 'Sessions pratiques sur les opportunités du secteur.' },
      { time: '15h00', title: 'Animations interactives', description: 'Démonstrations, quiz et expériences visiteurs.' },
      { time: '17h30', title: 'Tombola quotidienne', description: 'Tirage du jour.' },
    ],
  },
  {
    day: 'Jour 3',
    date: '04 décembre 2026',
    items: [
      { time: '08h00', title: 'Visite des stands', description: 'Mise en relation exposants, visiteurs et partenaires.' },
      { time: '14h00', title: 'Awards du Tourisme Congolais', description: 'Distinctions sectorielles et valorisation des initiatives.' },
      { time: '17h30', title: 'Tombola quotidienne', description: 'Tirage et annonces.' },
    ],
  },
  {
    day: 'Jour 4',
    date: '05 décembre 2026',
    items: [
      { time: '08h00', title: 'Visite des stands', description: 'Dernières rencontres et confirmations commerciales.' },
      { time: '13h00', title: 'Animations de clôture', description: 'Temps fort public et rencontres finales.' },
      { time: '15h00', title: 'Remise des Awards', description: 'Cérémonie officielle de remise.' },
      { time: '17h00', title: 'Tombola finale et concert de clôture', description: 'Clôture festive de l’événement.' },
    ],
  },
];
