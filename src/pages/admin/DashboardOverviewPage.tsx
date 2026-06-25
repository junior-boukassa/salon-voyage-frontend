import { BadgeDollarSign, Building2, CheckCircle2, CreditCard, Ticket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { AdminMetricCard } from '../../components/dashboard/AdminMetricCard';
import { dashboardStats } from '../../mocks/dashboard';
import { formatCurrency } from '../../utils/format';
import { staggerContainer } from '../../utils/animations';

export function DashboardOverviewPage() {
  const metrics = [
    ['Total visiteurs', dashboardStats.totalVisitors, <Users />],
    ['Total exposants', dashboardStats.totalExhibitors, <Building2 />],
    ['Total sponsors', dashboardStats.totalSponsors, <CheckCircle2 />],
    ['Stands disponibles', dashboardStats.availableStands, <Ticket />],
    ['Stands réservés', dashboardStats.reservedStands, <Ticket />],
    ['Stands verrouillés', dashboardStats.lockedStands, <Ticket />],
    ['Paiements réussis', dashboardStats.successfulPayments, <CreditCard />],
    ['Paiements échoués', dashboardStats.failedPayments, <CreditCard />],
    ['Chiffre encaissé', formatCurrency(dashboardStats.revenue), <BadgeDollarSign />],
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Dashboard</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink">Vue d’ensemble</h1>
      </div>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map(([label, value, icon]) => <AdminMetricCard key={label as string} label={label as string} value={value as string | number} icon={icon} />)}
      </motion.div>
      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold text-ink">Dernières inscriptions</h2>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                <th className="py-3">Nom</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dashboardStats.latestRegistrations.map((item) => (
                <tr key={item.id} className="transition hover:bg-mist/70">
                  <td className="py-4 font-bold text-ink">{item.name}</td>
                  <td><span className="rounded-full bg-turquoise/12 px-3 py-1 text-xs font-black text-turquoise">{item.type}</span></td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
