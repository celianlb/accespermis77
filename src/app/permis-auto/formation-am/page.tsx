import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
import DescriptionSection from "@/components/Pages/DescriptionSection";
import HeroSection from "@/components/Pages/HeroSection";
import PricingSection from "@/components/Pages/PricingSection";
import { Metadata } from "next";
import {
  FaClock,
  FaMotorcycle,
  FaShieldAlt,
  FaUserGraduate,
} from "react-icons/fa";
import {
  MdDateRange,
  MdDirectionsCar,
  MdLockOpen,
  MdStart,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Formation AM (BSR) - Cyclomoteur et Quadricycle - Accès Permis 77",
  description:
    "Formation AM obligatoire pour conduire cyclomoteurs et quadricycles légers. BSR avec Accès Permis 77.",
};

export default function FormationAM() {
  const conditions = [
    {
      label: "Âge minimum",
      value: "14 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Formation obligatoire",
      value: "8 heures",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Validité",
      value: "Illimitée",
      icon: <MdLockOpen />,
    },
    {
      label: "Attestation",
      value: "Délivrée en fin de formation",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Formation complète",
      description:
        "8 heures de formation dont 2h de théorie et 6h de pratique pour maîtriser cyclomoteurs et quadricycles",
      icon: <FaMotorcycle />,
    },
    {
      title: "Moniteurs spécialisés",
      description:
        "Équipe pédagogique expérimentée dans la formation AM et la conduite de deux-roues",
      icon: <FaUserGraduate />,
    },
    {
      title: "Formation en 1 journée",
      description:
        "Stage intensif d'une journée pour obtenir rapidement votre attestation AM",
      icon: <FaClock />,
    },
    {
      title: "Sécurité prioritaire",
      description:
        "Apprentissage des règles de sécurité et des équipements de protection obligatoires",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Formation AM",
      price: "350€",
      duration: "8 heures de formation",
      features: [
        "Fabrication du permis de conduire",
        "Frais de gestion inclus",
        "8h de formation (2h théorie + 6h pratique)",
        "3 mois d'accès offert à la salle de code",
        "Pack AM complet (livret + code AM)",
        "Attestation de suivi délivrée",
        "Frais ANTS inclus",
      ],
      highlighted: true,
      badge: "Formule unique",
    },
  ];

  const includedItems = [
    {
      label: "Frais de gestion",
      included: true,
      description: "Toutes les démarches administratives",
    },
    {
      label: "Formation théorique",
      included: true,
      description: "2 heures de théorie",
    },
    {
      label: "Formation pratique",
      included: true,
      description:
        "6 heures de pratique (2h hors circulation + 4h en circulation)",
    },
    {
      label: "Accès salle de code",
      included: true,
      description: "3 mois offerts",
    },
    {
      label: "Pack AM complet",
      included: true,
      description: "1 livret de formation AM + 1 code AM",
    },
    {
      label: "Attestation de suivi",
      included: true,
      description: "Délivrée en fin de formation",
    },
    {
      label: "Frais ANTS",
      included: true,
      description: "Frais administratifs inclus",
    },
  ];

  const paymentOptions = [
    {
      hours: "Formation AM",
      schedule: [
        {
          step: "À l'inscription",
          amount: "350€",
          description: "Paiement unique pour la formation complète",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Formation obligatoire pour conduire un cyclomoteur ou quadricycle léger dès 14 ans",
    "Aucun examen final : validation par assiduité et participation active",
    "Attestation AM valable à vie, pas de renouvellement nécessaire",
    "Formation théorique et pratique adaptée aux spécificités des deux-roues",
    "Possibilité de formation en groupe ou individuelle selon disponibilités",
    "Véhicules école récents et équipés pour la sécurité",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Formation AM"
        subtitle="Cyclomoteurs et Quadricycles"
        description="Obtenez votre attestation AM (ex-BSR) dès 14 ans pour conduire cyclomoteurs et quadricycles légers. Formation complète en une journée avec nos moniteurs spécialisés."
        icon={<FaMotorcycle />}
        pricing={[
          {
            title: "Formation AM",
            price: 350,
            hours: "8h de formation complète",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="formation AM"
        whatIsIt="La formation AM (anciennement BSR) est une formation obligatoire de 8 heures pour conduire un cyclomoteur de 50 cm³ ou un quadricycle léger dès 14 ans. Elle comprend une partie théorique sur la sécurité routière et une formation pratique de conduite, sans examen final mais avec délivrance d'une attestation de suivi."
        whatIsItFor="La formation AM sert à acquérir les bases de la conduite d'un deux-roues motorisé ou d'un quadricycle en toute sécurité. Elle permet aux jeunes d'accéder à une première mobilité autonome pour les trajets scolaires ou de loisirs, tout en développant les réflexes et connaissances essentiels avant d'évoluer vers des véhicules plus puissants."
        whatIsItImage="/img/permis/scooter.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir notre formation AM ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Formation AM"
        title="Notre formation AM"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à passer votre formation AM ?"
        description="Inscrivez-vous dès aujourd'hui et obtenez votre attestation AM rapidement"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Voir le planning", variant: "secondary" },
        ]}
      />
    </div>
  );
}
