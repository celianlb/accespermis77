import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Accès Permis 77",
  description: "Mentions légales de l'auto-école Accès Permis 77. Informations légales et réglementaires.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Mentions légales</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Éditeur du site</h2>
              <div className="space-y-2">
                <p><strong>Nom commercial :</strong> Accès Permis 77</p>
                <p><strong>Forme juridique :</strong> SASU</p>
                <p><strong>Siège social :</strong> 13-15, 13 RUE LOUIS OSTENG, 77181 COURTRY, France</p>
                <p><strong>Téléphone :</strong> 01.60.08.19.11</p>
                <p><strong>Dirigeant / Directeur de la publication :</strong> Ayachi Tourkia</p>
                <p><strong>SIRET :</strong> 881 564 546 00029</p>
                <p><strong>RCS :</strong> Meaux</p>
                <p><strong>Numéro de TVA intracommunautaire :</strong> FR96881564546</p>
                <p><strong>Email :</strong> contact@acces-permis77.fr</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Hébergement</h2>
              <p>Le site est hébergé par :</p>
              <div className="space-y-2 mt-2">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p><strong>Site web :</strong> <a href="https://vercel.com" className="text-primary hover:underline">https://vercel.com</a></p>
                <p><strong>Contact :</strong> support@vercel.com</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Collecte de données personnelles</h2>
              <p className="leading-relaxed">
                Aucune donnée personnelle n'est collectée sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Propriété intellectuelle</h2>
              <p className="leading-relaxed">
                Le contenu du site Accès Permis 77 (textes, images, logo…) est protégé par les lois en vigueur sur la propriété intellectuelle. 
                Toute reproduction est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Responsabilité</h2>
              <p className="leading-relaxed">
                L'éditeur du site s'efforce de fournir des informations aussi précises que possible. 
                Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour.
              </p>
            </section>

            <section className="text-sm text-gray-500 pt-6 border-t">
              <p>Dernière mise à jour : Décembre 2024</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}