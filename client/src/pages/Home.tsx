import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle2, ArrowRight, Users, Zap, Lightbulb, Shield, Heart } from 'lucide-react';

export default function Home() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NonoTalk" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">NonoTalk</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#probleme" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Problème</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Solution</a>
            <a href="#comment" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Comment ça marche</a>
            <a href="#benefices" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Bénéfices</a>
            <button
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Tester
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprendre ce que vivent vos équipes,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> avant que les problèmes n'apparaissent</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            NonoTalk est une solution d'écoute et d'analyse intelligente, conçue pour aider les RH et managers à mieux comprendre le ressenti des équipes et à prendre des décisions plus claires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Tester NonoTalk
            </button>
            <button
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Échanger avec nous
            </button>
          </div>
          <button
            onClick={() => setOpenModal('approach')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-center gap-2 mx-auto"
          >
            <span>En savoir plus sur notre démarche</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Problem Section */}
      <section id="probleme" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Le problème</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Les difficultés humaines sont souvent détectées trop tard
          </h2>
          <div className="space-y-4">
            {[
              'les salariés n\'osent pas toujours exprimer leurs difficultés,',
              'les signaux faibles passent inaperçus,',
              'les décisions RH sont prises sans visibilité claire,',
              'le stress, les arrêts de travail et les départs s\'accumulent.'
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xl text-gray-800 font-semibold">
            → Résultat : <span className="text-blue-600">les problèmes sont découverts quand ils sont déjà coûteux.</span>
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">La solution</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Une écoute intelligente au service de la décision RH
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Heart, title: 'Écoute', desc: 'Offrir un espace d\'expression confidentiel aux collaborateurs' },
              { icon: Zap, title: 'Analyse', desc: 'Analyser les tendances et ressentis de manière collective' },
              { icon: Lightbulb, title: 'Décision', desc: 'Transformer les retours humains en insights clairs et actionnables' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-700 text-lg">
            👉 L'objectif n'est pas de surveiller,<br />
            👉 mais de mieux comprendre pour mieux agir.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="comment" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Processus</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Comment ça marche
          </h2>
          <div className="space-y-8">
            {[
              { num: '1', title: 'Écoute', desc: 'Les collaborateurs s\'expriment de manière simple et confidentielle (questionnaires courts / interactions guidées).' },
              { num: '2', title: 'Analyse intelligente', desc: 'L\'IA analyse les tendances, détecte les signaux faibles et identifie les sujets prioritaires.' },
              { num: '3', title: 'Aide à la décision', desc: 'Les RH et managers accèdent à une synthèse claire : ce qui fonctionne, ce qui pose problème, par où commencer.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg">
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
      <section id="benefices" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Avantages</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
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
              <div key={idx} className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Confiance</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Confidentialité & Responsabilité
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-200 shadow-lg mb-8">
            <p className="text-gray-800 font-semibold mb-8 text-lg">
              NonoTalk ne remplace pas un psychologue, n'est pas un outil médical, n'analyse jamais les individus, et fonctionne uniquement sur des données agrégées et anonymes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: 'Pas de surveillance' },
                { icon: Users, title: 'Pas d\'analyse individuelle' },
                { icon: Lightbulb, title: 'Pas de diagnostic médical' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <p className="font-semibold text-gray-900">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Phase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre approche RH ?
          </h2>
          <p className="text-white text-xl mb-10 opacity-95">
            Rejoignez les entreprises qui repensent l'écoute et la prise de décision RH.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://www.nonotalk.fr', '_blank')}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Tester NonoTalk
            </button>
            <button
              onClick={() => window.location.href = 'mailto:contact@nonotalk.fr'}
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="NonoTalk" className="w-8 h-8" />
                <span className="text-white font-bold">NonoTalk</span>
              </div>
              <p className="text-sm">Écoute intelligente pour les RH et managers.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sécurité</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Ressources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2026 NonoTalk. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={openModal === 'approach'} onOpenChange={(open) => setOpenModal(open ? 'approach' : null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">Notre démarche</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 text-gray-700">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
