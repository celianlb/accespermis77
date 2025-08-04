import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation 125 - Formation obligatoire permis B - Accès Permis 77",
  description: "Formation 125cc obligatoire pour conduire un scooter ou moto 125 avec le permis B. Formation 7h avec Accès Permis 77.",
};

export default function Formation125() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Formation 125
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Formation 125cc - Complément au permis B
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vous avez le permis B et souhaitez conduire un scooter ou une moto 125cc ? 
              La formation de 7 heures est obligatoire (sauf exceptions) pour accéder aux deux-roues de 125 cm³ en toute sécurité.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏍️ Véhicules concernés par la formation 125
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Motocyclettes légères :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Cylindrée entre 50 et 125 cm³</li>
                    <li>• Puissance max 11 kW (15 ch)</li>
                    <li>• Motos et scooters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tricycles à moteur :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Puissance max 15 kW</li>
                    <li>• Trikes et scooters 3 roues</li>
                    <li>• Conduite simplifiée</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                ⚠️ Qui doit suivre la formation 125 ?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-yellow-700">
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">Formation OBLIGATOIRE :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Permis B obtenu après le 19/01/2013</li>
                    <li>• Pas d'expérience deux-roues</li>
                    <li>• Souhait de conduire du 125cc</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">DISPENSES :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Permis B avant le 19/01/2013</li>
                    <li>• Titulaire A, A1, A2 ou BSR</li>
                    <li>• Assurance 125 entre 2006-2013</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Séquence théorique
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 2 heures de formation</li>
                  <li>• Code spécifique aux 2 roues</li>
                  <li>• Équipements de protection</li>
                  <li>• Analyse des accidents</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Hors circulation
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 2 heures de pratique</li>
                  <li>• Prise en main du véhicule</li>
                  <li>• Exercices de maniabilité</li>
                  <li>• Freinage et équilibre</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  En circulation
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 3 heures de conduite</li>
                  <li>• Circulation réelle</li>
                  <li>• Situations variées</li>
                  <li>• Évaluation des acquis</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                ✅ Avantages de bien se former
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Sécurité renforcée sur la route</li>
                <li>• Maîtrise des spécificités deux-roues</li>
                <li>• Confiance en circulation urbaine</li>
                <li>• Réduction des risques d'accident</li>
                <li>• Plaisir de conduire en sécurité</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                📝 Après la formation
              </h3>
              <div className="text-purple-700 space-y-2">
                <p>• Attestation de suivi de formation délivrée</p>
                <p>• Autorisation immédiate de conduire du 125cc</p>
                <p>• Pas d'examen à passer</p>
                <p>• Validation permanente (pas de renouvellement)</p>
                <p>• Possibilité d'évoluer vers un permis moto</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tarifs et inclus</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Formation complète 7h</span>
                  <span className="font-semibold">320€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Scooter/moto d'école</span>
                  <span className="font-semibold text-green-600">Inclus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Casque et équipements</span>
                  <span className="font-semibold text-green-600">Inclus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Attestation officielle</span>
                  <span className="font-semibold text-green-600">Incluse</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mr-4">
                S'inscrire à la formation 125
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors">
                Vérifier mes dispenses
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}