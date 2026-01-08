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
      price: "1395€",
      duration: "Code + 20 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "20 leçons de conduite",
        "Présentation à l'examen",
      ],
      highlighted: true,
      badge: "Le plus populaire",
    },
    {
      name: "Forfait 30h",
      price: "2000€",
      duration: "Code + 30 leçons",
      features: [
        "Démarches administratives incluses",
        "Code en salle illimité 6 mois",
        "Fournitures pédagogiques complètes",
        "30 leçons de conduite",
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
      label: "Leçons de conduite",
      included: true,
      description: "20 ou 30 selon le forfait choisi",
    },
    {
      label: "Évaluation de départ",
      price: "30€",
    },
  ];

  const paymentOptions = [
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
    {
      hours: "Forfait 30h",
      schedule: [
        {
          step: "À l'inscription",
          amount: "500€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "500€",
          description: "Deuxième versement après obtention du code",
        },
        {
          step: "À la 1ère leçon",
          amount: "500€",
          description: "Troisième versement au début de la conduite",
        },
        {
          step: "À la 15ème leçon",
          amount: "500€",
          description: "Solde à régler en cours de formation",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Évaluation de départ pour évaluer précisément vos besoins en formation",
    "Leçons supplémentaires disponibles à l'unité (65€)",
    "Taux de réussite exceptionnel de 82% au premier passage de l'examen",
    "Formation adaptée à votre rythme avec un suivi personnalisé constant",
    "Véhicules école récents équipés de double commande et technologies de sécurité",
    "Possibilité de financement CPF (Compte Personnel de Formation) selon éligibilité",
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
            price: 1395,
            hours: "Code + 20 leçons",
          },
          {
            title: "Forfait 30h",
            price: 2000,
            hours: "Code + 30 leçons",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis B"
        whatIsIt="Le permis B est la catégorie de permis de conduire qui autorise la conduite des véhicules légers. Il permet de conduire des voitures particulières, des camionnettes et des camping-cars d'un poids total autorisé en charge (PTAC) ne dépassant pas 3,5 tonnes, avec ou sans remorque légère."
        whatIsItFor="Le permis B sert avant tout à garantir votre autonomie et votre mobilité au quotidien. Il vous permet de vous déplacer librement pour vos activités professionnelles, personnelles et familiales. C'est un véritable atout pour l'emploi, facilitant l'accès à un plus large éventail d'opportunités professionnelles et vous offrant une indépendance dans vos déplacements."
        whatIsItImage="/img/permis/voiture.png"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir le permis B chez nous ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Permis B"
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
