import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Award, BookOpen, ExternalLink, Globe, ShieldCheck, Users, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import pecbLogo from '../assets/images/pecb-logo.png';

const certifications = [
  'ISO/IEC 27001 – Management de la sécurité de l’information',
  'ISO/IEC 27002, 27005 & 27035 – Sécurité, risques & incidents',
  'ISO 22301 – Continuité d’activité & résilience',
  'ISO/IEC 27701 & RGPD – Confidentialité & protection des données',
  'ISO/IEC 42001 – Management de l’intelligence artificielle',
  'ISO 31000, ISO 37301 – Risques & conformité',
  'Cybersécurité technique – Ethical Hacking, Pen Test, Forensics',
  'ISO 9001, ISO 20000 – Qualité & services IT',
];

const stats = [
  { icon: Globe, value: '150+', label: 'Pays couverts' },
  { icon: Users, value: '2 600+', label: 'Partenaires dans le monde' },
  { icon: BookOpen, value: '300+', label: 'Formations certifiantes' },
  { icon: Award, value: 'Accrédité', label: 'IAS · UKAS · COFRAC · ANAB' },
];

const whyItems = [
  {
    icon: Award,
    title: 'Des certifications reconnues',
    text: 'Des parcours PECB accrédités selon ISO/IEC 17024, valorisés par les employeurs et les auditeurs dans le monde entier.',
  },
  {
    icon: ShieldCheck,
    title: 'Aligné avec nos pôles d’expertise',
    text: 'SMSI, continuité d’activité, gouvernance, privacy et sécurité technique : le catalogue PECB prolonge directement les services Zourka IT.',
  },
  {
    icon: Users,
    title: 'La montée en compétence locale',
    text: 'Former et certifier les talents au Niger et en Afrique de l’Ouest, pour une souveraineté numérique durable.',
  },
];

export default function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-green-600 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l’accueil
            </Link>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: '#34b04d20', color: '#34b04d' }}>
              <Users className="w-4 h-4" />
              Nos partenaires
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Ils nous font confiance pour{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}>
                bâtir la confiance numérique
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Zourka IT s’associe aux meilleurs organismes mondiaux pour apporter au Niger
              des formations et certifications de niveau international.
            </p>
          </div>
        </section>

        {/* PECB card */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-5">
                {/* Logo side */}
                <div className="lg:col-span-2 bg-white flex flex-col items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <img
                    src={pecbLogo}
                    alt="Logo PECB – Professional Evaluation and Certification Board"
                    className="max-h-48 w-auto object-contain mb-6"
                  />
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    Partenaire formation & certification
                  </span>
                </div>

                {/* Content side */}
                <div className="lg:col-span-3 p-8 sm:p-12">
                  <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#34b04d' }}>
                    Professional Evaluation and Certification Board
                  </p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">PECB</h2>
                  <p className="text-lg italic text-gray-500 mb-6">
                    « Building Digital Trust » — Où l’excellence rencontre la reconnaissance.
                  </p>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">PECB</strong> est un organisme de certification
                      de référence mondiale, spécialisé dans la formation et la certification des
                      professionnels de la sécurité numérique, de la gouvernance, du risque et de
                      la conformité.
                    </p>
                    <p>
                      Grâce à ce partenariat, <strong className="text-gray-900">Zourka IT</strong> propose
                      au Niger des parcours PECB officiels — en présentiel et en ligne — avec examens
                      surveillés et certificats reconnus internationalement, adossés aux normes
                      ISO et aux accréditations <strong className="text-gray-900">IAS, UKAS, COFRAC et ANAB</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="https://pecb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white rounded-lg font-semibold hover:shadow-xl transition-shadow"
                      style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}
                    >
                      Visiter pecb.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <Link
                      to="/#contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-200 hover:border-green-500 transition-colors"
                    >
                      Demander une formation PECB
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-200">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={i}
                      className={`flex flex-col items-center text-center px-6 py-8 ${i !== 0 ? 'border-l border-gray-200' : ''} ${i >= 2 ? 'border-t lg:border-t-0 border-gray-200' : ''}`}
                    >
                      <Icon className="w-6 h-6 mb-2" style={{ color: '#34b04d' }} />
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Parcours PECB disponibles via Zourka IT
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Une sélection des formations les plus demandées — catalogue complet de plus de
                300 cours sur <a href="https://pecb.com/" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: '#34b04d' }}>pecb.com</a>.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-green-500 transition-all">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#34b04d' }} />
                    <span className="text-sm font-medium text-gray-700">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pourquoi ce partenariat ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                La même exigence : une cybersécurité africaine adossée aux standards mondiaux.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="inline-flex p-4 rounded-xl mb-6" style={{ background: 'linear-gradient(to bottom right, #34b04d, #2a8f3e)' }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl" style={{ background: 'linear-gradient(to right, #34b04d, #2a8f3e)' }}>
              <h2 className="text-3xl font-bold mb-4">Prêt à vous certifier avec PECB ?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#e8f5e9' }}>
                Contactez Zourka IT pour connaître les prochaines sessions, les tarifs et les
                parcours adaptés à votre profil — individuels ou pour vos équipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="px-8 py-4 bg-white rounded-lg font-semibold hover:shadow-xl transition-shadow text-center"
                  style={{ color: '#2a8f3e' }}
                >
                  Nous contacter
                </Link>
                <a
                  href="https://pecb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors"
                >
                  Explorer le catalogue PECB
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
