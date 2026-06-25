import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input, Textarea } from '../../components/common/Input';
import { PageHero } from '../../components/common/PageHero';
import { Section } from '../../components/common/Section';
import { eventInfo } from '../../constants/site';

const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  subject: z.string().min(3, 'Sujet requis'),
  message: z.string().min(10, 'Message requis'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactPage() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 400));
    setSuccess(true);
  };

  return (
    <>
      <PageHero title="Contact" description="Une question sur les stands, le sponsoring, les inscriptions ou l’organisation du salon ?" />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2">
            <Input label="Nom" registration={register('name')} error={errors.name?.message} />
            <Input label="Email" type="email" registration={register('email')} error={errors.email?.message} />
            <div className="md:col-span-2"><Input label="Sujet" registration={register('subject')} error={errors.subject?.message} /></div>
            <div className="md:col-span-2"><Textarea label="Message" registration={register('message')} error={errors.message?.message} /></div>
            {success && <p className="rounded-2xl bg-turquoise/12 p-4 text-sm font-bold text-turquoise md:col-span-2">Message prêt à être envoyé à l’API.</p>}
            <Button disabled={isSubmitting} icon={<Send className="h-4 w-4" />} className="md:col-span-2">Envoyer</Button>
          </form>
          <aside className="rounded-3xl bg-ink p-6 text-white">
            <h2 className="text-2xl font-extrabold">Coordonnées</h2>
            <div className="mt-6 space-y-5 text-sm font-bold text-white/75">
              <p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> {eventInfo.place}</p>
              <p className="flex gap-3"><Mail className="h-5 w-5 text-gold" /> contact@salonvoyagekinshasa.cd</p>
              <p className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> +243 000 000 000</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
