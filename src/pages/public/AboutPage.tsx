import { motion } from 'framer-motion';
import { BadgeCheck, CreditCard, Flag, Globe2, Target, TrendingUp } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { FeatureCard } from '../../components/cards/FeatureCard';
import { eventInfo } from '../../constants/site';
import { staggerContainer } from '../../utils/animations';

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="À propos" title="Une vitrine nationale pour le voyage et le tourisme" description={eventInfo.description} />
      <Section
        eyebrow="Mot de l’organisateur"
        title="Faire découvrir la RDC autrement"
        description="Porté par l’Office National du Tourisme, le Salon du Voyage de Kinshasa met en scène les destinations, les opérateurs et les solutions qui rendent le voyage plus accessible, plus visible et plus désirable."
      >
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] bg-premium p-7 text-white shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">ONT / RDC</p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight">Un événement ancré dans la politique nationale du tourisme</h2>
            <p className="mt-5 text-base leading-8 text-white/74">
              Le salon accompagne une dynamique de valorisation du patrimoine touristique congolais, de structuration de l’offre et de stimulation du tourisme domestique.
            </p>
          </div>
          <div className="rounded-[2rem] bg-gold p-7 text-premium shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.18em]">Thème</p>
            <p className="mt-4 text-3xl font-black uppercase leading-tight">{eventInfo.theme}</p>
          </div>
        </div>
      </Section>
      <Section muted title="Contexte & enjeux stratégiques">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard title="Tourisme domestique" description="Encourager les Congolais à découvrir les provinces, les parcs, les sites culturels et les expériences locales." icon={<Globe2 />} tone="light" />
          <FeatureCard title="Carte de Paiement Touristique" description="Mettre en avant les solutions de paiement qui facilitent l’achat, la réservation et la consommation touristique." icon={<CreditCard />} tone="turquoise" />
          <FeatureCard title="Politique nationale" description="Inscrire l’événement dans une trajectoire institutionnelle de promotion et de structuration du secteur." icon={<Flag />} tone="dark" />
          <FeatureCard title="Promouvoir" description="Donner une scène visible aux destinations, aux opérateurs et aux initiatives touristiques congolaises." icon={<BadgeCheck />} tone="gold" />
          <FeatureCard title="Faciliter" description="Créer un point de rencontre simple entre visiteurs, exposants, sponsors, institutions et médias." icon={<Target />} tone="light" />
          <FeatureCard title="Stimuler" description="Accélérer les opportunités commerciales, l’investissement et la fréquentation des offres touristiques." icon={<TrendingUp />} tone="turquoise" />
        </motion.div>
      </Section>
      <Section title="Identité du projet">
        <div className="grid gap-5 lg:grid-cols-2">
          {[
            ['Édition', eventInfo.edition],
            ['Date', eventInfo.date],
            ['Lieu', eventInfo.place],
            ['Thème', eventInfo.theme],
            ['Organisateur', eventInfo.organizer],
            ['Objectif', 'Créer un rendez-vous professionnel, public et institutionnel pour faire découvrir la RDC autrement.'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">{label}</p>
              <p className="mt-3 text-lg font-bold text-ink">{value}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
