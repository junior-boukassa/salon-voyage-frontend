import { motion } from 'framer-motion';
import { ButtonLink } from '../../components/common/Button';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { PackageCard } from '../../components/cards/PackageCard';
import { SponsorLogo } from '../../components/cards/SponsorLogo';
import { sponsorPackages } from '../../mocks/packages';
import { sponsors } from '../../mocks/sponsors';
import { staggerContainer } from '../../utils/animations';

export function SponsorsPage() {
  return (
    <>
      <PageHero title="Sponsors" description="Des packages pensés pour les marques, institutions et partenaires techniques qui veulent prendre part à la promotion du tourisme congolais.">
        <ButtonLink to="/devenir-sponsor" className="w-fit">Devenir sponsor</ButtonLink>
      </PageHero>
      <Section title="Packages sponsors">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sponsorPackages.map((item) => <PackageCard key={item.id} item={item} />)}
        </motion.div>
      </Section>
      <Section muted title="Sponsors en vedette">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((item) => <SponsorLogo key={item.id} sponsor={item} />)}
        </motion.div>
      </Section>
    </>
  );
}
