import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
import DescriptionSection from "@/components/Pages/DescriptionSection";
import HeroSection from "@/components/Pages/HeroSection";
import PricingSection from "@/components/Pages/PricingSection";
import { Metadata } from "next";
import { FaMotorcycle, FaClock, FaShieldAlt, FaUserGraduate } from "react-icons/fa";
import {
  MdDateRange,
  MdDirectionsCar,
  MdLockOpen,
  MdStart,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Formation 125 - Formation obligatoire permis B - Accès Permis 77",
  description: "Formation 125cc obligatoire pour conduire un scooter ou moto 125 avec le permis B. Formation 7h avec Accès Permis 77.",
};

export default function Formation125() {
  const conditions = [
    {
      label: "Âge minimum scooters",
      value: "20 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Âge minimum tricycles",
      value: "21 ans",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Prérequis",
      value: "2 ans de permis B",
      icon: <MdLockOpen />,
    },
    {
      label: "Examen",
      value: "Aucun",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Accès aux 125cc",
      description:
        "Conduisez scooters et motos 125cc jusqu'à 11kW ainsi que tricycles +125cc avec votre permis B",
      icon: <FaMotorcycle />,
    },
    {
      title: "Formation courte",
      description:
        "Seulement 7 heures de formation possible en 1 journée, approche théorique et pratique",
      icon: <FaClock />,
    },
    {
      title: "Pas d'examen",
      description:
        "Formation pratique uniquement, aucun examen théorique ou pratique à passer",
      icon: <FaUserGraduate />,
    },
    {
      title: "Sécurité renforcée",
      description:
        "Apprentissage des spécificités deux-roues pour une conduite en toute sécurité",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Formation 125",
      price: "400€",
      duration: "7 heures de formation",
      features: [
        "7h de formation (possible en 1 journée)",
        "Approche théorique et pratique",
        "3h de conduite en circulation",
        "4h de conduite hors circulation",
        "Carte 125 délivrée",
        "Frais de gestion inclus",
      ],
      highlighted: true,
      badge: "Formation complète",
    },
  ];

  const includedItems = [
    {
      label: "Formation complète",
      included: true,
      description: "7 heures de formation théorique et pratique",
    },
    {
      label: "Formation hors circulation",
      included: true,
      description: "4 heures de maniabilité et prise en main",
    },
    {
      label: "Formation en circulation",
      included: true,
      description: "3 heures de conduite en situation réelle",
    },
    {
      label: "Carte 125",
      included: true,
      description: "Attestation officielle délivrée",
    },
    {
      label: "Frais de gestion",
      included: true,
      description: "Toutes les démarches administratives",
    },
  ];

  const paymentOptions = [
    {
      hours: "Formation 125",
      schedule: [
        {
          step: "À l'inscription",
          amount: "400€",
          description: "Paiement unique pour la formation complète",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Formation obligatoire dès 20 ans pour les scooters jusqu'à 125cm³",
    "Formation obligatoire dès 21 ans pour les tricycles +125cm³",
    "Prérequis : être titulaire du permis B depuis au moins 2 ans",
    "Formation possible en 1 journée avec approche théorique et pratique",
    "Aucun examen à passer, validation par formation pratique",
    "Carte 125 valable à vie, aucun renouvellement nécessaire"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Formation 125"
        subtitle="Complément Permis B"
        description="Accédez aux scooters et motos 125cc avec votre permis B. Formation obligatoire de 7 heures pour conduire en toute sécurité."
        icon={<FaMotorcycle />}
        pricing={[
          {
            title: "Formation 125",
            price: 400,
            hours: "7h de formation"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="formation 125"
        whatIsIt="La formation 125 est un complément obligatoire au permis B qui vous permet de conduire des scooters et motos jusqu'à 125cc ainsi que des tricycles de plus de 125cc. Cette formation de 7 heures combine théorie et pratique, sans examen final, pour vous préparer aux spécificités de la conduite deux-roues."
        whatIsItFor="La formation 125 sert à vous offrir une mobilité urbaine optimale et économique. Plus agile qu'une voiture, plus économique en carburant et plus facile à garer, le 125cc devient votre atout pour les déplacements quotidiens, éviter les embouteillages et accéder facilement aux centres-villes."
        whatIsItImage="/img/permis/scooter.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi suivre notre formation 125 ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Notre formation 125"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à suivre votre formation 125 ?"
        description="Inscrivez-vous dès aujourd'hui et accédez aux deux-roues 125cc en toute sécurité"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Vérifier mes dispenses", variant: "secondary" },
        ]}
      />
    </div>
  );
}