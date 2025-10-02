import HeroSection from "@/components/Pages/HeroSection";
import { CTA } from "@/components/ui/CTA";
import { Section } from "@/components/ui/Section";
import { Metadata } from "next";
import {
  FaClipboardCheck,
  FaFolderOpen,
  FaHandsHelping,
  FaRegLightbulb,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Engagement qualité - Accès Permis 77",
  description:
    "Découvrez l'ensemble des procédures et supports pédagogiques mis en place par Accès Permis 77 pour garantir une démarche qualité exigeante et transparente.",
};

type Document = {
  title: string;
  description: string;
  href: string;
};

type DocumentGroup = {
  title: string;
  description: string;
  documents: Document[];
  background: string;
  ctaVariant?: "primary" | "secondary";
};

const heroHighlights = [
  {
    label: "Transparence",
    value: "Documents accessibles 24/7",
    icon: <FaFolderOpen />,
  },
  {
    label: "Accompagnement",
    value: "Équipe dédiée aux candidats",
    icon: <FaHandsHelping />,
  },
  {
    label: "Qualité certifiée",
    value: "Processus tracés et suivis",
    icon: <FaClipboardCheck />,
  },
  {
    label: "Amélioration",
    value: "Retours analysés en continu",
    icon: <FaRegLightbulb />,
  },
];

const generalDocuments: Document[] = [
  {
    title: "Descriptif de l'agence",
    description:
      "Présentation complète d'Accès Permis 77, de son fonctionnement quotidien et des ressources mobilisées pour assurer un accueil de qualité.",
    href: "/pdf/DESCRIPTIF D'AGENCE.doc",
  },
  {
    title: "Enjeux de la démarche qualité",
    description:
      "Analyse des objectifs de notre démarche qualité, des engagements pris et des indicateurs qui nous permettent d'en mesurer l'efficacité.",
    href: "/pdf/ENJEUX.pdf",
  },
  {
    title: "Fiche descriptive AM voiturette",
    description:
      "Détails pratiques de la formation AM voiturette : prérequis, déroulé pédagogique et modalités d'encadrement des élèves.",
    href: "/pdf/Fiche descriptive AM VOITURETTE.pdf",
  },
  {
    title: "Parcours de formation",
    description:
      "Vue d'ensemble du parcours de formation proposé aux apprenants, de l'inscription jusqu'à la présentation aux examens.",
    href: "/pdf/PARCOURS DE FORMATION.pdf",
  },
  {
    title: "Programme de formation",
    description:
      "Organisation des modules de formation théoriques et pratiques, ainsi que les compétences travaillées à chaque étape.",
    href: "/pdf/PROGRAMME DE FORMATION.docx",
  },
];

const groupedDocuments: DocumentGroup[] = [
  {
    title: "Supports de formation",
    description:
      "Retrouvez le détail des formations proposées par catégorie de permis. Chaque document expose les objectifs pédagogiques, la structure des séances et le suivi proposé.",
    background: "bg-gray-50",
    documents: [
      {
        title: "Programme Permis A1",
        description:
          "Supports destinés aux candidats au permis A1 : alternance entre théorie, plateau et circulation, avec focus sur la sécurité routière.",
        href: "/pdf/formations/A1.pdf",
      },
      {
        title: "Passerelle A2 vers A",
        description:
          "Dispositif passerelle pour accéder au permis A : conditions réglementaires, contenus de formation et évaluation finale.",
        href: "/pdf/formations/A2 vers A.pdf",
      },
      {
        title: "Programme Permis A2",
        description:
          "Plan de formation complet pour le permis A2 : progression pédagogique, encadrement et préparation à l'examen.",
        href: "/pdf/formations/A2.pdf",
      },
      {
        title: "Formation AM scooter",
        description:
          "Fiche pédagogique dédiée à la formation AM scooter : déroulé pratique, ateliers sécurité et accompagnement personnalisé.",
        href: "/pdf/formations/AM SCOOTER.pdf",
      },
      {
        title: "Formation L5e",
        description:
          "Supports pour les candidats à la conduite des quadricycles lourds (L5e) avec objectifs, durée et compétences attendues.",
        href: "/pdf/formations/L5e.pdf",
      },
      {
        title: "Passerelle boîte auto vers boîte manuelle",
        description:
          "Programme passerelle pour passer d'un permis BEA à un permis B traditionnel avec focus sur la maîtrise de l'embrayage.",
        href: "/pdf/formations/Passerelle Boîte auto vers boîte manuelle.pdf",
      },
      {
        title: "Permis B conduite accompagnée",
        description:
          "Dispositif AAC : calendrier de formation, rôle des accompagnateurs et suivi pédagogique personnalisé.",
        href: "/pdf/formations/Permis B AAC .pdf",
      },
      {
        title: "Permis B boîte automatique",
        description:
          "Organisation de la formation au permis B en boîte automatique : déroulé pratique, apports théoriques et bilan des compétences.",
        href: "/pdf/formations/Permis B boîte automatique.pdf",
      },
      {
        title: "Permis B boîte manuelle",
        description:
          "Programme détaillé du permis B manuel : séquences de conduite, axes de progression et préparation à l'examen pratique.",
        href: "/pdf/formations/Permis B boîte manuelle.pdf",
      },
      {
        title: "Permis conduite supervisée",
        description:
          "Modalités de la conduite supervisée : conditions d'accès, planning de formation et rôle du tuteur.",
        href: "/pdf/formations/Permis CS.pdf",
      },
    ],
  },
  {
    title: "Procédures d'évaluation",
    description:
      "Documents de référence pour assurer un suivi transparent des compétences et des évaluations réalisées tout au long du parcours.",
    background: "bg-white",
    documents: [
      {
        title: "Évaluation des candidats",
        description:
          "Grille d'évaluation utilisée pour apprécier le niveau des candidats avant leur présentation aux examens.",
        href: "/pdf/evaluation/EVALUATION DES CANDIDATS.pdf",
      },
      {
        title: "Procédé d'évaluation",
        description:
          "Méthodologie détaillant les étapes, critères et outils mobilisés pour évaluer les apprentissages.",
        href: "/pdf/evaluation/PROCÉDÉ D'EVALUATION.pdf",
      },
    ],
  },
];

const DocumentCard = ({
  document,
  variant = "primary",
}: {
  document: Document;
  variant?: "primary" | "secondary";
}) => {
  const documentUrl = encodeURI(document.href);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-primary">
          {document.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {document.description}
        </p>
      </div>
      <CTA
        href={documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant={variant}
        size="md"
        className="mt-6"
      >
        Consulter le document
      </CTA>
    </article>
  );
};

export default function EngagementQualite() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="Engagement qualité"
        subtitle="Transparence & amélioration continue"
        description="Accès Permis 77 met à votre disposition l'ensemble des documents qui encadrent notre démarche qualité. Découvrez nos procédures, nos supports pédagogiques et notre suivi pour garantir un accompagnement irréprochable."
        icon={<FaClipboardCheck />}
        conditions={heroHighlights}
      />

      <Section classname="py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-1 w-14 rounded-full bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Ressources
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary">
              Documentation générale
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Ces documents présentent notre organisation, nos objectifs qualité et la vision pédagogique qui guide chacune de nos actions auprès des élèves.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {generalDocuments.map((document) => (
              <DocumentCard
                key={document.href}
                document={document}
                variant="secondary"
              />
            ))}
          </div>
        </div>
      </Section>

      {groupedDocuments.map((group) => (
        <Section key={group.title} classname={`py-24 ${group.background}`}>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1 w-14 rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {group.title}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {group.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {group.description}
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.documents.map((document) => (
                <DocumentCard
                  key={document.href}
                  document={document}
                  variant={group.ctaVariant ?? "primary"}
                />
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
