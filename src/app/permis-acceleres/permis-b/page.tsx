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
  title: "Permis B Accéléré - Formation intensive - Accès Permis 77",
  description: "Obtenez votre permis B rapidement avec notre formation accélérée. Stage intensif permis B en Seine-et-Marne avec Accès Permis 77.",
};

export default function PermisBAccelere() {
  const conditions = [
    {
      label: "Âge minimum inscription",
      value: "16 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Passage de l'examen",
      value: "17 ans",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Délai maximum garanti",
      value: "60 jours",
      icon: <MdLockOpen />,
    },
    {
      label: "Formation pratique",
      value: "20 leçons minimum",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Permis en 60 jours maximum",
      description:
        "Garantie 60 jours maximum (examen compris) sinon remboursement de la différence par l'auto-école",
      icon: <FaCar />,
    },
    {
      title: "Formation intensive",
      description:
        "Rythme accéléré avec disponibilité prioritaire des créneaux et suivi personnalisé renforcé",
      icon: <FaUserGraduate />,
    },
    {
      title: "Planning dédié",
      description:
        "Créneaux réservés et flexibilité horaire pour une progression optimale et rapide",
      icon: <FaClock />,
    },
    {
      title: "Taux de réussite élevé",
      description:
        "Moniteurs spécialisés en formation accélérée pour maximiser vos chances de réussite",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Forfait Accéléré 20h",
      price: "1846€",
      duration: "Code + 20 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite manuelle",
        "Présentation aux examens",
        "Garantie 60 jours maximum",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait Accéléré 30h",
      price: "2376€",
      duration: "Code + 30 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "30 leçons de conduite manuelle",
        "Présentation aux examens",
        "Suivi renforcé personnalisé",
        "Garantie 60 jours maximum",
      ],
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
      description: "Fiche de suivi + livret d'apprentissage",
    },
    {
      label: "Leçons de conduite",
      included: true,
      description: "20 ou 30 selon le forfait choisi",
    },
    {
      label: "Présentation aux examens",
      included: true,
      description: "Code et conduite inclus",
    },
    {
      label: "Garantie 60 jours",
      included: true,
      description: "Remboursement si dépassement",
    },
    {
      label: "Inscription théorique",
      price: "30€",
    },
  ];

  const paymentOptions = [
    {
      hours: "Forfait Accéléré 20h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "900€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "À la 10ème leçon",
          amount: "946€",
          description: "Solde à régler en cours de formation",
        },
      ]
    },
    {
      hours: "Forfait Accéléré 30h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "1188€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "À la 15ème leçon",
          amount: "1188€",
          description: "Solde à régler en cours de formation",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Garantie 60 jours maximum (examen compris) sinon remboursement de la différence",
    "Formation intensive avec créneaux prioritaires et planning dédié",
    "Évaluation de départ gratuite pour évaluer précisément vos besoins",
    "Leçons supplémentaires disponibles à l'unité (45€) ou par forfait de 5 leçons",
    "Taux de réussite exceptionnel de 88% au premier passage en formation accélérée",
    "Moniteurs spécialisés en formation intensive pour une progression optimale"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis B Accéléré"
        subtitle="Formation Intensive"
        description="Obtenez votre permis B en 60 jours maximum avec notre formation accélérée. Une approche intensive et personnalisée pour une réussite rapide garantie."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait Accéléré 20h",
            price: 1846,
            hours: "Code + 20 leçons"
          },
          {
            title: "Forfait Accéléré 30h", 
            price: 2376,
            hours: "Code + 30 leçons"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis B accéléré"
        whatIsIt="Le permis B accéléré est une formation intensive qui vous permet d'obtenir votre permis de conduire en 60 jours maximum. Cette formule concentre l'apprentissage du code et de la conduite sur une période réduite, avec des créneaux prioritaires et un suivi personnalisé renforcé pour garantir votre réussite rapide."
        whatIsItFor="Le permis B accéléré sert à répondre à vos besoins urgents de mobilité. Idéal pour un nouveau travail, un déménagement, ou simplement pour gagner du temps, cette formation vous permet d'accéder rapidement à l'autonomie tout en bénéficiant d'une garantie de délai. C'est la solution parfaite quand chaque jour compte."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir le permis B accéléré ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Nos forfaits permis B accéléré"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à obtenir votre permis rapidement ?"
        description="Inscrivez-vous dès aujourd'hui et obtenez votre permis B en 60 jours maximum avec nos moniteurs spécialisés"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}