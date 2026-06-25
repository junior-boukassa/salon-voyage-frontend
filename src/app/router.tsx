import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminLayout } from '../components/layout/AdminLayout';
import { PublicLayout } from '../components/layout/PublicLayout';
import { AboutPage } from '../pages/public/AboutPage';
import { BecomeSponsorPage } from '../pages/public/BecomeSponsorPage';
import { ContactPage } from '../pages/public/ContactPage';
import { ExhibitorDetailPage } from '../pages/public/ExhibitorDetailPage';
import { ExhibitorsPage } from '../pages/public/ExhibitorsPage';
import { FaqPage } from '../pages/public/FaqPage';
import { HomePage } from '../pages/public/HomePage';
import { ProgramPage } from '../pages/public/ProgramPage';
import { ReserveStandPage } from '../pages/public/ReserveStandPage';
import { SponsorsPage } from '../pages/public/SponsorsPage';
import { StandMapPage } from '../pages/public/StandMapPage';
import { VisitorBadgePage } from '../pages/public/VisitorBadgePage';
import { VisitorRegistrationPage } from '../pages/public/VisitorRegistrationPage';
import { AdminListPage } from '../pages/admin/AdminListPage';
import { DashboardOverviewPage } from '../pages/admin/DashboardOverviewPage';
import { LoginPage } from '../pages/admin/LoginPage';

const adminPages = [
  ['utilisateurs', 'Utilisateurs', 'Gestion des comptes, rôles et accès de la plateforme.'],
  ['sponsors', 'Sponsors', 'Suivi des demandes sponsors, packages, logos et statuts.'],
  ['exposants', 'Exposants', 'Gestion des exposants, profils, produits et pièces associées.'],
  ['visiteurs', 'Visiteurs', 'Consultation des inscriptions, intérêts et badges visiteurs.'],
  ['stands', 'Stands', 'Pilotage des disponibilités, réservations, verrouillages et paiements.'],
  ['reservations', 'Réservations', 'Historique et traitement des réservations de stands.'],
  ['paiements', 'Paiements', 'Suivi des transactions réussies, échouées et à rapprocher.'],
  ['badges', 'Badges', 'Génération, vérification et export des badges visiteurs.'],
  ['emails', 'Emails', 'Préparation des communications et notifications événementielles.'],
  ['statistiques', 'Statistiques', 'Indicateurs clés, courbes et performances de conversion.'],
  ['exports', 'Exports', 'Exports CSV, Excel et rapports opérationnels.'],
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'a-propos', element: <AboutPage /> },
      { path: 'programme', element: <ProgramPage /> },
      { path: 'sponsors', element: <SponsorsPage /> },
      { path: 'devenir-sponsor', element: <BecomeSponsorPage /> },
      { path: 'exposants', element: <ExhibitorsPage /> },
      { path: 'exposants/:id', element: <ExhibitorDetailPage /> },
      { path: 'reserver-stand', element: <ReserveStandPage /> },
      { path: 'stands', element: <StandMapPage /> },
      { path: 'inscription-visiteur', element: <VisitorRegistrationPage /> },
      { path: 'badge-visiteur', element: <VisitorBadgePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'faq', element: <FaqPage /> },
    ],
  },
  { path: '/admin/login', element: <LoginPage /> },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardOverviewPage /> },
      ...adminPages.map(([path, title, description]) => ({
        path,
        element: <AdminListPage title={title} description={description} />,
      })),
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);
