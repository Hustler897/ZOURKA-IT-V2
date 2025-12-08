import { Target, Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            À propos de Zourka IT
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un acteur de référence de la cybersécurité en Afrique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Faire de Zourka IT un acteur de référence de la cybersécurité et de la transformation digitale en Afrique, en combinant expertise internationale et pertinence locale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <Award className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Offrir des solutions innovantes, accessibles et durables pour aider les organisations africaines à renforcer leur sécurité, moderniser leurs systèmes et accélérer leur transformation numérique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Nos valeurs</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Confiance</h4>
                <p className="text-gray-600">La sécurité comme fondement de toute relation</p>
              </div>

              <div className="border-l-4 border-cyan-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">Des solutions modernes adaptées au contexte africain</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">Rigueur, performance et engagement</p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Proximité</h4>
                <p className="text-gray-600">Accompagnement humain, durable et transparent</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold mb-3">Le fondateur</h3>
              <h4 className="text-xl font-semibold mb-4 text-blue-100">
                Biga Younoussi – Fondateur & Directeur Général
              </h4>
              <p className="text-lg mb-6 text-blue-50 leading-relaxed">
                Expert en cybersécurité et en gouvernance des systèmes d'information, fort de plus de 13 années d'expérience dans la banque et les sociétés de services informatiques.
              </p>
              <blockquote className="text-xl italic font-light border-l-4 border-white/50 pl-6 text-blue-50">
                "L'Afrique doit devenir actrice de sa propre sécurité numérique. À travers Zourka IT, nous voulons donner aux organisations africaines les moyens d'innover en toute confiance."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
