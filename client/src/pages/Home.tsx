import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, ArrowRight, Info } from 'lucide-react';

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const ModalContent = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <Dialog open={openModal === id} onOpenChange={(open) => setOpenModal(open ? id : null)}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-gray-700">{children}</div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-400 to-cyan-400">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 md:p-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-cyan-500">✓</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            NonoTalk
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Comprendre ce que <span className="font-bold">vivent vos équipes</span>, avant que les problèmes n'apparaissent
          </p>

          {/* Description */}
          <p className="text-center text-gray-600 text-base mb-10 leading-relaxed">
            NonoTalk est une solution d'écoute et d'analyse intelligente, conçue pour aider les RH et managers à mieux comprendre le ressenti des équipes et à prendre des décisions plus claires.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="font-semibold bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg transition-all"
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
            >
              Tester NonoTalk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-purple-600 border-purple-300 hover:bg-purple-50"
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
            >
              Échanger avec nous
            </Button>
          </div>

          {/* Modal Link */}
          <div className="flex justify-center">
            <button
              onClick={() => setOpenModal('approach')}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
            >
              <Info className="w-4 h-4" />
              En savoir plus sur notre démarche
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Les difficultés humaines sont <span className="text-purple-600">souvent détectées trop tard</span>
            </h2>
            <div className="space-y-4">
              {[
                'les salariés n\'osent pas toujours exprimer leurs difficultés,',
                'les signaux faibles passent inaperçus,',
                'les décisions RH sont prises sans visibilité claire,',
                'le stress, les arrêts de travail et les départs s\'accumulent.'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-purple-600 font-semibold text-lg">
              → Résultat : les problèmes sont découverts quand ils sont déjà coûteux.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Une écoute intelligente au service de la <span className="text-purple-600">décision RH</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              NonoTalk permet aux entreprises de :
            </p>
            <div className="space-y-4 mb-8">
              {[
                'offrir un espace d\'expression confidentiel aux collaborateurs,',
                'analyser les tendances et ressentis de manière collective,',
                'transformer les retours humains en insights clairs et actionnables.'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-purple-100 border-l-4 border-purple-600 p-4 rounded">
              <p className="text-gray-900 font-semibold">
                👉 L'objectif n'est pas de surveiller,
              </p>
              <p className="text-gray-900 font-semibold">
                👉 mais de mieux comprendre pour mieux agir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Une écoute intelligente au service de la décision RH
          </h2>
          <p className="text-center text-gray-600 mb-12">Trois étapes simples</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: '1',
                title: 'Écoute',
                desc: 'Les collaborateurs s\'expriment de manière simple et confidentielle (questionnaires courts / interactions guidées).'
              },
              {
                num: '2',
                title: 'Analyse intelligente',
                desc: 'L\'IA analyse les tendances, détecte les signaux faibles et identifie les sujets prioritaires.'
              },
              {
                num: '3',
                title: 'Aide à la décision',
                desc: 'Les RH et managers accèdent à une synthèse claire : ce qui fonctionne, ce qui pose problème, par où commencer.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-white flex items-center justify-center font-bold mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Les bénéfices pour les RH & managers
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Vision claire du climat interne',
              'Décisions plus éclairées et priorisées',
              'Prévention des risques humains',
              'Gain de temps dans l\'analyse',
              'Dialogue social renforcé'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-white p-4 rounded-lg border border-gray-200">
                <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-900 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-purple-600">
            <div className="flex gap-3 items-start">
              <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-900 font-medium">
                L'IA est utilisée uniquement pour analyser des tendances collectives et aider à la prise de décision, jamais pour évaluer ou profiler des individus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Confidentialité & <span className="text-blue-600">Responsabilité</span>
            </h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              NonoTalk ne remplace pas un psychologue, n'est pas un outil médical, n'analyse jamais les individus, et fonctionne uniquement sur des données agrégées et anonymes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🔒', text: 'Pas de surveillance' },
                { icon: '👥', text: 'Pas d\'analyse individuelle' },
                { icon: '⚕️', text: 'Pas de diagnostic médical' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <p className="text-gray-900 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-700 font-semibold text-sm">Early access – co-construit avec des entreprises</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Actuellement en phase pilote
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              NonoTalk est actuellement testé avec des entreprises partenaires afin de co-construire une solution réellement adaptée aux besoins RH.
            </p>
            <p className="text-gray-900 font-semibold mt-6">
              👉 Vous souhaitez participer ou en savoir plus ? Parlons-en.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 px-4 py-20 md:py-24">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre approche RH ?
          </h2>
          <p className="text-lg mb-10 opacity-95">
            Rejoignez les entreprises qui repensent l'écoute et la prise de décision RH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
            >
              Tester NonoTalk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ModalContent id="approach" title="Notre démarche">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Écoute et Confidentialité</h3>
            <p>NonoTalk crée un espace sûr où les collaborateurs peuvent s'exprimer librement. Toutes les données sont traitées de manière confidentielle et anonyme. Nous ne cherchons jamais à identifier les individus, mais à comprendre les tendances collectives.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Intelligence Artificielle Responsable</h3>
            <p>Notre approche de l'IA est centrée sur l'aide à la décision, pas sur la surveillance. Nous analysons les données agrégées pour identifier les signaux faibles et les tendances, permettant aux RH de prendre des décisions plus éclairées.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Respect et Transparence</h3>
            <p>Nous respectons les réglementations RGPD et les bonnes pratiques en matière de protection des données. Chaque entreprise partenaire a une visibilité complète sur comment ses données sont utilisées.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Co-construction</h3>
            <p>Nous travaillons en étroite collaboration avec nos partenaires RH pour adapter NonoTalk à leurs besoins réels. Votre feedback façonne directement l'évolution de la solution.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Limites Claires</h3>
            <p>NonoTalk ne remplace pas un psychologue ou un médecin. Ce n'est pas un outil de diagnostic médical. Nous identifions les tendances, mais les décisions et actions restent entre les mains des RH et managers.</p>
          </div>
        </div>
      </ModalContent>
    </div>
  );
}
