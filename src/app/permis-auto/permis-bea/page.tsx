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
  title: "Permis BEA - Formation conduite boîte automatique - Accès Permis 77",
  description:
    "Obtenez votre permis BEA avec notre formation à la conduite automatique. Auto-école Accès Permis 77, formation complète et personnalisée.",
};

export default function PermisBEA() {
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
      label: "Validité du code",
      value: "5 ans",
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
      title: "Véhicules automatiques récents",
      description:
        "Flotte de véhicules automatiques modernes et sécurisés, régulièrement entretenus pour votre sécurité",
      icon: <FaCar />,
    },
    {
      title: "Moniteurs diplômés",
      description:
        "Équipe pédagogique expérimentée et patiente pour vous accompagner dans votre apprentissage",
      icon: <FaUserGraduate />,
    },
    {
      title: "Horaires flexibles",
      description:
        "Cours adaptés à votre emploi du temps, créneaux matin, midi et soir disponibles",
      icon: <FaClock />,
    },
    {
      title: "Formation sécurisée",
      description:
        "Apprentissage progressif avec double commande et respect des protocoles de sécurité",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Forfait 13h",
      price: "950€",
      duration: "Code + 13 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "13 leçons de conduite automatique",
        "Présentation à l'examen",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait 20h",
      price: "1395€",
      duration: "Code + 20 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite automatique",
        "Présentation à l'examen",
        "Suivi renforcé personnalisé",
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
      description: "13 ou 20 selon le forfait choisi",
    },
    {
      label: "Inscription théorique",
      price: "30€",
    },
  ];

  const paymentOptions = [
    {
      hours: "Forfait 13h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "320€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "320€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 6ème leçon",
          amount: "310€",
          description: "Solde à régler en cours de formation",
        },
      ],
    },
    {
      hours: "Forfait 20h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "465€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "465€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 10ème leçon",
          amount: "465€",
          description: "Solde à régler en cours de formation",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Évaluation de départ pour évaluer précisément vos besoins en formation",
    "Leçons supplémentaires disponibles à l'unité (70€) ou par forfait de 5 leçons",
    "Taux de réussite exceptionnel de 82% au premier passage de l'examen",
    "Formation adaptée à votre rythme avec un suivi personnalisé constant",
    "Véhicules automatiques récents équipés de double commande et technologies de sécurité",
    "Possibilité de financement CPF (Compte Personnel de Formation) selon éligibilité",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis BEA"
        subtitle="Formation Conduite Automatique"
        description="Apprenez à conduire avec notre formation complète au permis BEA. Une approche progressive et personnalisée pour maîtriser la conduite automatique en toute simplicité."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait 13h",
            price: 950,
            hours: "Code + 13 leçons",
          },
          {
            title: "Forfait 20h",
            price: 1395,
            hours: "Code + 20 leçons",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis BEA"
        whatIsIt="Le permis BEA (Boîte de vitesses Automatique) est une catégorie de permis de conduire qui vous autorise à conduire uniquement des véhicules équipés d'une transmission automatique. Il offre une approche simplifiée de l'apprentissage de la conduite, sans gestion d'embrayage ni passage de vitesses, idéal pour se concentrer sur les règles de circulation et la sécurité routière."
        whatIsItFor="Le permis BEA sert à faciliter votre apprentissage de la conduite en supprimant les contraintes techniques de la boîte manuelle. Parfait pour ceux qui souhaitent une formation plus accessible, moins de stress pendant l'examen, ou qui ont des difficultés avec l'embrayage. Il vous donne accès à une large gamme de véhicules automatiques modernes."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir le permis BEA chez nous ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Permis BEA (Boîte automatique)"
        title="Nos forfaits permis BEA"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à commencer votre formation ?"
        description="Inscrivez-vous dès aujourd'hui et obtenez votre permis BEA avec nos moniteurs expérimentés"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}
