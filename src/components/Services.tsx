import { Shield, Zap, HeadphonesIcon, FileText, GraduationCap, Cpu } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection complète de vos systèmes d\'information',
    features: [
      'Audits et tests d\'intrusion (interne, externe, applicatif)',
      'Surveillance et détection 24/7 (SOC as a Service)',
      'Gestion des identités et des accès (IAM)',
      'Accompagnement SMSI – ISO 27001, PCI DSS, SWIFT CSP',
      'Sécurisation des systèmes et applications critiques',
    ],
  },
  {
    icon: Zap,
    title: 'Transformation Digitale',
    description: 'Modernisez vos infrastructures en toute sécurité',
    features: [
      'Security by Design',
      'Migration cloud sécurisée (AWS, Azure, GCP)',
      'Automatisation des processus métiers',
      'Gouvernance et protection des données (RGPD, ISO 27701)',
      'Modernisation et optimisation des infrastructures IT',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Services Managés',
    description: 'Infogérance complète de votre sécurité IT',
    features: [
      'MSSP – Managed Security Services Provider',
      'SOC & NOC as a Service',
      'Infogérance et maintenance proactive',
      'PCA/PRA (Plan de Continuité et de Reprise d\'Activité)',
      'Support technique dédié avec SLA',
    ],
  },
  {
    icon: FileText,
    title: 'Conseil & Gouvernance',
    description: 'Stratégie et conformité pour votre organisation',
    features: [
      'Élaboration de stratégies et politiques de cybersécurité',
      'Cartographie et gestion des risques IT',
      'Mise en conformité ISO 27001, PCI DSS, SWIFT CSP, RGPD',
      'Création de comités de sécurité et gouvernance des données',
      'Gestion de crise et accompagnement à la certification',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Formation & Sensibilisation',
    description: 'Développez la culture cyber de vos équipes',
    features: [
      'Formations accessibles à tous les niveaux',
      'Sensibilisation des collaborateurs aux bonnes pratiques',
      'Formations exécutives pour dirigeants et décideurs',
      'Simulations de crise et exercices de gestion d\'incident',
      'Programmes sur mesure pour renforcer la maturité cyber',
    ],
  },
  {
    icon: Cpu,
    title: 'Sécurité IoT & Cybersécurité Industrielle',
    description: 'Protégez vos infrastructures critiques',
    features: [
      'Audit de sécurité IoT et systèmes industriels (SCADA, ICS)',
      'Sécurisation des objets connectés et réseaux OT',
      'Application des normes ISA/IEC 62443',
      'Protection des infrastructures critiques et Smart Cities',
      'Supervision et durcissement des environnements industriels',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos pôles d'expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une offre complète pour répondre à tous vos besoins en cybersécurité et transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
