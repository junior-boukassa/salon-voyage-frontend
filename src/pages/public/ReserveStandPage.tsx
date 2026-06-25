import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCard, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input, Select, Textarea } from '../../components/common/Input';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { StandMap } from '../../components/stands/StandMap';
import { standSectors } from '../../constants/site';
import { paymentService } from '../../services/payment.service';
import { useAppStore } from '../../store/useAppStore';

const exhibitorSchema = z.object({
  organization: z.string().min(2, 'Nom requis'),
  sector: z.string().min(1, 'Secteur requis'),
  logo: z.any().optional(),
  description: z.string().min(10, 'Description requise'),
  products: z.string().min(3, 'Produits ou services requis'),
  phone: z.string().min(8, 'Téléphone requis'),
  email: z.string().email('Email invalide'),
  website: z.string().url('URL invalide').optional().or(z.literal('')),
  social: z.string().optional(),
  manager: z.string().min(2, 'Responsable requis'),
  category: z.string().min(1, 'Catégorie requise'),
});

type ExhibitorForm = z.infer<typeof exhibitorSchema>;

export function ReserveStandPage() {
  const [sector, setSector] = useState('');
  const [paid, setPaid] = useState(false);
  const selectedStand = useAppStore((state) => state.selectedStand);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ExhibitorForm>({ resolver: zodResolver(exhibitorSchema) });

  const onSubmit = async () => {
    if (!selectedStand) return;
    await paymentService.simulate({ standId: selectedStand.id });
    setPaid(true);
  };

  return (
    <>
      <PageHero title="Réserver un stand" description="Choisissez votre secteur, sélectionnez un stand disponible, complétez le dossier exposant et simulez le paiement côté frontend." />
      <Section title="Choix du secteur">
        <Select label="Secteur de stands" value={sector} onChange={(event) => setSector(event.target.value)}>
          <option value="">Tous les secteurs</option>
          {standSectors.map((item) => <option key={item} value={item}>{item}</option>)}
        </Select>
      </Section>
      <Section muted title="Carte interactive 2D des stands">
        <StandMap sector={sector || undefined} />
      </Section>
      <Section title="Formulaire exposant">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2">
          <Input label="Nom de l’organisation" registration={register('organization')} error={errors.organization?.message} />
          <Select label="Secteur d’activité" registration={register('sector')} error={errors.sector?.message}>
            <option value="">Sélectionner</option>
            {standSectors.map((item) => <option key={item} value={item}>{item}</option>)}
          </Select>
          <Input label="Logo" type="file" accept="image/*" registration={register('logo')} />
          <Input label="Téléphone" registration={register('phone')} error={errors.phone?.message} />
          <Input label="Email" type="email" registration={register('email')} error={errors.email?.message} />
          <Input label="Site web" placeholder="https://..." registration={register('website')} error={errors.website?.message} />
          <Input label="Réseaux sociaux" registration={register('social')} />
          <Input label="Nom du responsable" registration={register('manager')} error={errors.manager?.message} />
          <Select label="Catégorie du stand" registration={register('category')} error={errors.category?.message}>
            <option value="">Sélectionner</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="institutionnel">Institutionnel</option>
          </Select>
          <Input label="Numéro du stand" value={selectedStand?.number ?? ''} readOnly placeholder="Sélectionnez sur la carte" />
          <div className="md:col-span-2">
            <Textarea label="Description courte" registration={register('description')} error={errors.description?.message} />
          </div>
          <div className="md:col-span-2">
            <Textarea label="Produits ou services présentés" registration={register('products')} error={errors.products?.message} />
          </div>
          {!selectedStand && <p className="rounded-2xl bg-gold/12 p-4 text-sm font-bold text-gold md:col-span-2">Sélectionnez un stand disponible avant de payer.</p>}
          {paid && <p className="rounded-2xl bg-turquoise/12 p-4 text-sm font-bold text-turquoise md:col-span-2">Paiement simulé réussi. Réservation prête à envoyer au backend.</p>}
          <Button disabled={isSubmitting || !selectedStand} icon={paid ? <Send className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />} className="md:col-span-2">
            {paid ? 'Finaliser la réservation' : 'Simuler le paiement'}
          </Button>
        </form>
      </Section>
    </>
  );
}
