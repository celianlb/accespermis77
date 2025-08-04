import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Passerelle BEA vers B - Formation complémentaire - Accès Permis 77",
  description: "Complétez votre permis BEA avec la passerelle vers le permis B. Apprenez la conduite manuelle avec Accès Permis 77.",
};

export default function PasserelleBEAversB() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Passerelle BEA vers B
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Formation complémentaire pour conduire en manuel
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vous avez obtenu votre permis BEA (automatique) et souhaitez maintenant pouvoir conduire des véhicules à boîte manuelle ? 
              La formation passerelle vous permet d'obtenir cette autorisation après seulement 7 heures de formation.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📋 Conditions requises
              </h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Être titulaire du permis BEA depuis au moins 3 mois</li>
                <li>• Aucune infraction entraînant une perte de points</li>
                <li>• Avoir conduit au moins 1000 km avec le permis BEA</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Programme de formation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 7 heures de formation obligatoires</li>
                  <li>• Apprentissage de l'embrayage</li>
                  <li>• Technique de passage des vitesses</li>
                  <li>• Conduite en circulation</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Avantages
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pas d'examen à repasser</li>
                  <li>• Formation courte et efficace</li>
                  <li>• Accès à tous types de véhicules</li>
                  <li>• Attestation de formation délivrée</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Déroulement de la formation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Évaluation (1h)</h4>
                    <p className="text-gray-600 text-sm">Évaluation de vos acquis et adaptation au véhicule manuel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Formation pratique (6h)</h4>
                    <p className="text-gray-600 text-sm">Apprentissage progressif de la conduite manuelle en circulation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Attestation</h4>
                    <p className="text-gray-600 text-sm">Délivrance de l'attestation vous autorisant à conduire en manuel</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors mr-4">
                S'inscrire à la passerelle
              </button>
              <button className="border border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary/10 transition-colors">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}