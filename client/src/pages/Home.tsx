import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Info, CheckCircle2, Zap, Users, Shield, Lightbulb } from 'lucide-react';

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const ModalContent = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <Dialog open={openModal === id} onOpenChange={(open) => setOpenModal(open ? id : null)}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-gray-700">{children}</div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Gradient Violet to Rose */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-400">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 md:p-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-400 flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-600 to-pink-500">✓</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            NonoTalk
          </h1>

          {/* Subtitle */}
          <p className="text-center text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-semibold">
            Comprendre ce que <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">vivent vos équipes</span>, avant que les problèmes n'apparaissent
          </p>

          {/* Description */}
          <p className="text-center text-gray-600 text-base mb-10 leading-relaxed">
            NonoTalk est une solution d'écoute et d'analyse intelligente, conçue pour aider les RH et managers à mieux comprendre le ressenti des équipes et à prendre des décisions plus claires.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="font-bold text-base bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white hover:shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
            >
              Tester NonoTalk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-base text-fuchsia-600 border-2 border-fuchsia-300 hover:bg-fuchsia-50"
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
            >
              Échanger avec nous
            </Button>
          </div>

          {/* Modal Link */}
          <div className="flex justify-center">
            <button
              onClick={() => setOpenModal('approach')}
              className="flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700 font-semibold text-sm transition-colors hover:gap-3"
            >
              <Info className="w-4 h-4" />
              En savoir plus sur notre démarche
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-fuchsia-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-fuchsia-200 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Les difficultés humaines sont <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">souvent détectées trop tard</span>
            </h2>
            <div className="space-y-4">
              {[
                'les salariés n\'osent pas toujours exprimer leurs difficultés,',
                'les signaux faibles passent inaperçus,',
                'les décisions RH sont prises sans visibilité claire,',
                'le stress, les arrêts de travail et les départs s\'accumulent.'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-gray-800 font-semibold">
              → Résultat : <span className="text-fuchsia-600">les problèmes sont découverts quand ils sont déjà coûteux.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-4 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Une écoute intelligente au service de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">décision RH</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Écoute', desc: 'Offrir un espace d\'expression confidentiel aux collaborateurs' },
              { icon: Zap, title: 'Analyse', desc: 'Analyser les tendances et ressentis de manière collective' },
              { icon: Lightbulb, title: 'Décision', desc: 'Transformer les retours humains en insights clairs et actionnables' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl p-8 border border-fuchsia-200 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-fuchsia-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-700 text-lg">
            👉 L'objectif n'est pas de surveiller,<br />
            👉 mais de mieux comprendre pour mieux agir.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Comment ça marche
          </h2>
          <div className="space-y-6">
            {[
              { num: '1', title: 'Écoute', desc: 'Les collaborateurs s\'expriment de manière simple et confidentielle (questionnaires courts / interactions guidées).' },
              { num: '2', title: 'Analyse intelligente', desc: 'L\'IA analyse les tendances, détecte les signaux faibles et identifie les sujets prioritaires.' },
              { num: '3', title: 'Aide à la décision', desc: 'Les RH et managers accèdent à une synthèse claire : ce qui fonctionne, ce qui pose problème, par où commencer.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white font-bold text-lg">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les bénéfices pour les RH & managers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Vision claire du climat interne',
              'Décisions plus éclairées et priorisées',
              'Prévention des risques humains',
              'Gain de temps dans l\'analyse',
              'Dialogue social renforcé'
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl border border-fuchsia-200">
                <CheckCircle2 className="w-6 h-6 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-900 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <p className="text-gray-800 font-medium">
              ✓ L'IA est utilisée uniquement pour analyser des tendances collectives et aider à la prise de décision, jamais pour évaluer ou profiler des individus.
            </p>
          </div>
        </div>
      </section>

      {/* Confidentiality Section */}
      <section className="px-4 py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Confidentialité & Responsabilité
          </h2>
          <div className="bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-fuchsia-200 shadow-lg mb-8">
            <p className="text-gray-800 font-semibold mb-6 text-lg">
              NonoTalk ne remplace pas un psychologue, n'est pas un outil médical, n'analyse jamais les individus, et fonctionne uniquement sur des données agrégées et anonymes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Pas de surveillance' },
                { icon: Users, title: 'Pas d\'analyse individuelle' },
                { icon: Lightbulb, title: 'Pas de diagnostic médical' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <item.icon className="w-8 h-8 text-fuchsia-600 mb-3" />
                  <p className="font-semibold text-gray-900">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Phase Section */}
      <section className="px-4 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-yellow-200 shadow-lg">
            <div className="inline-block mb-6 px-4 py-2 bg-yellow-200 text-yellow-900 rounded-full font-bold text-sm">
              Early access – co-construit avec des entreprises
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Actuellement en phase pilote
            </h2>
            <p className="text-gray-800 text-lg mb-6">
              NonoTalk est actuellement testé avec des entreprises partenaires afin de co-construire une solution réellement adaptée aux besoins RH.
            </p>
            <p className="text-gray-900 font-semibold text-lg">
              👉 Vous souhaitez participer ou en savoir plus ? Parlons-en.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-20 md:py-28 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-pink-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre approche RH ?
          </h2>
          <p className="text-white text-lg mb-10 opacity-95">
            Rejoignez les entreprises qui repensent l'écoute et la prise de décision RH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-bold text-base bg-white text-fuchsia-600 hover:bg-gray-100 hover:shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
            >
              Tester NonoTalk
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold text-base text-white border-2 border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ModalContent id="approach" title="Notre démarche">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Écoute et Confidentialité</h3>
            <p>NonoTalk crée un espace sûr où les collaborateurs peuvent s'exprimer librement. Toutes les données sont traitées de manière confidentielle et anonyme. Nous ne cherchons jamais à identifier les individus, mais à comprendre les tendances collectives.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligence Artificielle Responsable</h3>
            <p>Notre approche de l'IA est centrée sur l'aide à la décision, pas sur la surveillance. Nous analysons les données agrégées pour identifier les signaux faibles et les tendances, permettant aux RH de prendre des décisions plus éclairées.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Respect et Transparence</h3>
            <p>Nous respectons les réglementations RGPD et les bonnes pratiques en matière de protection des données. Chaque entreprise partenaire a une visibilité complète sur comment ses données sont utilisées.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Co-construction</h3>
            <p>Nous travaillons en étroite collaboration avec nos partenaires RH pour adapter NonoTalk à leurs besoins réels. Votre feedback façonne directement l'évolution de la solution.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Limites Claires</h3>
            <p>NonoTalk ne remplace pas un psychologue ou un médecin. Ce n'est pas un outil de diagnostic médical. Nous identifions les tendances, mais les décisions et actions restent entre les mains des RH et managers.</p>
          </div>
        </div>
      </ModalContent>
    </div>
  );
}
