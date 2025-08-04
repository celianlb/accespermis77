import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code de la route - Accès Permis 77",
  description: "Apprenez le code de la route avec notre auto-école Accès Permis 77. Formation complète et personnalisée pour réussir votre examen du code.",
};

export default function CodeDeLaRoute() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Code de la route
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Formation au code de la route
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Préparez-vous efficacement à l'examen théorique général (ETG) avec notre formation complète au code de la route. 
              Notre équipe pédagogique vous accompagne dans votre apprentissage avec des outils modernes et une méthode éprouvée.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-secondary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">
                  Formation en salle
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cours théoriques avec moniteur</li>
                  <li>• Tests blancs réguliers</li>
                  <li>• Suivi personnalisé</li>
                  <li>• Horaires flexibles</li>
                </ul>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Formation en ligne
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accès 24h/24 et 7j/7</li>
                  <li>• Plus de 10 000 questions</li>
                  <li>• Cours vidéo interactifs</li>
                  <li>• Application mobile</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                Commencer ma formation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}