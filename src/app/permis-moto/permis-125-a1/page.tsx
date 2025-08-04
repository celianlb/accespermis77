import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permis 125 A1 - Formation moto légère - Accès Permis 77",
  description: "Obtenez votre permis A1 pour conduire des motos 125cc. Formation complète moto légère avec Accès Permis 77.",
};

export default function Permis125A1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Permis 125 A1
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Permis A1 - Motocyclettes légères
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le permis A1 vous permet de conduire des motocyclettes de 125 cm³ maximum et des tricycles à moteur. 
              Accessible dès 16 ans, c'est la première étape vers la conduite moto en toute sécurité.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏍️ Véhicules autorisés avec le permis A1
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Motocyclettes :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Cylindrée max 125 cm³</li>
                    <li>• Puissance max 11 kW (15 ch)</li>
                    <li>• Rapport puissance/poids ≤ 0,1 kW/kg</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tricycles à moteur :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Puissance max 15 kW</li>
                    <li>• Accessible dès 16 ans</li>
                    <li>• Conduite facilitée</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Formation théorique
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Code de la route moto</li>
                  <li>• Spécificités deux-roues</li>
                  <li>• Équipements de protection</li>
                  <li>• Examen ETM obligatoire</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Formation pratique
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 20h de conduite minimum</li>
                  <li>• Plateau et circulation</li>
                  <li>• Maniabilité lente et rapide</li>
                  <li>• Conduite en situation réelle</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Examens
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• ETM (code moto)</li>
                  <li>• Épreuve plateau</li>
                  <li>• Épreuve circulation</li>
                  <li>• Permis probatoire 3 ans</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                ✅ Prérequis et conditions
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-green-700">
                <div>
                  <h4 className="font-semibold mb-2">Candidat :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Avoir 16 ans minimum</li>
                    <li>• Aptitude médicale si nécessaire</li>
                    <li>• ASSR 2 ou ASR si né après 1988</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Formation :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Dossier d'inscription complet</li>
                    <li>• Formation théorique et pratique</li>
                    <li>• Présentation aux examens</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                💡 Évolution vers les gros cubes
              </h3>
              <p className="text-yellow-700 text-sm">
                Après 2 ans de permis A1, vous pourrez passer le permis A2 (moto jusqu'à 35 kW) sans repasser le code. 
                Une excellente progression pour accéder aux motos plus puissantes !
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tarifs et formules</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Évaluation de départ</span>
                  <span className="font-semibold">Gratuite</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Forfait code + plateau</span>
                  <span className="font-semibold">450€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Forfait 20h de conduite</span>
                  <span className="font-semibold">1200€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Présentation examens</span>
                  <span className="font-semibold">Incluse</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mr-4">
                S'inscrire au permis A1
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors">
                Réserver une évaluation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}