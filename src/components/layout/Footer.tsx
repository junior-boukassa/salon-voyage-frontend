import { Link } from 'react-router-dom';
import ontLogoWhite from '../../assets/images/logo-ont-white.png';
import { eventInfo } from '../../constants/site';

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-44 items-center rounded-2xl bg-white/8 p-2 ring-1 ring-white/10">
              <img src={ontLogoWhite} alt="Office National du Tourisme RD Congo" className="h-full w-full object-contain" />
            </span>
            <span className="font-extrabold">{eventInfo.name}</span>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">{eventInfo.theme}</p>
          <p className="mt-4 text-sm font-bold text-gold">{eventInfo.date} · {eventInfo.place}</p>
        </div>
        <div>
          <h3 className="font-extrabold">Parcours</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <Link to="/devenir-sponsor">Devenir sponsor</Link>
            <Link to="/reserver-stand">Réserver un stand</Link>
            <Link to="/inscription-visiteur">Inscription visiteur</Link>
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Organisateur</h3>
          <p className="mt-4 text-sm leading-6 text-white/70">{eventInfo.organizer}</p>
          <Link to="/faq" className="mt-4 inline-block text-sm font-bold text-gold">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
