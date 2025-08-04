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
  title: "Permis B - Formation conduite manuelle - Accès Permis 77",
  description:
    "Obtenez votre permis B avec notre formation à la conduite manuelle. Auto-école Accès Permis 77, formation complète et personnalisée.",
};

export default function PermisB() {
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
      value: "20 leçons minimum",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Véhicules récents",
      description:
        "Flotte de véhicules modernes et sécurisés, régulièrement entretenus pour votre sécurité",
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
      name: "Forfait 20h",
      price: "1280€",
      duration: "Code + 20 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite",
        "Présentation aux examens",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait 30h",
      price: "1700€",
      duration: "Code + 30 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "30 leçons de conduite",
        "Présentation aux examens",
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
      label: "Leçons de conduite",
      included: true,
      description: "20 ou 30 selon le forfait choisi",
    },
    {
      label: "Inscription théorique",
      price: "30€",
    },
  ];

  const paymentOptions = [
    {
      hours: "Forfait 20h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "480€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "400€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 10ème leçon",
          amount: "400€",
          description: "Solde à régler en cours de formation",
        },
      ]
    },
    {
      hours: "Forfait 30h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "425€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "425€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 1ère leçon",
          amount: "425€",
          description: "Troisième versement au début de la conduite",
        },
        {
          step: "À la 15ème leçon",
          amount: "425€",
          description: "Solde à régler en cours de formation",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Évaluation de départ gratuite pour évaluer précisément vos besoins en formation",
    "Leçons supplémentaires disponibles à l'unité (45€) ou par forfait de 5 leçons",
    "Taux de réussite exceptionnel de 82% au premier passage de l'examen",
    "Formation adaptée à votre rythme avec un suivi personnalisé constant",
    "Véhicules école récents équipés de double commande et technologies de sécurité",
    "Possibilité de financement CPF (Compte Personnel de Formation) selon éligibilité"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis B"
        subtitle="Formation Conduite Manuelle"
        description="Apprenez à conduire avec notre formation complète au permis B. Une approche progressive et personnalisée pour maîtriser la conduite manuelle en toute sécurité."
        icon={<FaCar />}
        pricing={[
          {
            title: "Forfait 20h",
            price: 1280,
            hours: "Code + 20 leçons"
          },
          {
            title: "Forfait 30h", 
            price: 1700,
            hours: "Code + 30 leçons"
          }
        ]}
        conditions={conditions}
      />

      <AdvantagesSection
        title="Pourquoi choisir le permis B chez nous ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Nos forfaits permis B"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à commencer votre formation ?"
        description="Inscrivez-vous dès aujourd'hui et obtenez votre permis B avec nos moniteurs expérimentés"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}
