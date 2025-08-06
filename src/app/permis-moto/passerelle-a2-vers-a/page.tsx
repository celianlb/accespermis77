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
  title: "Passerelle A2 vers A - Formation moto toute puissance - Accès Permis 77",
  description: "Évoluez du permis A2 vers le permis A. Formation passerelle pour conduire toutes les motos avec Accès Permis 77.",
};

export default function PasserelleA2versA() {
  const conditions = [
    {
      label: "Prérequis",
      value: "Permis A2 depuis +2 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Formation obligatoire",
      value: "7 heures",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Nouvel examen",
      value: "Aucun",
      icon: <MdLockOpen />,
    },
    {
      label: "Accès",
      value: "Motos toute puissance",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Toute puissance accessible",
      description:
        "Conduisez toutes les motocyclettes sans limitation de puissance ou de cylindrée",
      icon: <FaMotorcycle />,
    },
    {
      title: "Formation courte",
      description:
        "Seulement 7 heures de formation pour accéder aux plus grosses cylindrées",
      icon: <FaClock />,
    },
    {
      title: "Pas d'examen",
      description:
        "Formation pratique uniquement, aucun examen théorique ou pratique à repasser",
      icon: <FaUserGraduate />,
    },
    {
      title: "Progression naturelle",
      description:
        "Évolution logique après 2 ans d'expérience avec le permis A2",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Formation Passerelle A2 vers A",
      price: "399€",
      duration: "7 heures de formation",
      features: [
        "Fournitures pédagogiques incluses",
        "Oreillettes de communication",
        "Talkie-walkie fourni",
        "Gilet jaune de sécurité",
        "7 heures de formation pratique",
        "Fabrication du permis de conduire",
      ],
      highlighted: true,
      badge: "Formation complète",
    },
  ];

  const includedItems = [
    {
      label: "Fournitures pédagogiques",
      included: true,
      description: "Équipements de communication et sécurité",
    },
    {
      label: "Oreillettes",
      included: true,
      description: "Communication avec le moniteur",
    },
    {
      label: "Talkie-walkie",
      included: true,
      description: "Équipement de communication fourni",
    },
    {
      label: "Gilet jaune",
      included: true,
      description: "Gilet de sécurité obligatoire",
    },
    {
      label: "Formation pratique",
      included: true,
      description: "7 heures de formation complète",
    },
    {
      label: "Fabrication du permis",
      included: true,
      description: "Nouveau permis A délivré",
    },
  ];

  const paymentOptions = [
    {
      hours: "Formation Passerelle",
      schedule: [
        {
          step: "À l'inscription",
          amount: "399€",
          description: "Paiement unique pour la formation complète",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Formation obligatoire pour passer du permis A2 au permis A",
    "Prérequis : être titulaire du permis A2 depuis plus de 2 ans",
    "Aucun examen à repasser, validation par formation pratique",
    "Formation sur motos de grosse cylindrée mises à disposition",
    "Attestation de formation délivrée en fin de stage",
    "Nouveau permis A fabrication incluse dans le tarif"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Passerelle A2 vers A"
        subtitle="Formation Moto Toute Puissance"
        description="Évoluez du permis A2 vers le permis A en 7 heures de formation. Accédez à toutes les motocyclettes sans limitation de puissance."
        icon={<FaMotorcycle />}
        pricing={[
          {
            title: "Formation Passerelle",
            price: 399,
            hours: "7h de formation"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="passerelle A2 vers A"
        whatIsIt="La passerelle A2 vers A est une formation de 7 heures qui permet aux titulaires du permis A2 depuis au moins 2 ans d'accéder au permis A sans passer d'examen. Cette formation pratique se concentre sur la maîtrise des motos de forte puissance et les techniques de conduite avancées pour les véhicules sans limitation."
        whatIsItFor="Cette passerelle sert à évoluer vers la catégorie supérieure du permis moto, donnant accès à toutes les motocyclettes sans limitation de puissance ou de cylindrée. Elle permet de découvrir de nouveaux horizons avec des motos sportives, touring ou custom haut de gamme, tout en renforçant les compétences de conduite pour une pratique sécurisée."
        whatIsItImage="/img/permis/moto.jpg"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi faire la passerelle vers le permis A ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Notre formation passerelle A2 vers A"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à passer au permis A ?"
        description="Inscrivez-vous dès aujourd'hui et accédez à toutes les motocyclettes sans limitation"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Voir le planning", variant: "secondary" },
        ]}
      />
    </div>
  );
}