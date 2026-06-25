import { CalendarDays, Handshake, Sparkles, Ticket, Users, WalletCards } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '../../assets/images/kinshasa-travel-hero.png';
import { AnimatedSection } from '../../components/animations/AnimatedSection';
import { ButtonLink } from '../../components/common/Button';
import { CTAButton } from '../../components/common/CTAButton';
import { KubaPattern } from '../../components/common/KubaPattern';
import { Section } from '../../components/common/Section';
import { FeatureCard } from '../../components/cards/FeatureCard';
import { ExhibitorCard } from '../../components/cards/ExhibitorCard';
import { SponsorLogo } from '../../components/cards/SponsorLogo';
import { StatCard } from '../../components/cards/StatCard';
import { eventInfo } from '../../constants/site';
import { exhibitors } from '../../mocks/exhibitors';
import { program } from '../../mocks/program';
import { sponsors } from '../../mocks/sponsors';
import { staggerContainer } from '../../utils/animations';

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-white">
        <motion.img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ scale: [1, 1.045, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium/45 via-premium/72 to-premium" />
        <KubaPattern className="opacity-[0.10]" variant="dark" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatedSection className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-2xl bg-gold px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-premium">KINSHASA / RDC</span>
              <span className="rounded-2xl border border-white/25 bg-white/12 px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white backdrop-blur">{eventInfo.edition}</span>
            </div>
            <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
              Salon du <span className="block text-gold">Voyage</span> de Kinshasa
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-bold leading-8 text-white">{eventInfo.theme}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76">{eventInfo.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTAButton to="/devenir-sponsor" ariaLabel="Devenir sponsor">Devenir sponsor</CTAButton>
              <CTAButton to="/reserver-stand" variant="secondary" ariaLabel="Réserver un stand">Réserver un stand</CTAButton>
              <CTAButton to="/inscription-visiteur" variant="ghost" ariaLabel="S’inscrire comme visiteur">S’inscrire comme visiteur</CTAButton>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative hidden min-h-[620px] lg:block">
            <div className="glass-card absolute left-0 top-0 h-56 w-full rounded-[2rem]" />
            <div className="glass-card absolute left-0 top-72 h-60 w-72 rounded-[2rem]" />
            <div className="glass-card absolute right-0 top-72 h-40 w-72 rounded-[2rem]" />
            <div className="glass-card absolute bottom-20 left-72 h-44 w-40 rounded-[2rem]" />
            <div className="absolute right-0 bottom-20 grid h-52 w-44 place-items-center rounded-[2rem] bg-gold p-6 text-center text-premium shadow-glow">
              <div>
                <p className="text-5xl font-black leading-none">02-05</p>
                <p className="mt-2 text-3xl font-light uppercase">DEC</p>
                <p className="text-4xl font-black">2026</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 rounded-[2rem] bg-white/95 p-5 text-premium shadow-soft">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-gold">Lieu</p>
              <p className="mt-1 font-black">{eventInfo.place}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Section
        eyebrow="Pourquoi participer ?"
        title="Un carrefour pour valoriser le tourisme congolais"
        description="Le salon connecte institutions, opérateurs, marques, provinces, voyageurs et investisseurs dans un format pensé pour la visibilité, les rencontres et la conversion."
      >
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-3">
          <FeatureCard title="Sponsors" description="Associer votre marque à un rendez-vous national ambitieux et visible." icon={<Sparkles />} tone="gold" />
          <FeatureCard title="Exposants" description="Présenter vos offres et rencontrer des visiteurs qualifiés pendant 4 jours." icon={<Handshake />} tone="turquoise" />
          <FeatureCard title="Visiteurs" description="Découvrir des destinations, offres, animations, masterclass et tombolas." icon={<Users />} tone="dark" />
        </motion.div>
      </Section>

      <Section muted eyebrow="Chiffres clés" title="Un événement calibré pour l’impact">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard value="4" label="jours d’événement" icon={<CalendarDays />} />
          <StatCard value="100" label="stands professionnels" icon={<Handshake />} />
          <StatCard value="5k-10k" label="visiteurs attendus" icon={<Users />} />
          <StatCard value="08h-18h" label="horaires publics" icon={<Ticket />} />
          <StatCard value="5+" label="formats d’animation" icon={<WalletCards />} />
        </motion.div>
      </Section>

      <Section eyebrow="Trois parcours" title="Une plateforme pour chaque profil">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ['Sponsor', 'Packages, visibilité et formulaire de candidature.', '/devenir-sponsor'],
            ['Exposant', 'Réservation de stand, carte interactive et paiement simulé.', '/reserver-stand'],
            ['Visiteur', 'Inscription, centres d’intérêt et génération de badge.', '/inscription-visiteur'],
          ].map(([title, text, to]) => (
            <div key={title} className="rounded-[2rem] bg-premium p-6 text-white shadow-soft">
              <h3 className="text-2xl font-black uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
              <ButtonLink to={to} className="mt-6" variant="ghost">Commencer</ButtonLink>
            </div>
          ))}
        </div>
      </Section>

      <Section muted eyebrow="Programme" title="Aperçu des temps forts" aside={<ButtonLink to="/programme" variant="outline">Voir le programme</ButtonLink>}>
        <div className="grid gap-5 lg:grid-cols-4">
          {program.map((day) => (
            <article key={day.day} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-extrabold text-gold">{day.day}</p>
              <h3 className="mt-2 text-lg font-black text-ink">{day.date}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{day.items[0].title}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="En vedette" title="Exposants et sponsors à découvrir">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-2">
          {exhibitors.filter((item) => item.featured).map((item) => <ExhibitorCard key={item.id} exhibitor={item} />)}
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.filter((item) => item.featured).map((item) => <SponsorLogo key={item.id} sponsor={item} />)}
        </motion.div>
      </Section>

      <section className="bg-turquoise py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/75">CTA final</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Rejoignez la 1ère édition du Salon du Voyage de Kinshasa.</h2>
          </div>
          <ButtonLink to="/reserver-stand" variant="ghost">Réserver maintenant</ButtonLink>
        </div>
      </section>
    </>
  );
}
