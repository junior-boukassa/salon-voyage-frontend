import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input, Select, Textarea } from '../../components/common/Input';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { PackageCard } from '../../components/cards/PackageCard';
import { sponsorPackages } from '../../mocks/packages';
import { staggerContainer } from '../../utils/animations';

const sponsorSchema = z.object({
  organization: z.string().min(2, 'Nom requis'),
  manager: z.string().min(2, 'Responsable requis'),
  role: z.string().min(2, 'Fonction requise'),
  phone: z.string().min(8, 'Téléphone requis'),
  email: z.string().email('Email invalide'),
  packageId: z.string().min(1, 'Package requis'),
  logo: z.any().optional(),
  message: z.string().min(10, 'Ajoutez un message'),
});

type SponsorForm = z.infer<typeof sponsorSchema>;

export function BecomeSponsorPage() {
  const [params] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SponsorForm>({
    resolver: zodResolver(sponsorSchema),
    defaultValues: { packageId: params.get('package') ?? '' },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 500));
    setSuccess(true);
  };

  return (
    <>
      <PageHero title="Devenir sponsor" description="Sélectionnez un package, renseignez votre organisation et préparez votre visibilité pour la 1ère édition." />
      <Section title="Choisir un package">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sponsorPackages.map((item) => <PackageCard key={item.id} item={item} />)}
        </motion.div>
      </Section>
      <Section muted title="Formulaire sponsor">
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto grid max-w-4xl gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2">
          <Input label="Nom de l’organisation" registration={register('organization')} error={errors.organization?.message} />
          <Input label="Nom du responsable" registration={register('manager')} error={errors.manager?.message} />
          <Input label="Fonction" registration={register('role')} error={errors.role?.message} />
          <Input label="Téléphone" registration={register('phone')} error={errors.phone?.message} />
          <Input label="Email" type="email" registration={register('email')} error={errors.email?.message} />
          <Select label="Package choisi" registration={register('packageId')} error={errors.packageId?.message}>
            <option value="">Sélectionner</option>
            {sponsorPackages.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </Select>
          <Input label="Logo de l’organisation" type="file" accept="image/*" registration={register('logo')} />
          <div />
          <div className="md:col-span-2">
            <Textarea label="Message" registration={register('message')} error={errors.message?.message} />
          </div>
          {success && <p className="rounded-2xl bg-turquoise/12 p-4 text-sm font-bold text-turquoise md:col-span-2">Demande sponsor enregistrée avec succès.</p>}
          <Button disabled={isSubmitting} icon={<Send className="h-4 w-4" />} className="md:col-span-2">
            {isSubmitting ? 'Envoi...' : 'Envoyer la demande'}
          </Button>
        </form>
      </Section>
    </>
  );
}
