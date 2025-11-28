import { Picto } from "../ui/Picto";
import { Section } from "../ui/Section";

const picto = [
  {
    title: "En bas de chez toi",
    url: "/img/svg/about/place.svg",
    description:
      "Nous avons la possibilité de vous récupérer dans un rayon jusqu’a 30 minutes de l’auto école.",
  },
  {
    title: "Des moniteurs expérimentés",
    url: "/img/svg/about/monitor.svg",
    description:
      "Nos moniteurs sont toujours à l’écoute, patient & professionel.",
  },
  {
    title: "Conduite 5/7j",
    url: "/img/svg/about/calendar.svg",
    description:
      "5/7 du mardi au samedi sauf pour la conduite l’accélérée 7/7 y compris les jours fériés.",
  },
  {
    title: "Facilité de paiement",
    url: "/img/svg/about/3x.svg",
    description:
      "Nous offrons la possibilité de payer jusqu’à trois fois sans frais pour vous aidez.",
  },
  {
    title: "Code de la route en ligne",
    url: "/img/svg/about/phone.svg",
    description:
      "Avec le forfait code, profitez d’une plateforme de révision en ligne pendant 6 mois.",
  },
  {
    title: "Piste de moto privée",
    url: "/img/svg/about/moto.svg",
    description:
      "Nous possédons notre piste de moto privée pour vos sessions sur plateau (à 5 min de l’agence).",
  },
];

export const About = () => {
  return (
    <Section classname="flex flex-col justify-center gap-16 md:gap-24 my-[120px] md:my-[180px]">
      <h2 className="text-[40px] mx-auto font-extrabold">
        Le permis avec Acces Permis 77
      </h2>
      <div className="flex flex-wrap justify-center 2xl:justify-between mx-auto max-w-[1260px] gap-12 md:gap-24">
        {picto.map((item) => (
          <div key={item.title} className="flex flex-col gap-4 w-[300px]">
            <Picto
              src={item.url}
              width={25}
              height={25}
              alt={item.title}
              styleType="secondary"
              isRotated
            />
            <p className=" font-bold">{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
