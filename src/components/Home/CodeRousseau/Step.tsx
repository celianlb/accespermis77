import Image from "next/image";

const steps = [
  {
    title: "1",
    description: "Rendez vous sur le site de Code Rousseau",
    bgColor: "#E6332A",
  },
  {
    title: "2",
    description: "Recherche l'auto-école Acces Permis 77",
    bgColor: "#F39200",
  },
  {
    title: "3",
    description: "Cliquez sur le bouton “S’inscrire au code en ligne voiture”",
    bgColor: "#95C11F",
  },
];

export const Step = () => {
  return (
    <div className="flex flex-col gap-12 w-full lg:w-[1/3] justify-center">
      <Image
        src="/img/coderousseau/logo-coderousseau.svg"
        alt="Logo Code Rousseau"
        width={225}
        height={15}
        className="mx-auto"
      />
      <div className="flex flex-col md:flex-row lg:flex-col gap-8">
        {steps.map((step) => (
          <div key={step.title} className="flex gap-2 items-start ">
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: step.bgColor }}
            >
              <p className="text-white text-xl font-bold">{step.title}</p>
            </div>
            <p className="w-fit">{step.description}</p>
          </div>
        ))}
      </div>
      <a
        href="https://auto-ecole.codesrousseau.fr/annuaire-auto-ecoles/courtry/acces-permis-77/33064"
        target="_blank"
        className="text-[#00277E] text-center lg:text-left"
      >
        Accéder directement à la page dédié à Acces Permis 77
      </a>
    </div>
  );
};
