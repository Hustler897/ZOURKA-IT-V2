import { Mail, Phone, MapPin } from 'lucide-react';
// import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            {/* <div className="flex items-center gap-2 mb-4"> */}
            {/* <img src={logo} alt="Logo" className="h-40 w-40" /> */}

            {/* </div> */}
            <p className="text-gray-400 leading-relaxed mb-4">
              Votre partenaire de confiance pour la cybersécurité et l'innovation en Afrique.
              Sécuriser aujourd'hui, transformer demain.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@zourka-it.ne"
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@zourka-it.ne</span>
              </a>
              <a
                href="tel:+22789330202"
                className="flex items-center gap-2 transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+227 89 33 02 02</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Niamey, Niger</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Cybersécurité
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Transformation Digitale
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Services Managés
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Conseil & Gouvernance
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Formation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#offers"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Nos offres
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm transition-colors"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Zourka IT. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-sm transition-colors"
                style={{ color: '#9ca3af' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                Politique de confidentialité
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
