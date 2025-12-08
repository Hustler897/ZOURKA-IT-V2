import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'À propos' },
    { href: '#offers', label: 'Offres' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2 group">
            <img src={logo} alt="Logo" className="h-40 w-40" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 font-medium transition-colors"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
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
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 font-medium transition-colors py-2"
                style={{ color: '#6b7280' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
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
