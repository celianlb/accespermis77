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
  title: "Permis BEA Accéléré - Formation intensive automatique - Accès Permis 77",
  description: "Obtenez votre permis BEA rapidement avec notre formation accélérée. Stage intensif boîte automatique avec Accès Permis 77.",
};

export default function PermisBEAAccelere() {
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
      value: "13 leçons minimum",
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
      title: "Formation intensive automatique",
      description:
        "Rythme accéléré avec la simplicité de la boîte automatique, sans gestion d'embrayage",
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
        "Moniteurs spécialisés en formation accélérée automatique pour maximiser vos chances",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Forfait Accéléré BEA 20h",
      price: "1846€",
      duration: "Code + 20 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite automatique",
        "Présentation aux examens",
        "Garantie 60 jours maximum",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait Accéléré BEA 30h",
      price: "2376€",
      duration: "Code + 30 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "30 leçons de conduite automatique",
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
      label: "Leçons de conduite automatique",
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
      hours: "Forfait Accéléré BEA 20h",
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
      hours: "Forfait Accéléré BEA 30h",
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
    "Formation intensive automatique avec créneaux prioritaires et planning dédié",
    "Évaluation de départ gratuite pour évaluer précisément vos besoins",
    "Leçons supplémentaires disponibles à l'unité ou par forfait de 5 leçons",
    "Taux de réussite exceptionnel de 88% au premier passage en formation accélérée",
    "Véhicules automatiques récents équipés de technologies de sécurité"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis BEA Accéléré"
        subtitle="Formation Intensive Automatique"
        description="Obtenez votre permis BEA en 60 jours maximum avec notre formation accélérée automatique. Simplicité de la boîte automatique et rapidité de l'intensif."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait Accéléré BEA 20h",
            price: 1846,
            hours: "Code + 20 leçons"
          },
          {
            title: "Forfait Accéléré BEA 30h", 
            price: 2376,
            hours: "Code + 30 leçons"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis BEA accéléré"
        whatIsIt="Le permis BEA accéléré est une formation intensive qui combine la rapidité de la formation accélérée avec la simplicité de la boîte automatique. En 60 jours maximum, vous obtenez votre permis sans vous soucier de l'embrayage et des vitesses, pour un apprentissage plus fluide et moins stressant."
        whatIsItFor="Le permis BEA accéléré sert à accélérer votre indépendance en supprimant les complexités techniques de la conduite manuelle. Parfait pour ceux qui souhaitent se concentrer sur la conduite et la sécurité plutôt que sur la mécanique, tout en respectant des délais serrés pour leur mobilité."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir le permis BEA accéléré ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Nos forfaits permis BEA accéléré"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à obtenir votre permis automatique rapidement ?"
        description="Inscrivez-vous dès aujourd'hui et obtenez votre permis BEA en 60 jours maximum avec nos moniteurs spécialisés"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}