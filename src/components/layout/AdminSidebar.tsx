import { BarChart3, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminNavigation } from '../../constants/navigation';
import { authService } from '../../services/auth.service';
import { classNames } from '../../utils/format';

export function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="border-b border-slate-200 bg-premium p-4 text-white lg:min-h-screen lg:border-b-0 lg:p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-gold">
          <BarChart3 className="h-5 w-5" />
        </span>
        <div>
          <p className="font-black uppercase">Admin Salon</p>
          <p className="text-xs font-bold text-white/55">Pilotage plateforme</p>
        </div>
      </div>
      <nav className="mt-6 grid max-h-[52vh] gap-1 overflow-auto pr-1 lg:max-h-none">
        {adminNavigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin'}
            className={({ isActive }) =>
              classNames(
                'rounded-2xl px-4 py-3 text-sm font-bold text-white/75 transition hover:bg-white/10 hover:text-white',
                isActive && 'bg-gold text-premium',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button
        type="button"
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white"
        onClick={() => {
          authService.logout();
          navigate('/admin/login');
        }}
      >
        <LogOut className="h-4 w-4" /> Déconnexion
      </button>
    </aside>
  );
}
