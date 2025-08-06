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
  title: "Permis A2 - Formation moto intermédiaire - Accès Permis 77",
  description: "Obtenez votre permis A2 pour conduire des motos jusqu'à 35 kW. Formation moto intermédiaire avec Accès Permis 77.",
};

export default function PermisA2() {
  const conditions = [
    {
      label: "Âge minimum",
      value: "18 ans",
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
      label: "Puissance autorisée",
      value: "35 kW maximum",
      icon: <MdStart />,
    },
  ];

  const advantages = [
    {
      title: "Motos jusqu'à 35kW",
      description:
        "Conduisez des motocyclettes puissantes jusqu'à 47,5 ch, parfaites pour tous types de trajets",
      icon: <FaMotorcycle />,
    },
    {
      title: "Moniteurs spécialisés moto",
      description:
        "Équipe pédagogique expérimentée dans la formation moto et la sécurité deux-roues",
      icon: <FaUserGraduate />,
    },
    {
      title: "Formation complète",
      description:
        "20h de formation incluant plateau et circulation pour une maîtrise parfaite",
      icon: <FaClock />,
    },
    {
      title: "Évolution possible",
      description:
        "Accès au permis A (toute puissance) après 2 ans d'expérience avec le A2",
      icon: <FaShieldAlt />,
    },
  ];

  const packages = [
    {
      name: "Permis A2",
      price: "900€",
      duration: "Formation complète",
      features: [
        "Démarches administratives incluses",
        "Prépacode en ligne pendant 6 mois",
        "Fournitures pédagogiques (livre de code...)",
        "20 leçons de conduite (8h plateau + 12h circulation)",
        "Frais d'accompagnement examen plateau",
        "Frais d'accompagnement examen circulation",
      ],
      highlighted: true,
      badge: "Tarif unique",
    },
  ];

  const includedItems = [
    {
      label: "Démarches administratives",
      included: true,
      description: "Toutes les formalités d'inscription",
    },
    {
      label: "Prépacode en ligne",
      included: true,
      description: "Accès pendant 6 mois",
    },
    {
      label: "Fournitures pédagogiques",
      included: true,
      description: "Livre de code et supports de cours",
    },
    {
      label: "Formation plateau",
      included: true,
      description: "8 heures de formation hors circulation",
    },
    {
      label: "Formation circulation",
      included: true,
      description: "12 heures de conduite en situation réelle",
    },
    {
      label: "Accompagnement examen plateau",
      included: true,
      description: "Frais d'accompagnement inclus",
    },
    {
      label: "Accompagnement examen circulation",
      included: true,
      description: "Frais d'accompagnement inclus",
    },
  ];

  const paymentOptions = [
    {
      hours: "Permis A2",
      schedule: [
        {
          step: "À l'inscription",
          amount: "300€",
          description: "Premier versement pour débuter la formation",
        },
        {
          step: "Au passage du code",
          amount: "300€",
          description: "Deuxième versement après obtention de l'ETM",
        },
        {
          step: "À la 10ème leçon de conduite",
          amount: "300€",
          description: "Solde à régler en cours de formation",
        },
      ]
    }
  ];

  const additionalInfo = [
    "Code moto (ETM) obligatoire avant de commencer la formation pratique",
    "Formation sur motos écoles récentes et adaptées à tous niveaux",
    "Taux de réussite élevé grâce à notre méthode pédagogique éprouvée",
    "Équipements de protection fournis pendant la formation",
    "Possibilité d'évolution vers le permis A (toute puissance) après 2 ans",
    "Large choix de motos disponibles sur le marché avec ce permis"
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Permis A2"
        subtitle="Formation Moto Intermédiaire"
        description="Obtenez votre permis A2 dès 18 ans pour conduire des motos jusqu'à 35 kW. Formation complète avec nos moniteurs spécialisés en deux-roues."
        icon={<FaMotorcycle />}
        pricing={[
          {
            title: "Permis A2",
            price: 900,
            hours: "Formation complète 20h"
          }
        ]}
        conditions={conditions}
      />

      <DescriptionSection
        title="permis A2"
        whatIsIt="Le permis A2 est une catégorie de permis moto qui autorise la conduite de motocyclettes d'une puissance maximale de 35 kW (47,5 ch) dès 18 ans. Il constitue une étape intermédiaire vers le permis A, permettant de conduire des motos plus puissantes tout en conservant des limitations de sécurité pour les conducteurs expérimentés."
        whatIsItFor="Le permis A2 sert à accéder à une gamme étendue de motocyclettes performantes pour tous types d'usage : trajets urbains, voyages, loisirs. Il offre le parfait équilibre entre puissance et sécurité, permettant de développer son expérience motard avant d'évoluer vers le permis A pour les motos sans limitation de puissance."
        whatIsItImage="/img/permis/moto.jpg"
        whatIsItForImage="/img/permis/licence-driver.svg"
        bgColor="bg-gray-50"
      />

      <AdvantagesSection
        title="Pourquoi choisir notre formation A2 ?"
        advantages={advantages}
        bgColor="bg-white"
      />

      <PricingSection
        title="Notre formation permis A2"
        packages={packages}
        includedItems={includedItems}
        paymentOptions={paymentOptions}
        additionalInfo={additionalInfo}
      />

      <CTASection
        title="Prêt à passer votre permis A2 ?"
        description="Inscrivez-vous dès aujourd'hui et accédez à une large gamme de motos performantes"
        buttons={[
          { text: "S'inscrire maintenant", variant: "primary" },
          { text: "Réserver une évaluation", variant: "secondary" },
        ]}
      />
    </div>
  );
}