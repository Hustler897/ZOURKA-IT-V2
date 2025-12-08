import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour la cybersécurité et l'innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border" style={{ borderColor: '#34b04d' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6" style={{ color: '#34b04d' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">Niamey, Niger</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Mail className="w-6 h-6" style={{ color: '#34b04d' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:contact@zourka-it.ne" style={{ color: '#34b04d' }} className="hover:underline">
                      contact@zourka-it.ne
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Phone className="w-6 h-6" style={{ color: '#34b04d' }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                    <a href="tel:+22789330202" style={{ color: '#34b04d' }} className="hover:underline">
                      +227 89 33 02 02
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 text-white" style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}>
              <h3 className="text-2xl font-bold mb-4">
                Prêt à sécuriser votre organisation ?
              </h3>
              <p className="mb-6 leading-relaxed" style={{ color: '#e8f5e9' }}>
                Contactez-nous dès aujourd'hui pour un diagnostic gratuit de votre maturité cyber ou pour discuter de vos besoins en cybersécurité et transformation digitale.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Réponse sous 24h</p>
                  <p className="text-sm" style={{ color: '#c8e6c9' }}>Du lundi au vendredi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none transition-all"
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#34b04d'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(52, 176, 77, 0.2)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none transition-all"
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#34b04d'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(52, 176, 77, 0.2)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none transition-all"
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#34b04d'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(52, 176, 77, 0.2)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
                  placeholder="+227 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none transition-all"
                  style={{ focusRingColor: '#34b04d' }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#34b04d'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(52, 176, 77, 0.2)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <option>Diagnostic gratuit</option>
                  <option>Pack Conformité Express</option>
                  <option>Cybersécurité</option>
                  <option>Transformation Digitale</option>
                  <option>Services Managés</option>
                  <option>Formation</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
