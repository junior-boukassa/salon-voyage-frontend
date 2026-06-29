import { zodResolver } from '@hookform/resolvers/zod';
import { Lock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { authService } from '../../services/auth.service';

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Mot de passe requis'),
});

type LoginForm = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/admin';
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema), defaultValues: { email: 'admin@salon.cd' } });

  const onSubmit = async (data: LoginForm) => {
    try {
      await authService.login(data.email, data.password);
      navigate(from, { replace: true });
    } catch {
      setError('root', { message: 'Connexion impossible. Vérifiez vos identifiants.' });
    }
  };

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 py-12">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Lock className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold text-ink">Connexion admin</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Interface sécurisée côté frontend, prête pour Sanctum ou JWT.</p>
        <div className="mt-6 grid gap-4">
          <Input label="Email" type="email" registration={register('email')} error={errors.email?.message} />
          <Input label="Mot de passe" type="password" registration={register('password')} error={errors.password?.message} />
          {errors.root?.message && <p className="text-sm font-semibold text-red-600">{errors.root.message}</p>}
          <Button disabled={isSubmitting}>Se connecter</Button>
        </div>
      </form>
    </main>
  );
}
