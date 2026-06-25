# Salon du Voyage de Kinshasa

Frontend React complet pour la plateforme digitale du **Salon du Voyage de Kinshasa**, 1ère édition, prévue du 02 au 05 décembre 2026 au Silikin Village.

## Stack

- React + Vite + TypeScript
- Tailwind CSS
- React Router
- Axios
- React Hook Form + Zod
- Zustand

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Configuration API

Copiez `.env.example` vers `.env` puis adaptez l’URL si nécessaire.

```bash
VITE_API_URL=http://localhost:8000/api
```

Le frontend est prêt pour une API Laravel/PostgreSQL. Les services dans `src/services` utilisent Axios et prévoient un token Bearer, compatible avec une future intégration Sanctum ou JWT.

## Pages incluses

- Accueil, À propos, Programme & animations, Sponsors, Devenir sponsor
- Exposants, Détail exposant, Réserver un stand, Carte interactive des stands
- Inscription visiteur, Badge visiteur, Contact, FAQ
- Login admin et dashboard sécurisé côté interface
- Modules admin: utilisateurs, sponsors, exposants, visiteurs, stands, réservations, paiements, badges, emails, statistiques, exports

## Données mockées

Les données initiales sont isolées dans `src/mocks`: sponsors, packages sponsors, exposants, stands, visiteurs, programme et statistiques dashboard.

## Visuel local

Le hero utilise un visuel bitmap généré et stocké dans `src/assets/images/kinshasa-travel-hero.png`.
