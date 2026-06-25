import { ButtonLink } from '../../components/common/Button';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { VisitorBadge } from '../../features/visitors/VisitorBadge';
import { useAppStore } from '../../store/useAppStore';

export function VisitorBadgePage() {
  const visitorBadge = useAppStore((state) => state.visitorBadge);

  return (
    <>
      <PageHero title="Badge visiteur" description="Votre badge d’accès avec QR code fictif pour démonstration frontend." />
      <Section>
        {visitorBadge ? (
          <VisitorBadge visitor={visitorBadge} />
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <h2 className="text-2xl font-extrabold text-ink">Aucun badge généré</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Complétez d’abord le formulaire d’inscription visiteur.</p>
            <ButtonLink to="/inscription-visiteur" className="mt-6">S’inscrire</ButtonLink>
          </div>
        )}
      </Section>
    </>
  );
}
