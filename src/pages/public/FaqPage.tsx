import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';

const faqs = [
  ['Quand aura lieu le salon ?', 'Du 02 au 05 décembre 2026, de 08h00 à 18h00.'],
  ['Où se déroule l’événement ?', 'Au Silikin Village, à Kinshasa, en République démocratique du Congo.'],
  ['Comment réserver un stand ?', 'Depuis la page Réserver un stand, choisissez un secteur, sélectionnez un stand disponible, complétez le formulaire et simulez le paiement.'],
  ['Le paiement est-il réel ?', 'Non. La version frontend contient une étape de paiement simulée, prête à être connectée au backend Laravel.'],
  ['Puis-je devenir sponsor ?', 'Oui. Les packages sont disponibles sur les pages Sponsors et Devenir sponsor.'],
  ['Comment obtenir un badge visiteur ?', 'Complétez le formulaire d’inscription visiteur; un badge avec QR code fictif est généré côté frontend.'],
];

export function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" description="Réponses rapides aux questions fréquentes sur la plateforme et l’événement." />
      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-extrabold text-ink">{question}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
