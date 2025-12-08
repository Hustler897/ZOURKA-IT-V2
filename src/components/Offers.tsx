import { Gift, Zap } from 'lucide-react';

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos offres de lancement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profitez de nos offres spéciales pour démarrer votre transformation sécurisée
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-colors group overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm">
              GRATUIT
            </div>

            <div className="mt-8 mb-6">
              <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                <Gift className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Diagnostic de maturité cyber
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Évaluez votre posture de sécurité et recevez une feuille de route personnalisée pour améliorer votre niveau de protection.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Évaluation complète de votre infrastructure</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Identification des vulnérabilités critiques</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Rapport détaillé avec recommandations</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Roadmap de sécurisation prioritaire</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="block w-full px-6 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white rounded-xl font-semibold text-center hover:shadow-xl transition-shadow"
            >
              Demander mon diagnostic gratuit
            </a>
          </div>

          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 transition-colors group overflow-hidden" style={{ borderColor: '#e5e7eb' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#34b04d'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
            <div className="absolute top-0 right-0 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm" style={{ backgroundColor: '#34b04d' }}>
              EXPRESS
            </div>

            <div className="mt-8 mb-6">
              <div className="inline-flex p-4 rounded-xl group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(to bottom right, #34b04d, #2a8f3e)' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pack Conformité Express
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Un accompagnement rapide et structuré pour initier votre mise en conformité aux standards internationaux.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#34b04d' }}></div>
                <span className="text-gray-700">Conformité ISO 27001, PCI DSS ou SWIFT CSP</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#34b04d' }}></div>
                <span className="text-gray-700">Gap analysis et plan d'action détaillé</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#34b04d' }}></div>
                <span className="text-gray-700">Accompagnement dans la mise en œuvre</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#34b04d' }}></div>
                <span className="text-gray-700">Documentation et politiques de sécurité</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="block w-full px-6 py-4 text-white rounded-xl font-semibold text-center hover:shadow-xl transition-shadow"
              style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
            >
              Découvrir le Pack Express
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
