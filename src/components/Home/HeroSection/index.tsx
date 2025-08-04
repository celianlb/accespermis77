import Image from "next/image";
import { Section } from "../../ui/Section";
import { Card } from "./Card";

export const HeroSection = () => {
  return (
    <Section classname="bg-beige py-10 w-full min-h-[calc(100vh-118px)] flex flex-col justify-center gap-16 bg-hero-pattern bg-no-repeat bg-right">
      <div className="flex flex-col gap-8">
        <h1 className="font-sans font-extrabold text-[48px] md:text-[70px]">
          L&apos;auto ecole à <span className="text-secondary">proximité</span>
        </h1>
        <p className="font-medium w-fit md:w-[550px]">
          Chez Accès Permis 77 passez votre permis en toute confiance avec une
          équipe de professionnels passionnés, à deux pas de chez vous.
        </p>
      </div>
      <div className="flex justify-center xl:justify-between">
        <Image
          src={"/img/voiture-acces-permis77.png"}
          width={544}
          height={373}
          alt="Voiture Accès Permis 77"
          className="hidden xl:block"
        />
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <Card title="Formule Permis B" price={1280} />
          <Card title="Forfait Code" price={15} />
        </div>
      </div>
    </Section>
  );
};
