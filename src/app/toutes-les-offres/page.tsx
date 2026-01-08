import { CTA } from "@/components/ui/CTA";
import { Section } from "@/components/ui/Section";
import { Metadata } from "next";
import Link from "next/link";
import { FaCar, FaGraduationCap, FaMotorcycle } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

export const metadata: Metadata = {
  title: "Toutes nos offres - Accès Permis 77",
  description:
    "Découvrez tous nos forfaits et tarifs pour le permis auto, moto, scooter et formations complémentaires. Auto-école Accès Permis 77.",
};

// Types
interface PricingOption {
  hours: string;
  price: number;
  description?: string;
}

interface PermitOffer {
  name: string;
  description: string;
  pricing: PricingOption[];
  features: string[];
  href: string;
}

interface PermitCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  offers: PermitOffer[];
  bgColor: string;
}

interface UnitRate {
  service: string;
  price: number;
  unit: string;
  description?: string;
}

export default function ToutesLesOffres() {
  const categories: PermitCategory[] = [
    {
      title: "Permis Auto",
      icon: <FaCar />,
      description: "Formations pour véhicules légers et conduite accompagnée",
      bgColor: "bg-white",
      offers: [
        {
          name: "Permis B - Boîte Manuelle",
          description: "Formation complète avec code et conduite manuelle",
          pricing: [
            {
              hours: "Code + 20h",
              price: 1395,
              description: "Forfait standard",
            },
            {
              hours: "Code + 30h",
              price: 2000,
              description: "Forfait renforcé",
            },
          ],
          features: [
            "Passage à l'examen",
            "Code illimité 6 mois",
            "Fournitures incluses",
            "Démarches administratives",
          ],
          href: "/permis-auto/permis-b",
        },
        {
          name: "Permis BEA - Boîte Automatique",
          description: "Formation adaptée aux boîtes automatiques",
          pricing: [
            {
              hours: "Code + 13h",
              price: 950,
              description: "Forfait minimum légal",
            },
            {
              hours: "Code + 20h",
              price: 1395,
              description: "Forfait renforcé",
            },
          ],
          features: [
            "Passage à l'examen",
            "Code illimité 6 mois",
            "Formation simplifiée",
            "Véhicule automatique",
          ],
          href: "/permis-auto/permis-bea",
        },
        {
          name: "Conduite Accompagnée Manuelle",
          description: "Formation précoce dès 15 ans avec accompagnateur",
          pricing: [
            {
              hours: "Code + 20h + suivi",
              price: 1695,
              description: "Formation complète + 2 RDV",
            },
          ],
          features: [
            "Formation initiale 20h",
            "2 Rendez-vous pédagogiques",
            "Suivi personnalisé",
            "Période probatoire réduite",
          ],
          href: "/permis-auto/conduite-accompagnee-manuelle",
        },
        {
          name: "Conduite Accompagnée Automatique",
          description: "AAC sur boîte automatique dès 15 ans",
          pricing: [
            {
              hours: "Code + 13h + suivi",
              price: 1500,
              description: "Forfait AAC 13h",
            },
            {
              hours: "Code + 20h + suivi",
              price: 1800,
              description: "Forfait AAC 20h",
            },
          ],
          features: [
            "Formation initiale",
            "2 Rendez-vous pédagogiques",
            "Suivi personnalisé",
            "Période probatoire réduite",
          ],
          href: "/permis-auto/conduite-accompagnee-automatique",
        },
        {
          name: "Formation AM (BSR)",
          description: "Permis pour cyclomoteurs 50cm³ et voiturettes",
          pricing: [
            {
              hours: "7h de formation",
              price: 280,
              description: "Formation obligatoire",
            },
          ],
          features: [
            "Formation théorique",
            "Formation pratique",
            "Attestation délivrée",
          ],
          href: "/permis-auto/formation-am",
        },
      ],
    },
    {
      title: "Permis Moto",
      icon: <FaMotorcycle />,
      description: "Formations deux-roues et formations 125cm³",
      bgColor: "bg-gray-50",
      offers: [
        {
          name: "Permis A1 (125cm³)",
          description: "Permis pour motos légères jusqu'à 125cm³",
          pricing: [
            {
              hours: "Code + 20h",
              price: 900,
              description: "8h plateau + 12h circulation",
            },
          ],
          features: [
            "Formation plateau",
            "Formation circulation",
            "Code si nécessaire",
          ],
          href: "/permis-moto/permis-125-a1",
        },
        {
          name: "Permis A2",
          description: "Permis pour motos jusqu'à 47,5 chevaux",
          pricing: [
            {
              hours: "Code + 20h",
              price: 900,
              description: "8h plateau + 12h circulation",
            },
          ],
          features: [
            "Formation plateau",
            "Formation circulation",
            "Moto école fournie",
          ],
          href: "/permis-moto/permis-a2",
        },
        {
          name: "Passerelle A2 vers A",
          description: "Formation pour accéder aux motos sans limitation",
          pricing: [
            {
              hours: "7h de formation",
              price: 350,
              description: "Formation pratique uniquement",
            },
          ],
          features: [
            "Formation pratique",
            "Pas d'examen",
            "Certificat délivré",
          ],
          href: "/permis-moto/passerelle-a2-vers-a",
        },
        {
          name: "Formation 125cm³",
          description:
            "Formation obligatoire pour conduire un 125cm³ avec le permis B",
          pricing: [
            {
              hours: "7h de formation",
              price: 350,
              description: "Formation obligatoire",
            },
          ],
          features: [
            "Formation théorique",
            "Formation pratique",
            "Attestation",
          ],
          href: "/permis-moto/formation-125",
        },
      ],
    },
    {
      title: "Formations Accélérées",
      icon: <FaGraduationCap />,
      description: "Formations intensives avec garantie 60 jours maximum",
      bgColor: "bg-white",
      offers: [
        {
          name: "Permis B Accéléré",
          description: "Formation intensive boîte manuelle - Garantie 60 jours",
          pricing: [
            {
              hours: "Code + 20h intensif",
              price: 2150,
              description: "Forfait Accéléré 20h",
            },
            {
              hours: "Code + 30h intensif",
              price: 3000,
              description: "Forfait Accéléré 30h",
            },
          ],
          features: [
            "Garantie 60 jours maximum",
            "Formation 7j/7 possible",
            "Créneaux prioritaires",
            "Planning dédié",
          ],
          href: "/permis-acceleres/permis-b",
        },
        {
          name: "Permis BEA Accéléré",
          description: "Formation intensive boîte automatique - Garantie 60 jours",
          pricing: [
            {
              hours: "Code + 13h intensif",
              price: 1500,
              description: "Forfait Accéléré BEA 13h",
            },
          ],
          features: [
            "Garantie 60 jours maximum",
            "Formation 7j/7 possible",
            "Boîte automatique",
            "Planning dédié",
          ],
          href: "/permis-acceleres/permis-bea",
        },
      ],
    },
    {
      title: "Code de la Route",
      icon: <MdDirectionsBike />,
      description: "Formation théorique seule",
      bgColor: "bg-gray-50",
      offers: [
        {
          name: "Forfait Code",
          description: "Accès salle de code + plateforme en ligne",
          pricing: [
            {
              hours: "6 mois d'accès",
              price: 280,
              description: "Salle + en ligne",
            },
          ],
          features: [
            "Salle de code illimitée",
            "Tests en ligne",
            "Suivi des résultats",
          ],
          href: "/code-de-la-route",
        },
      ],
    },
  ];

  const unitRates: UnitRate[] = [
    {
      service: "Évaluation de départ boîte manuelle",
      price: 30,
      unit: "la séance",
      description: "Évaluation initiale pour déterminer le niveau",
    },
    {
      service: "Évaluation de départ boîte automatique",
      price: 35,
      unit: "la séance",
      description: "Évaluation initiale pour déterminer le niveau",
    },
    {
      service: "Évaluation de départ moto",
      price: 35,
      unit: "la séance",
      description: "Évaluation initiale pour déterminer le niveau",
    },
    {
      service: "Code moto (ETM)",
      price: 30,
      unit: "le passage",
      description: "À prévoir en supplément",
    },
    {
      service: "Leçon de conduite boîte manuelle",
      price: 65,
      unit: "la leçon",
      description: "Leçon standard de conduite",
    },
    {
      service: "Leçon de conduite boîte manuelle accélérée",
      price: 90,
      unit: "la leçon",
      description: "Formation intensive",
    },
    {
      service: "Leçon de conduite boîte automatique",
      price: 70,
      unit: "la leçon",
      description: "Leçon standard de conduite",
    },
    {
      service: "Leçon de conduite boîte automatique accélérée",
      price: 95,
      unit: "la leçon",
      description: "Formation intensive",
    },
    {
      service: "Leçon de conduite en moto plateau",
      price: 65,
      unit: "la leçon",
      description: "Formation sur plateau moto",
    },
    {
      service: "Leçon de conduite en moto circulation",
      price: 70,
      unit: "la leçon",
      description: "Formation en circulation",
    },
    {
      service: "Forfait code 6 mois en salle",
      price: 300,
      unit: "le forfait",
      description: "Accès illimité salle de code 6 mois",
    },
    {
      service: "Forfait code 1 mois en ligne",
      price: 15,
      unit: "le forfait",
      description: "Plateforme en ligne 1 mois",
    },
    {
      service: "Forfait code 3 mois en ligne",
      price: 40,
      unit: "le forfait",
      description: "Plateforme en ligne 3 mois",
    },
    {
      service: "Forfait code 6 mois en ligne",
      price: 60,
      unit: "le forfait",
      description: "Plateforme en ligne 6 mois",
    },
    {
      service: "Livret de code (A, AM, B)",
      price: 15,
      unit: "le livret",
      description: "Support pédagogique",
    },
    {
      service: "Livret d'apprentissage (A, AAC, CS, B et AM)",
      price: 15,
      unit: "le livret",
      description: "Support pédagogique",
    },
    {
      service: "Cours thématique à l'unité sans enseignant",
      price: 10,
      unit: "le cours",
      description: "Séance autonome",
    },
    {
      service: "Cours thématique à l'unité avec enseignant",
      price: 15,
      unit: "le cours",
      description: "Séance accompagnée",
    },
    {
      service: "1er RDV pédagogie théorique et pratique à 1500km",
      price: 180,
      unit: "le RDV",
      description: "Conduite accompagnée",
    },
    {
      service: "2e RDV pédagogie théorique et pratique à 3000km",
      price: 180,
      unit: "le RDV",
      description: "Conduite accompagnée",
    },
    {
      service: "Présentation examen plateau (A2)",
      price: 65,
      unit: "la présentation",
      description: "Épreuve moto",
    },
    {
      service: "Présentation examen circulation (A2)",
      price: 65,
      unit: "la présentation",
      description: "Épreuve moto",
    },
    {
      service: "Frais accompagnement examen pratique B",
      price: 65,
      unit: "la présentation",
      description: "Véhicule et moniteur inclus",
    },
    {
      service: "Frais accompagnement examen pratique BA",
      price: 70,
      unit: "la présentation",
      description: "Véhicule automatique et moniteur inclus",
    },
    {
      service: "Frais de gestion",
      price: 210,
      unit: "le dossier",
      description: "Frais administratifs",
    },
    {
      service: "Frais de gestion suite à un échec de l'examen pratique B",
      price: 200,
      unit: "le dossier",
      description: "Frais de représentation",
    },
    {
      service:
        "Frais de gestion suite à un échec de l'examen pratique circulation A",
      price: 200,
      unit: "le dossier",
      description: "Frais de représentation moto",
    },
    {
      service:
        "Frais de gestion suite à un échec de l'examen pratique plateau A",
      price: 200,
      unit: "le dossier",
      description: "Frais de représentation moto",
    },
    {
      service: "Frais de relance suite à un chèque impayé",
      price: 5,
      unit: "la relance",
      description: "Frais de traitement",
    },
    {
      service: "Prolongation de contrat",
      price: 300,
      unit: "la prolongation",
      description: "Extension de formation",
    },
    {
      service: "Fabrication de permis",
      price: 30,
      unit: "le permis",
      description: "Frais de production",
    },
    {
      service: "Changement de formation avant ou après examen",
      price: 150,
      unit: "le changement",
      description: "Frais de modification",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section classname="bg-beige py-10 w-full min-h-[calc(100vh-118px)] flex flex-col justify-center gap-16 bg-hero-pattern bg-no-repeat bg-right">
        <div className="flex flex-col xl:flex-row gap-16 items-center justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="font-sans font-extrabold text-[48px] md:text-[70px]">
              Toutes nos <span className="text-secondary">offres</span>
            </h1>
            <p className="font-medium w-fit md:w-[550px] text-lg leading-relaxed">
              Découvrez l'ensemble de nos forfaits pour tous types de permis et
              formations. Des tarifs transparents et adaptés à vos besoins, avec
              des formations de qualité dispensées par nos moniteurs
              expérimentés.
            </p>
            <CTA className="w-fit" href="#categories">
              {" "}
              Voir les offres
            </CTA>
          </div>

          <div className="hidden xl:block relative py-8">
            <div className=" bg-gradient-to-br from-secondary/20 via-secondary/10 to-primary/20 rounded-3xl p-8 border-2 border-primary/20">
              <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                <div className="space-y-3">
                  <div className="text-4xl font-extrabold text-primary">
                    4 catégories
                  </div>
                  <div className="text-xl font-medium text-gray-700">
                    de formations disponibles
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">
                      Auto
                    </div>
                    <div className="text-sm text-gray-600">
                      Permis B, BEA, AAC, AM (Voiture SP)
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">
                      Moto
                    </div>
                    <div className="text-sm text-gray-600">
                      A1, A2, 125cm³, AM (BSR)
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">
                      Accéléré
                    </div>
                    <div className="text-sm text-gray-600">
                      Formation intensive
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-primary/10">
                    <div className="text-2xl font-bold text-primary mb-1">
                      Code
                    </div>
                    <div className="text-sm text-gray-600">
                      Formation théorique
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 font-medium">
                  ✓ Financement CPF • ✓ Paiement échelonné
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Categories Section */}
      <div id="categories">
        {categories.map((category, categoryIndex) => (
          <Section key={categoryIndex} classname={`py-40 ${category.bgColor}`}>
            {/* Category Header */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-16 text-center">
              {category.title}
            </h2>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.offers.map((offer, offerIndex) => (
                <div
                  key={offerIndex}
                  className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200 hover:border-secondary transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {offer.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {offer.description}
                    </p>

                    {/* Pricing Options */}
                    <div className="space-y-3">
                      {offer.pricing.map((price, priceIndex) => (
                        <div
                          key={priceIndex}
                          className="p-3 bg-beige/20 rounded-lg"
                        >
                          <div className="text-3xl font-bold text-primary mb-1">
                            {price.price}€
                          </div>
                          <div className="text-sm text-gray-600">
                            {price.hours}
                          </div>
                          {price.description && (
                            <div className="text-xs text-gray-500 mt-1">
                              {price.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={offer.href}
                    className="w-full py-3 rounded-lg font-semibold bg-secondary text-white hover:bg-secondary/90 transition-colors text-center block"
                  >
                    En savoir plus
                  </Link>
                </div>
              ))}
            </div>
          </Section>
        ))}
      </div>

      {/* Unit Rates Section */}
      <Section classname="bg-beige/30 py-40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-16 text-center">
            Grille tarifaire unitaire
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="space-y-4">
              {unitRates.map((rate, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0"
                >
                  <div>
                    <span className="text-gray-800 font-medium">
                      {rate.service}
                    </span>
                    {rate.description && (
                      <p className="text-gray-600 text-sm">
                        {rate.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary text-lg">
                      {rate.price === 0 ? "Gratuit" : `${rate.price}€`}
                    </span>
                    <p className="text-gray-500 text-sm">{rate.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Informations importantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-beige/20 rounded-xl border border-secondary/20">
                <div className="bg-secondary/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  Tous les tarifs sont TTC et peuvent être soumis à évolution
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-beige/20 rounded-xl border border-secondary/20">
                <div className="bg-secondary/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  Paiement en espèces, chèque ou carte bancaire
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-beige/20 rounded-xl border border-secondary/20">
                <div className="bg-secondary/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  Financement CPF disponible selon éligibilité
                </p>
              </div>
              <div className="flex items-start gap-4 p-4 bg-beige/20 rounded-xl border border-secondary/20">
                <div className="bg-secondary/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium text-sm">
                  Évaluation de départ obligatoire et sans engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section classname="bg-primary py-40 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-6">
          Besoin d'un conseil personnalisé ?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Contactez-nous pour une évaluation gratuite et un devis adapté à vos
          besoins
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="tel:0160081911"
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            01.60.08.19.11
          </a>
          <a
            href="mailto:contact@acces-permis77.fr"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </Section>
    </div>
  );
}
