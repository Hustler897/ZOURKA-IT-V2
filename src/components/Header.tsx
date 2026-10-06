import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isPartners = location.pathname === '/partenaires';

  const navLinks = [
    { anchor: 'services', label: 'Services' },
    { anchor: 'about', label: 'À propos' },
    { anchor: 'offers', label: 'Offres' },
    { anchor: 'faq', label: 'FAQ' },
    { anchor: 'contact', label: 'Contact' },
  ];
  const anchorHref = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`);
  const contactHref = isHome ? '#contact' : '/#contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Logo" className="h-40 w-40" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={anchorHref(link.anchor)}
                className="text-gray-600 font-medium transition-colors"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/partenaires"
              className="font-medium transition-colors"
              style={{ color: isPartners ? '#34b04d' : '#6b7280' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
              onMouseLeave={(e) => e.currentTarget.style.color = isPartners ? '#34b04d' : '#6b7280'}
            >
              Partenaires
            </Link>
            <a
              href={contactHref}
              className="px-6 py-2 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
            >
              Nous contacter
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600"
            style={{ color: '#6b7280' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={anchorHref(link.anchor)}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 font-medium transition-colors py-2"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/partenaires"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium transition-colors py-2"
              style={{ color: isPartners ? '#34b04d' : '#6b7280' }}
            >
              Partenaires
            </Link>
            <a
              href={contactHref}
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 text-white rounded-lg font-medium text-center"
              style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
            >
              Nous contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
