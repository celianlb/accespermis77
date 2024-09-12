import { CTA } from "@/components/ui/CTA";
import { CheckIcon } from "./CheckIcon";
interface PropsFormules {
  title: string;
  description: string;
  price: string;
  pack: string[];
  variant: "white" | "orange";
}

const list: PropsFormules[] = [
  {
    title: "PERMIS B",
    description: "Boîte manuelle",
    price: "1280€",
    pack: [
      "Frais de dossier",
      "Forfait code illimité en salle (6mois)",
      "Fournitures pédagogiques (livre de code, fiche suivi, livret d'apprentissage)",
      "20 leçons de conduites",
    ],
    variant: "orange",
  },
  {
    title: "PERMIS A2",
    description: "à partir de",
    price: "900€",
    pack: [
      "Frais de dossier",
      "Prépacode en ligne pendant 6 mois",
      "Fournitures pédagogiques (livre de code, fiche suivi, livret d'apprentissage)",
      "20 leçons de conduites (8h de plateau & 12h en circulation)",
    ],
    variant: "white",
  },
  {
    title: "FORFAIT CODE",
    description: "à partir de",
    price: "15€",
    pack: [
      "Accès à une plateforme en ligne",
      "Accès à une salle de révision à l'auto-école",
      "Jusqu'à 1 passage d'examen du code de la route",
    ],
    variant: "white",
  },
];

export const Card = ({
  title,
  description,
  price,
  pack,
  variant,
}: PropsFormules) => {
  const isOrange = variant === "orange";

  return (
    <div
      className={`flex flex-col gap-12 px-6 py-6 rounded-[30px] shadow-md justify-between ${
        isOrange ? "bg-secondary text-white" : "bg-white border border-primary"
      }`}
    >
      <div className="flex flex-col gap-12 justify-between">
        <div className="flex flex-col gap-12 items-center">
          <div className="flex flex-col items-center">
            <p
              className={`text-[32px] font-extrabold ${
                isOrange ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </p>
            {description && (
              <p
                className={`text-[18px] ${
                  isOrange ? "text-white" : "text-primary"
                }`}
              >
                {description}
              </p>
            )}
          </div>
          <p
            className={`text-[40px] font-extrabold ${
              isOrange ? "text-primary" : "text-secondary"
            }`}
          >
            {price}
          </p>
        </div>
        <div>
          <ul className=" space-y-6">
            {pack.map((item, index) => (
              <li key={index} className="flex text-[16px] items-start">
                <CheckIcon
                  variant={isOrange ? "light" : "dark"}
                  className="mr-2 flex-shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CTA
        classname="w-fit mx-auto"
        variant={isOrange ? "secondary" : "primary"}
      >
        Je découvre
      </CTA>
    </div>
  );
};

export const CardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
