import { Picto } from "@/components/ui/Picto";

const info = [
  {
    title: "Adresse",
    description: ["13/15 rue Louis Osteng", "77181", "Courtry"],
    url: "/img/svg/localisation/localisation.svg",
  },
  {
    title: "Téléphone",
    description: "01 60 08 19 11",
    url: "/img/svg/localisation/phone.svg",
  },
  {
    title: "Réseaux sociaux",
    description: "accespermis77@gmail.com",
    url: "/img/svg/localisation/social.svg",
  },
];

export const Info = () => {
  return (
    <div className="flex flex-wrap lg:flex-col gap-16">
      {info.map((item) => (
        <div key={item.title} className="flex items-center gap-4">
          <Picto
            src={item.url}
            alt={item.title}
            width={25}
            height={25}
            styleType="secondary"
            isRotated
          />
          <div className="flex flex-col gap-2">
            <p className="text-[24px] font-semibold">{item.title}</p>
            {Array.isArray(item.description) ? (
              item.description.map((line, index) => (
                <p key={index} className="text-[16px] font-normal">
                  {line}
                </p>
              ))
            ) : (
              <p className="text-[16px] font-normal">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
