import { Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium" style={{ backgroundColor: '#34b04d20', color: '#34b04d' }}>
              <Shield className="w-4 h-4" />
              Votre partenaire cybersécurité en Afrique
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Sécuriser aujourd'hui,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-100" style={{ backgroundImage: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}>
                transformer demain
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Zourka IT accompagne les entreprises, institutions financières et administrations publiques dans la protection de leurs systèmes d'information et la réussite de leur transformation digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#offers"
                className="px-8 py-4 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow text-center"
                style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
              >
                Découvrir nos offres
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 transition-colors text-center"
                style={{ borderColor: '#e5e7eb' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34b04d'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              >
                Diagnostic gratuit
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl transform rotate-6" style={{ background: 'linear-gradient(to bottom right, rgba(52, 176, 77, 0.1), rgba(255, 255, 255, 0.3))' }}></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Pourquoi choisir Zourka IT ?</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expertise solide</h4>
                    <p className="text-gray-600">Plus de 13 années d'expérience en cybersécurité et gouvernance IT</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vision africaine</h4>
                    <p className="text-gray-600">Ancrée dans la réalité locale et les standards internationaux</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Offre complète</h4>
                    <p className="text-gray-600">Du conseil stratégique à l'exploitation opérationnelle</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Approche humaine</h4>
                    <p className="text-gray-600">Au service de la maturité numérique de nos clients</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" style={{ color: '#34b04d' }} />
                <div>
                  <p className="text-sm text-gray-600">Sécurité, innovation et confiance</p>
                  <p className="font-semibold text-gray-900">Au cœur du développement numérique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
