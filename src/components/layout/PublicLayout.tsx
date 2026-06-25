import { Outlet } from 'react-router-dom';
import { PageTransition } from '../animations/PageTransition';
import { Footer } from './Footer';
import { Header } from './Header';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
