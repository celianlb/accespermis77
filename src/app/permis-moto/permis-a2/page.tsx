import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permis A2 - Formation moto intermédiaire - Accès Permis 77",
  description: "Obtenez votre permis A2 pour conduire des motos jusqu'à 35 kW. Formation moto intermédiaire avec Accès Permis 77.",
};

export default function PermisA2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-W-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Permis A2
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Permis A2 - Motocyclettes de puissance intermédiaire
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le permis A2 vous permet de conduire des motocyclettes d'une puissance maximale de 35 kW (47,5 ch). 
              Accessible dès 18 ans, c'est le permis moto le plus populaire, offrant un excellent compromis puissance/sécurité.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏍️ Véhicules autorisés avec le permis A2
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-blue-700">
                <div>
                  <h4 className="font-semibold mb-2">Motocyclettes :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Puissance max 35 kW (47,5 ch)</li>
                    <li>• Rapport puissance/poids ≤ 0,2 kW/kg</li>
                    <li>• Toutes cylindrées autorisées</li>
                    <li>• Motos bridées acceptées</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tricycles à moteur :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Toute puissance autorisée</li>
                    <li>• Poids à vide > 15 tonnes</li>
                    <li>• Conduite facilitée</li>
                    <li>• Parfait pour débuter</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Code moto (ETM)
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 40 questions spécifiques moto</li>
                  <li>• Réglementation deux-roues</li>
                  <li>• Équipements et sécurité</li>
                  <li>• Valable 5 ans</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Épreuve plateau
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Vérifications techniques</li>
                  <li>• Maniabilité sans moteur</li>
                  <li>• Maniabilité avec moteur</li>
                  <li>• Freinage d'urgence</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Épreuve circulation
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 35 minutes de conduite</li>
                  <li>• Situations variées</li>
                  <li>• Autonomie et initiative</li>
                  <li>• Respect du code</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🎯 Avantages du permis A2
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Accès à une large gamme de motos performantes</li>
                <li>• Puissance suffisante pour tous types de trajets</li>
                <li>• Évolution possible vers le permis A après 2 ans</li>
                <li>• Excellent compromis pour débuter en moto</li>
                <li>• Nombreux modèles disponibles sur le marché</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🚀 Accès direct ou progressif
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-purple-700">
                <div>
                  <h4 className="font-semibold mb-2">Accès direct (18 ans) :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Formation complète obligatoire</li>
                    <li>• Code moto + plateau + circulation</li>
                    <li>• 20h de conduite minimum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Depuis A1 (18 ans + 2 ans A1) :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Pas de nouveau code à passer</li>
                    <li>• Formation adaptée</li>
                    <li>• Progression naturelle</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Nos formules permis A2</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Forfait découverte (15h)</span>
                  <span className="font-semibold">1450€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Forfait standard (20h)</span>
                  <span className="font-semibold">1650€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Forfait sécurité (25h)</span>
                  <span className="font-semibold">1850€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Code moto inclus</span>
                  <span className="font-semibold text-green-600">✓</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mr-4">
                S'inscrire au permis A2
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors">
                Essai moto gratuit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}