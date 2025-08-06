import AdvantagesSection from "@/components/Pages/AdvantagesSection";
import CTASection from "@/components/Pages/CTASection";
import DescriptionSection from "@/components/Pages/DescriptionSection";
import HeroSection from "@/components/Pages/HeroSection";
import PricingSection from "@/components/Pages/PricingSection";
import { Metadata } from "next";
import { FaMotorcycle, FaClock, FaShieldAlt, FaUserGraduate } from "react-icons/fa";
import {
  MdDateRange,
  MdDirectionsCar,
  MdLockOpen,
  MdStart,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "Permis 125 A1 - Formation moto légère - Accès Permis 77",
  description: "Obtenez votre permis A1 pour conduire des motos 125cc. Formation complète moto légère avec Accès Permis 77.",
};

export default function Permis125A1() {
  const conditions = [
    {
      label: "Âge minimum",
      value: "16 ans",
      icon: <MdDateRange />,
    },
    {
      label: "Code moto requis",
      value: "ETM obligatoire",
      icon: <MdDirectionsCar />,
    },
    {
      label: "Formation pratique",
      value: "20h (8h + 12h)",
      icon: <MdLockOpen />,
    },
    {
      label: "Permis probatoire",
      value: "3 ans",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Motos 125cc accessibles",
      description:
        "Conduisez des motocyclettes jusqu'à 125cm³ et 11kW, parfaites pour débuter en deux-roues",
      icon: <FaMotorcycle />,
    },
    {
      title: "Moniteurs spécialisés moto",
      description:
        "Équipe pédagogique expérimentée dans la formation moto et la sécurité deux-roues",
      icon: <FaUserGraduate />,
    },
    {
      title: "Formation progressive",
      description:
        "Apprentissage étape par étape : plateau puis circulation pour une maîtrise complète",
      icon: <FaClock />,
    },
    {
      title: "Sécurité prioritaire",
      description:
        "Formation aux équipements de protection et aux spécificités de la conduite moto",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Permis A1 - 125cc",
      price: "900€",
      duration: "Formation complète",
      features: [
        "Frais de gestion inclus",
        "Fournitures pédagogiques complètes",
        "8h de conduite hors circulation (plateau)",
        "12h de conduite en circulation",
        "Présentation examen plateau incluse",
        "Présentation examen circulation incluse",
      ],
      highlighted: true,
      badge: "Formation complète",
    },
  ];

  const includedItems = [
    {
      label: "Frais de gestion",
      included: true,
      description: "Toutes les démarches administratives",
    },
    {
      label: "Fournitures pédagogiques",
      included: true,
      description: "Livret d'apprentissage et supports de cours",
    },
    {
      label: "Formation hors circulation",
      included: true,
      description: "8 heures de plateau (maniabilité, freinage)",
    },
    {
      label: "Formation en circulation",
      included: true,
      description: "12 heures de conduite en situation réelle",
    },
    {
      label: "Présentation examen plateau",
      included: true,
      description: "Inscription et présentation incluses",
    },
    {
      label: "Présentation examen circulation",
      included: true,
      description: "Inscription et présentation incluses",
    },
    {
      label: "Évaluation de départ",
      price: "25€",
      description: "Obligatoire - non incluse dans le forfait",
    },
    {
      label: "Code moto (ETM)",
      price: "Variable",
      description: "À prévoir en supplément",
    },
  ];

  const paymentOptions = [
    {
      hours: "Permis A1 - 125cc",
      schedule: [
        {
          step: "À l'inscription",
          amount: "900€",
          description: "Paiement unique pour la formation complète",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Code moto (ETM) obligatoire avant de commencer la formation pratique",
    "Évaluation de départ obligatoire à 25€ (non incluse dans le prix)",
    "Formation sur motos écoles 125cc récentes et entretenues",
    "Taux de réussite élevé grâce à notre méthode pédagogique éprouvée",
    "Équipements de protection fournis pendant la formation",
    "Possibilité d'évolution vers le permis A2 après 2 ans"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis A1"
        subtitle="Formation Moto 125cc"
        description="Obtenez votre permis A1 dès 16 ans pour conduire des motos légères jusqu'à 125cc. Formation complète avec nos moniteurs spécialisés en deux-roues."
        icon={<FaMotorcycle />}
        pricing={[
          {
            title: "Permis A1 - 125cc",
            price: 900,
            hours: "Formation complète 20h"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis A1"
        whatIsIt="Le permis A1 est la première catégorie de permis moto qui autorise la conduite de motocyclettes légères jusqu'à 125 cm³ et 11 kW dès 16 ans. Il nécessite l'obtention du code moto (ETM) et une formation pratique de 20h, offrant une première approche sécurisée du monde de la moto."
        whatIsItFor="Le permis A1 sert à découvrir les plaisirs de la conduite moto en toute sécurité. Idéal pour les jeunes conducteurs, il permet d'acquérir l'expérience nécessaire avant d'évoluer vers des motos plus puissantes, tout en offrant une mobilité urbaine efficace et économique pour les trajets quotidiens."
        whatIsItImage="/img/permis/moto.jpg"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir notre formation A1 ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Notre formation permis A1"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à passer votre permis A1 ?"
        description="Inscrivez-vous dès aujourd'hui et découvrez le plaisir de la conduite moto en toute sécurité"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}