import { ExternalLink, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ButtonLink } from '../../components/common/Button';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { exhibitors } from '../../mocks/exhibitors';

export function ExhibitorDetailPage() {
  const { id } = useParams();
  const exhibitor = exhibitors.find((item) => item.id === id);

  if (!exhibitor) {
    return (
      <Section title="Exposant introuvable">
        <ButtonLink to="/exposants">Retour aux exposants</ButtonLink>
      </Section>
    );
  }

  return (
    <>
      <PageHero eyebrow={exhibitor.sector} title={exhibitor.name} description={exhibitor.description} />
      <Section title="Informations exposant">
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-ink">Produits et services présentés</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {exhibitor.products.map((product) => (
                <span key={product} className="rounded-full bg-turquoise/12 px-4 py-2 text-sm font-bold text-turquoise">{product}</span>
              ))}
            </div>
            <Link to={exhibitor.website} className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-gold">
              Site web <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <aside className="rounded-3xl bg-ink p-6 text-white">
            <MapPin className="h-8 w-8 text-gold" />
            <p className="mt-4 text-sm font-bold text-white/65">Numéro du stand</p>
            <p className="mt-2 text-5xl font-black">{exhibitor.standNumber}</p>
            <ButtonLink to="/stands" variant="ghost" className="mt-8 w-full">Voir la carte</ButtonLink>
          </aside>
        </div>
      </Section>
    </>
  );
}
