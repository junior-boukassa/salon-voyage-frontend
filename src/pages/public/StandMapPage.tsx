import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { StandMap } from '../../components/stands/StandMap';

export function StandMapPage() {
  return (
    <>
      <PageHero title="Carte interactive des stands" description="Visualisez les disponibilités, les réservations, les stands verrouillés et les stands payés." />
      <Section muted>
        <StandMap />
      </Section>
    </>
  );
}
