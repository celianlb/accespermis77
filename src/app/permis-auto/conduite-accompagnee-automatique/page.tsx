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
  title: "Conduite Accompagnée Automatique - Accès Permis 77",
  description:
    "Formation conduite accompagnée sur boîte automatique dès 15 ans. Apprentissage facilité avec Accès Permis 77.",
};

export default function ConduiteAccompagneeAutomatique() {
  const conditions = [
    {
      label: "Âge minimum inscription",
      value: "15 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Passage de l'examen",
      value: "17 ans",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Validité du code",
      value: "5 ans",
      icon: <MdLockOpen />,
    },
    {
      label: "Formation pratique",
      value: "13 leçons minimum + accompagnement + passage examen",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Apprentissage dès 15 ans",
      description:
        "Commencez votre formation tôt avec la simplicité de la boîte automatique et un accompagnateur qualifié",
      icon: <FaCar />,
    },
    {
      title: "Meilleur taux de réussite",
      description:
        "75% de réussite au premier passage contre 55% en formation classique grâce à l'expérience acquise",
      icon: <FaUserGraduate />,
    },
    {
      title: "Période probatoire réduite",
      description:
        "Seulement 2 ans de permis probatoire au lieu de 3 ans, récupération plus rapide des points",
      icon: <FaClock />,
    },
    {
      title: "Avantages assurance",
      description:
        "Réductions significatives sur les assurances auto grâce à la formation AAC reconnue",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Forfait AAC 13h",
      price: "1500€",
      duration: "Code + 13 leçons + suivi",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "13 leçons de conduite automatique",
        "2 rendez-vous pédagogiques (1500km et 2500km)",
        "Présentation à l'examen",
        "Suivi durant toute la période d'accompagnement",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait AAC 20h",
      price: "1800€",
      duration: "Code + 20 leçons + suivi",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite automatique",
        "2 rendez-vous pédagogiques (1500km et 2500km)",
        "Présentation à l'examen",
        "Suivi durant toute la période d'accompagnement",
        "Suivi renforcé personnalisé",
      ],
    },
  ];

  const includedItems = [
    {
      label: "Accompagnement à l’examen.",
      included: true,
    },
    {
      label: "Enregistrement en ligne et frais de gestion",
      included: true,
      description: "Toutes les démarches administratives",
    },
    {
      label: "Code en salle illimité",
      included: true,
      description: "Pendant 6 mois",
    },
    {
      label: "Livre de code et supports pédagogiques",
      included: true,
      description: "Fiche de suivi + livret d'apprentissage AAC",
    },
    {
      label: "Leçons de conduite automatique",
      included: true,
      description: "13 ou 20 selon le forfait choisi",
    },
    {
      label: "2 rendez-vous pédagogiques",
      included: true,
      description: "RDV à 1500km et 2500km (2h chacun)",
    },
    {
      label: "Évaluation de départ",
      price: "35€",
    },
  ];

  const paymentOptions = [
    {
      hours: "Forfait AAC 13h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "375€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "375€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 1ère leçon",
          amount: "375€",
          description: "Troisième versement en cours de formation",
        },
        {
          step: "À la 6ème leçon",
          amount: "375€",
          description: "Solde à régler en fin de formation",
        },
      ],
    },
    {
      hours: "Forfait AAC 20h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "450€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "450€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 1ère leçon",
          amount: "450€",
          description: "Troisième versement en cours de formation",
        },
        {
          step: "À la 6ème leçon",
          amount: "450€",
          description: "Solde à régler en cours de formation",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Leçons supplémentaires disponibles à l'unité (70€)",
    "Taux de réussite exceptionnel de 95% au premier passage (vs 76% formation classique)",
    "Période probatoire réduite à 2 ans au lieu de 3 ans",
    "Accompagnement personnalisé durant toute la période de conduite accompagnée",
    "Réductions sur les assurances auto grâce à la formation AAC",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Conduite Accompagnée"
        subtitle="Formation AAC Automatique"
        description="Débutez votre apprentissage dès 15 ans avec notre formation conduite accompagnée automatique. Une expérience progressive et simplifiée pour maîtriser la conduite en toute sécurité."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait AAC 13h",
            price: 1500,
            hours: "Code + 13 leçons + suivi",
          },
          {
            title: "Forfait AAC 20h",
            price: 1800,
            hours: "Code + 20 leçons + suivi",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="conduite accompagnée automatique"
        whatIsIt="La conduite accompagnée automatique (AAC) combine les avantages de l'apprentissage anticipé dès 15 ans avec la simplicité de la boîte automatique. Cette formation permet d'acquérir une expérience de conduite de 3000 km minimum avec un accompagnateur, sans la complexité de la gestion d'embrayage et des changements de vitesses."
        whatIsItFor="Cette formule sert à bénéficier du meilleur des deux mondes : l'expérience enrichissante de la conduite accompagnée et la facilité de l'automatique. Idéale pour une approche sereine et progressive de la conduite, elle permet de se concentrer sur la sécurité et les règles de circulation tout en développant ses réflexes de conducteur."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Les avantages de la conduite accompagnée"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Conduite accompagnée automatique"
        title="Nos forfaits conduite accompagnée automatique"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à commencer l'AAC automatique ?"
        description="Inscrivez-vous dès aujourd'hui et bénéficiez d'une formation progressive et simplifiée"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}
