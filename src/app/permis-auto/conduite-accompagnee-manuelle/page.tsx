import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
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
  title: "Conduite Accompagnée Manuelle (AAC) - Accès Permis 77",
  description: "Formation conduite accompagnée manuelle dès 15 ans. Apprentissage anticipé de la conduite avec Accès Permis 77.",
};

export default function ConduiteAccompagneeManuelle() {
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
      value: "20 leçons + accompagnement",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Apprentissage dès 15 ans",
      description:
        "Commencez votre formation tôt et gagnez de l'expérience avec un accompagnateur qualifié",
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
      name: "Forfait AAC 20h",
      price: "1590€",
      duration: "Code + 20 leçons + suivi",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite manuelle",
        "2 rendez-vous pédagogiques (1500km et 2500km)",
        "Présentation aux examens",
        "Suivi durant toute la période d'accompagnement",
      ],
      highlighted: true,
      badge: "Formule unique",
    },
  ];

  const includedItems = [
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
      label: "Leçons de conduite manuelle",
      included: true,
      description: "20 leçons de formation initiale",
    },
    {
      label: "2 rendez-vous pédagogiques",
      included: true,
      description: "RDV à 1500km et 2500km (2h chacun)",
    },
    {
      label: "Inscription théorique",
      price: "30€",
    },
  ];

  const paymentOptions = [
    {
      hours: "Forfait AAC 20h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "530€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "540€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 10ème leçon",
          amount: "530€",
          description: "Solde à régler en cours de formation",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Évaluation de départ gratuite pour évaluer précisément vos besoins en formation",
    "Leçons supplémentaires disponibles à l'unité (45€) ou par forfait de 5 leçons",
    "Taux de réussite exceptionnel de 75% au premier passage (vs 55% formation classique)",
    "Période probatoire réduite à 2 ans au lieu de 3 ans",
    "Accompagnement personnalisé durant toute la période de conduite accompagnée",
    "Réductions sur les assurances auto grâce à la formation AAC"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Conduite Accompagnée"
        subtitle="Formation AAC Manuelle"
        description="Débutez votre apprentissage dès 15 ans avec notre formation conduite accompagnée. Une expérience progressive et encadrée pour maîtriser la conduite en toute sécurité."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait AAC 20h",
            price: 1590,
            hours: "Code + 20 leçons + suivi"
          }
        ]}
        conditions={conditions}
      />

      <AdvantagesSection
        title="Les avantages de la conduite accompagnée"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Notre forfait conduite accompagnée"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à commencer l'AAC ?"
        description="Inscrivez-vous dès aujourd'hui et bénéficiez d'une formation progressive et encadrée"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}