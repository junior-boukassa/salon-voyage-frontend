import type { DashboardStats } from '../types';

export const dashboardStats: DashboardStats = {
  totalVisitors: 7420,
  totalExhibitors: 86,
  totalSponsors: 18,
  availableStands: 64,
  reservedStands: 28,
  lockedStands: 8,
  successfulPayments: 92,
  failedPayments: 6,
  revenue: 124500,
  latestRegistrations: [
    { id: 'r1', name: 'Amina Mbala', type: 'Visiteur', date: '2026-06-25' },
    { id: 'r2', name: 'KinPay Travel', type: 'Exposant', date: '2026-06-25' },
    { id: 'r3', name: 'Congo Airways', type: 'Sponsor', date: '2026-06-24' },
  ],
};
