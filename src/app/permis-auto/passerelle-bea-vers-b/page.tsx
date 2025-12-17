import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
import DescriptionSection from "@/components/Pages/DescriptionSection";
import HeroSection from "@/components/Pages/HeroSection";
import PricingSection from "@/components/Pages/PricingSection";
import { Metadata } from "next";
import { FaCar, FaClock, FaShieldAlt, FaUserGraduate } from "react-icons/fa";
import {
  MdDateRange,
  MdDirectionsCar,
  MdLockOpen,
  MdStart,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Passerelle BEA vers B - Formation complémentaire - Accès Permis 77",
  description:
    "Complétez votre permis BEA avec la passerelle vers le permis B. Apprenez la conduite manuelle avec Accès Permis 77.",
};

export default function PasserelleBEAversB() {
  const conditions = [
    {
      label: "Prérequis",
      value: "Permis BEA",
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
      value: "Conduite manuelle",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Formation courte et efficace",
      description:
        "Seulement 7 heures de formation pour maîtriser la conduite manuelle et l'embrayage",
      icon: <FaClock />,
    },
    {
      title: "Moniteurs spécialisés",
      description:
        "Formateurs expérimentés dans l'apprentissage de la conduite manuelle pour titulaires BEA",
      icon: <FaUserGraduate />,
    },
    {
      title: "Véhicules adaptés",
      description:
        "Véhicules école manuels récents avec double commande pour un apprentissage sécurisé",
      icon: <FaCar />,
    },
    {
      title: "Pas d'examen",
      description:
        "Validation par formation pratique uniquement, aucun nouvel examen à passer",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Passerelle BEA vers B",
      price: "399€",
      duration: "7 heures de formation",
      features: [
        "Fabrication permis B inclus",
        "7 heures de formation obligatoires",
        "Apprentissage de l'embrayage",
        "Technique de passage des vitesses",
        "Conduite en circulation",
        "Manœuvres spécifiques",
        "Attestation de formation délivrée",
      ],
      highlighted: true,
      badge: "Formation complète",
    },
  ];

  const includedItems = [
    {
      label: "Fabrication du permis",
      included: true,
    },
    {
      label: "Formation pratique complète",
      included: true,
      description: "7 heures de formation manuelle",
    },
    {
      label: "Apprentissage embrayage",
      included: true,
      description: "Maîtrise du point de patinage",
    },
    {
      label: "Passage des vitesses",
      included: true,
      description: "Technique et synchronisation",
    },
    {
      label: "Conduite en circulation",
      included: true,
      description: "Application en situation réelle",
    },
    {
      label: "Attestation de formation",
      included: true,
      description: "Document officiel délivré",
    },
  ];

  const paymentOptions = [
    {
      hours: "Passerelle BEA vers B",
      schedule: [
        {
          step: "À l'inscription",
          amount: "399€",
          description: "Paiement unique pour la formation complète",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Prérequis : être titulaire du permis BEA",
    "Aucune infraction entraînant une perte de points",
    "Formation possible en 1 journée ou répartie selon vos disponibilités",
    "Aucun examen à passer, validation par formation pratique uniquement",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Passerelle BEA vers B"
        subtitle="Formation Complémentaire Manuelle"
        description="Complétez votre permis BEA en apprenant la conduite manuelle. Une formation courte de 7 heures pour maîtriser l'embrayage et accéder à tous les véhicules."
        icon={<FaCar />}
        pricing={[
          {
            title: "Passerelle BEA vers B",
            price: 399,
            hours: "7h de formation",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="passerelle BEA vers B"
        whatIsIt="La passerelle BEA vers B est une formation complémentaire de 7 heures qui permet aux titulaires du permis BEA (automatique) d'apprendre la conduite manuelle. Cette formation se concentre sur la maîtrise de l'embrayage, le passage des vitesses et les spécificités de la conduite avec boîte manuelle, sans nécessiter de nouvel examen."
        whatIsItFor="Cette passerelle sert à élargir vos possibilités de conduite en vous donnant accès à tous les véhicules, qu'ils soient automatiques ou manuels. Particulièrement utile pour l'emploi, la location de véhicules ou l'achat d'une voiture manuelle, elle vous offre une flexibilité totale dans vos choix de mobilité."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir notre passerelle BEA vers B ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Passerelle BEA vers B"
        title="Notre formation passerelle"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à apprendre la conduite manuelle ?"
        description="Inscrivez-vous dès aujourd'hui et complétez votre formation avec nos moniteurs spécialisés"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Vérifier mon éligibilité", variant: "secondary" },
        ]}
      />
    </div>
  );
}
