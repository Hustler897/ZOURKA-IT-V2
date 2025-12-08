import { HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Zourka IT est une nouvelle société. Pourquoi vous faire confiance ?',
    answer: 'Parce que notre force repose sur 13 ans d\'expertise éprouvée, une méthodologie rigoureuse et des résultats mesurables. Notre fondateur et notre équipe ont accompagné de nombreuses organisations dans leur sécurisation et leur transformation digitale.',
  },
  {
    question: 'Intervenez-vous à l\'international ?',
    answer: 'Oui, nous opérons principalement au Niger et dans plusieurs pays d\'Afrique de l\'Ouest. Notre expertise et nos solutions sont adaptables à différents contextes régulaux et réglementaires.',
  },
  {
    question: 'Proposez-vous des formations certifiantes ?',
    answer: 'Nous développons des programmes personnalisés et préparatoires à certaines certifications (ISO, cybersécurité, cloud, etc.). Nos formations sont conçues pour répondre aux besoins spécifiques de chaque organisation et niveau de maturité.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
            <HelpCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Vous avez des questions ? Nous avons les réponses
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
