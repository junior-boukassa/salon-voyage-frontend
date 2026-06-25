import { CalendarDays, ChevronDown, Clock, Globe2, Mail, MapPin, Menu, Search, ShieldCheck, X } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ontLogoColor from '../../assets/images/logo-ont-color.png';
import { eventInfo } from '../../constants/site';
import { ButtonLink } from '../common/Button';
import { classNames } from '../../utils/format';

const navGroups = [
  {
    label: 'Le salon',
    items: [
      { label: 'À propos', to: '/a-propos' },
      { label: 'Programme & animations', to: '/programme' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    label: 'Participer',
    items: [
      { label: 'Devenir sponsor', to: '/devenir-sponsor' },
      { label: 'Réserver un stand', to: '/reserver-stand' },
      { label: 'Inscription visiteur', to: '/inscription-visiteur' },
    ],
  },
  {
    label: 'Explorer',
    items: [
      { label: 'Sponsors officiels', to: '/sponsors' },
      { label: 'Exposants', to: '/exposants' },
      { label: 'Carte des stands', to: '/stands' },
    ],
  },
];

const directLinks = [
  { label: 'Contact', to: '/contact' },
];

const quickSearch = [
  { label: 'Devenir sponsor', to: '/devenir-sponsor' },
  { label: 'Réserver un stand', to: '/reserver-stand' },
  { label: 'Inscription visiteur', to: '/inscription-visiteur' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    const normalized = query.trim().toLowerCase();
    const match = quickSearch.find((item) => item.label.toLowerCase().includes(normalized));
    navigate(match?.to ?? '/programme');
    setSearchOpen(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 text-ink shadow-sm backdrop-blur-xl">
      <div className="hidden border-b border-white/10 bg-premium text-white lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 text-xs font-bold">
          <div className="flex items-center gap-5 text-white/75">
            <span className="font-black uppercase tracking-[0.14em] text-gold">Salon du Voyage de Kinshasa</span>
            <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5 text-gold" /> 02-05 déc. 2026</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> Silikin Village, Kinshasa</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold" /> 08h00 - 18h00</span>
          </div>
          <div className="flex items-center gap-5 text-white/75">
            <span className="inline-flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-gold" /> contact@salonvoyagekinshasa.cd</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Organisé par l’ONT / RDC</span>
            <ButtonLink to="/admin/login" variant="ghost" className="min-h-8 px-4 py-1.5 text-xs">
              Espace admin
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[5.75rem] lg:px-8">
        <Link to="/" className="focus-ring flex min-w-0 items-center gap-3 rounded-2xl" aria-label="Accueil Salon du Voyage de Kinshasa">
          <span className="flex h-14 w-36 shrink-0 items-center rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-200 sm:w-44 lg:h-16 lg:w-52">
            <img src={ontLogoColor} alt="Office National du Tourisme RD Congo" className="h-full w-full object-contain" />
          </span>
          <span className="hidden min-w-0 leading-tight xl:block">
            <span className="block text-xs font-black uppercase tracking-[0.16em] text-turquoise">1ère édition · Salon officiel</span>
            <span className="block max-w-52 text-sm font-black uppercase text-premium">{eventInfo.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm lg:flex" aria-label="Navigation principale">
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(
                'rounded-full px-4 py-2.5 text-sm font-black text-slate-700 transition hover:bg-mist hover:text-premium',
                isActive && 'bg-premium text-white shadow-sm',
              )
            }
          >
            Accueil
          </NavLink>

          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button
                type="button"
                className="focus-ring inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-mist hover:text-premium"
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-20 mt-4 min-w-80 translate-y-2 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white opacity-0 shadow-soft transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="border-b border-slate-100 bg-mist px-5 py-3">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-gold">{group.label}</p>
                </div>
                <div className="p-3">
                {group.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        'block rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-mist hover:text-premium',
                        isActive && 'bg-gold/12 text-gold',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="group relative">
            <button className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 px-4 text-sm font-black text-slate-700" type="button">
              <Globe2 className="h-4 w-4 text-turquoise" /> FR
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute right-0 top-full z-20 mt-3 w-40 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-soft transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <button className="block w-full rounded-xl px-3 py-2 text-left text-sm font-bold text-gold" type="button">FR Français</button>
              <button className="block w-full rounded-xl px-3 py-2 text-left text-sm font-bold text-slate-500" type="button">EN English</button>
            </div>
          </div>
          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-full bg-premium text-white transition hover:bg-gold hover:text-premium"
            type="button"
            aria-label="Ouvrir la recherche"
            onClick={() => setSearchOpen((value) => !value)}
          >
            <Search className="h-4 w-4" />
          </button>
          <ButtonLink to="/reserver-stand" variant="outline">Réserver</ButtonLink>
          <ButtonLink to="/inscription-visiteur" variant="secondary">S’inscrire</ButtonLink>
        </div>
        <button className="focus-ring rounded-full p-2 text-premium lg:hidden" type="button" aria-label="Ouvrir le menu" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {searchOpen && (
        <div className="border-t border-slate-200 bg-white">
          <form onSubmit={submitSearch} className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <label className="sr-only" htmlFor="site-search">Rechercher sur le site</label>
            <input
              id="site-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="focus-ring min-h-12 flex-1 rounded-full border border-slate-200 px-5 text-sm font-semibold"
              placeholder="Rechercher sur le site"
            />
            <button type="submit" className="focus-ring rounded-full bg-gold px-6 py-3 text-sm font-black text-premium">Rechercher</button>
            <div className="flex flex-wrap gap-2">
              {quickSearch.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setSearchOpen(false)} className="rounded-full bg-mist px-3 py-2 text-xs font-black text-slate-600">
                  {item.label}
                </Link>
              ))}
            </div>
          </form>
        </div>
      )}

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 lg:hidden">
          <div className="grid gap-2 py-4 text-xs font-bold text-slate-600">
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" /> 02-05 décembre 2026</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Silikin Village, Kinshasa</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> contact@salonvoyagekinshasa.cd</span>
          </div>
          <nav className="grid gap-2 py-3" aria-label="Navigation mobile">
            <NavLink to="/" onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-black text-premium hover:bg-mist">
              Accueil
            </NavLink>
            {[...navGroups.flatMap((group) => group.items), ...directLinks].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-mist"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="grid gap-3">
            <ButtonLink to="/reserver-stand" variant="outline">Réserver un stand</ButtonLink>
            <ButtonLink to="/inscription-visiteur" variant="secondary">Inscription visiteur</ButtonLink>
            <ButtonLink to="/admin/login" variant="dark">Espace admin</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
