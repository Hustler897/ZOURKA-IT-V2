import { Shield, TrendingUp, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Votre partenaire cybersécurité en Afrique
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Sécuriser aujourd'hui,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                transformer demain
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Zourka IT accompagne les entreprises, institutions financières et administrations publiques dans la protection de leurs systèmes d'information et la réussite de leur transformation digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#offers"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow text-center"
              >
                Découvrir nos offres
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 transition-colors text-center"
              >
                Diagnostic gratuit
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl transform rotate-6"></div>
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
                <TrendingUp className="w-8 h-8 text-blue-600" />
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
