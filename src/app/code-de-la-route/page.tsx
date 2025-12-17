import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
import DescriptionSection from "@/components/Pages/DescriptionSection";
import HeroSection from "@/components/Pages/HeroSection";
import PricingSection from "@/components/Pages/PricingSection";
import { Metadata } from "next";
import {
  FaBook,
  FaClock,
  FaLaptop,
  FaMobileAlt,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import {
  MdDateRange,
  MdQuiz,
  MdSchool,
  MdAccessTime,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Code de la route - Accès Permis 77",
  description:
    "Apprenez le code de la route avec notre auto-école Accès Permis 77. Formation complète et personnalisée pour réussir votre examen du code.",
};

export default function CodeDeLaRoute() {
  const conditions = [
    {
      label: "Âge minimum",
      value: "15 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Validité",
      value: "5 ans",
      icon: <MdAccessTime />,
    },
    {
      label: "Taux de réussite",
      value: "95%",
      icon: <MdQuiz />,
    },
    {
      label: "Formation",
      value: "Salle + en ligne",
      icon: <MdSchool />,
    },
  ];

  const advantages = [
    {
      title: "Formation en salle illimitée",
      description:
        "Accès illimité pendant 6 mois à nos salles de code avec suivi par un moniteur diplômé",
      icon: <FaBook />,
    },
    {
      title: "Plateforme en ligne",
      description:
        "Plus de 10 000 questions conformes à l'examen, accessibles 24h/24 et 7j/7",
      icon: <FaLaptop />,
    },
    {
      title: "Application mobile",
      description:
        "Révisez partout avec notre application mobile disponible sur iOS et Android",
      icon: <FaMobileAlt />,
    },
    {
      title: "Suivi personnalisé",
      description:
        "Tests blancs réguliers et suivi de votre progression par nos moniteurs",
      icon: <FaUserGraduate />,
    },
    {
      title: "Horaires flexibles",
      description:
        "Cours de code disponibles du lundi au samedi avec des créneaux adaptés",
      icon: <FaClock />,
    },
    {
      title: "Préparation complète",
      description:
        "Cours thématiques, tests d'entraînement et examens blancs pour réussir du premier coup",
      icon: <FaCheckCircle />,
    },
  ];

  const packages = [
    {
      name: "Code de la route",
      price: "350€",
      duration: "Formation complète",
      features: [
        "Accès illimité en salle pendant 6 mois",
        "Plateforme en ligne illimitée",
        "Application mobile incluse",
        "Plus de 10 000 questions",
        "Cours thématiques détaillés",
        "Tests d'entraînement et examens blancs",
        "Suivi personnalisé par un moniteur",
        "Inscription à l'examen incluse",
      ],
      highlighted: true,
      badge: "Formule complète",
    },
  ];

  const includedItems = [
    {
      label: "Accès en salle",
      included: true,
      description: "Illimité pendant 6 mois",
    },
    {
      label: "Plateforme en ligne",
      included: true,
      description: "24h/24 et 7j/7",
    },
    {
      label: "Application mobile",
      included: true,
      description: "iOS et Android",
    },
    {
      label: "Cours thématiques",
      included: true,
      description: "10 thèmes du code de la route",
    },
    {
      label: "Tests d'entraînement",
      included: true,
      description: "Plus de 10 000 questions",
    },
    {
      label: "Examens blancs",
      included: true,
      description: "Conditions réelles d'examen",
    },
    {
      label: "Suivi personnalisé",
      included: true,
      description: "Par un moniteur diplômé",
    },
    {
      label: "Inscription examen",
      included: true,
      description: "Démarches administratives incluses",
    },
  ];

  const paymentOptions = [
    {
      hours: "Code de la route",
      schedule: [
        {
          step: "À l'inscription",
          amount: "350€",
          description: "Paiement unique pour l'accès complet",
        },
      ],
    },
  ];

  const additionalInfo = [
    "Accès illimité en salle pendant 6 mois pour vous entraîner autant que nécessaire",
    "Plateforme en ligne accessible 24h/24 avec suivi de votre progression",
    "Application mobile pour réviser partout et à tout moment",
    "Tests d'entraînement conformes à l'examen officiel",
    "Suivi personnalisé par nos moniteurs diplômés d'État",
    "Inscription à l'examen incluse dans le forfait",
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Code de la route"
        subtitle="Formation théorique complète"
        description="Préparez-vous efficacement à l'examen théorique général (ETG) avec notre formation complète en salle et en ligne. Méthode éprouvée avec un taux de réussite de 95%."
        icon={<FaBook />}
        pricing={[
          {
            title: "Code de la route",
            price: 350,
            hours: "Formation complète",
          },
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="code de la route"
        whatIsIt="L'examen théorique général (ETG), communément appelé 'code de la route', est l'épreuve théorique obligatoire pour obtenir le permis de conduire. Il évalue vos connaissances du code de la route à travers 40 questions portant sur 10 thèmes différents : circulation routière, conducteur, route, autres usagers, notions diverses, premiers secours, mécanique et équipements, sécurité du passager et véhicule, environnement, et les nouvelles règles de circulation."
        whatIsItFor="Le code de la route sert à garantir que tous les conducteurs possèdent les connaissances essentielles pour circuler en toute sécurité. Cette formation permet de comprendre les règles de circulation, d'anticiper les dangers, de connaître vos droits et devoirs en tant que conducteur, et d'adopter une conduite responsable et respectueuse de l'environnement. Le code est valable 5 ans et constitue la première étape indispensable avant la formation pratique."
        whatIsItImage="/img/permis/code.jpg"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir notre formation au code ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        permisType="Code de la route"
        title="Notre formation code de la route"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à réussir votre code ?"
        description="Inscrivez-vous dès aujourd'hui et commencez votre formation avec notre méthode éprouvée"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Demander des informations", variant: "secondary" },
        ]}
      />
    </div>
  );
}
