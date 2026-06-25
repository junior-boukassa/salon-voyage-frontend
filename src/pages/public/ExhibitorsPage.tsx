import { motion } from 'framer-motion';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { ExhibitorCard } from '../../components/cards/ExhibitorCard';
import { exhibitors } from '../../mocks/exhibitors';
import { staggerContainer } from '../../utils/animations';

export function ExhibitorsPage() {
  return (
    <>
      <PageHero title="Exposants" description="Découvrez les opérateurs, institutions, agences, fintechs et acteurs touristiques présents au salon." />
      <Section>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {exhibitors.map((exhibitor) => <ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />)}
        </motion.div>
      </Section>
    </>
  );
}
