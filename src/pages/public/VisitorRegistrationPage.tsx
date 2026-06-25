import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input, Select } from '../../components/common/Input';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { interests, visitorTypes } from '../../constants/site';
import { exhibitors } from '../../mocks/exhibitors';
import { useAppStore } from '../../store/useAppStore';

const visitorSchema = z.object({
  lastName: z.string().min(2, 'Nom requis'),
  firstName: z.string().min(2, 'Prénom requis'),
  phone: z.string().min(8, 'Téléphone requis'),
  email: z.string().email('Email invalide'),
  type: z.string().min(1, 'Type requis'),
  city: z.string().min(2, 'Ville ou commune requise'),
  interests: z.array(z.string()).min(1, 'Choisissez au moins un centre d’intérêt'),
  favoriteExhibitors: z.array(z.string()).optional(),
});

type VisitorForm = z.infer<typeof visitorSchema>;

export function VisitorRegistrationPage() {
  const navigate = useNavigate();
  const setVisitorBadge = useAppStore((state) => state.setVisitorBadge);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VisitorForm>({
    resolver: zodResolver(visitorSchema),
    defaultValues: { interests: [], favoriteExhibitors: [] },
  });

  const onSubmit = async (data: VisitorForm) => {
    setVisitorBadge(data);
    navigate('/badge-visiteur');
  };

  return (
    <>
      <PageHero title="Inscription visiteur" description="Inscrivez-vous pour recevoir votre badge et préparer votre parcours pendant le salon." />
      <Section>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto grid max-w-5xl gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2">
          <Input label="Nom" registration={register('lastName')} error={errors.lastName?.message} />
          <Input label="Prénom" registration={register('firstName')} error={errors.firstName?.message} />
          <Input label="Téléphone" registration={register('phone')} error={errors.phone?.message} />
          <Input label="Email" type="email" registration={register('email')} error={errors.email?.message} />
          <Select label="Type de visiteur" registration={register('type')} error={errors.type?.message}>
            <option value="">Sélectionner</option>
            {visitorTypes.map((item) => <option key={item} value={item}>{item}</option>)}
          </Select>
          <Input label="Ville ou commune" registration={register('city')} error={errors.city?.message} />
          <fieldset className="md:col-span-2">
            <legend className="text-sm font-bold text-ink">Centres d’intérêt</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {interests.map((item) => (
                <label key={item} className="rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-700">
                  <input type="checkbox" value={item} className="mr-2 accent-gold" {...register('interests')} />
                  {item}
                </label>
              ))}
            </div>
            {errors.interests && <p className="mt-2 text-sm font-semibold text-red-600">{errors.interests.message}</p>}
          </fieldset>
          <fieldset className="md:col-span-2">
            <legend className="text-sm font-bold text-ink">Exposants favoris</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {exhibitors.map((item) => (
                <label key={item.id} className="rounded-2xl border border-slate-200 p-3 text-sm font-bold text-slate-700">
                  <input type="checkbox" value={item.name} className="mr-2 accent-turquoise" {...register('favoriteExhibitors')} />
                  {item.name}
                </label>
              ))}
            </div>
          </fieldset>
          <Button disabled={isSubmitting} icon={<Send className="h-4 w-4" />} className="md:col-span-2">Générer mon badge</Button>
        </form>
      </Section>
    </>
  );
}
