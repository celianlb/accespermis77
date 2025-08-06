import Image from "next/image";
import { Section } from "../ui/Section";

export const CPF = () => {
  return (
    <Section classname="flex flex-col-reverse md:flex-row gap-6 bg-beige py-[100px] md:justify-around items-center relative overflow-hidden">
      <Image
        src="/img/rounded-road.png"
        alt="Background image"
        width={184}
        height={320}
        className="absolute left-0 top-0"
        style={{ objectFit: "contain", objectPosition: "left top" }}
      />
      <div className="flex flex-col gap-10 items-center">
        <h3 className="text-[24px] md:text-[40px] font-sans font-extrabold mx-auto">
          Finance ton permis <br />
          avec ton compte CPF (valable uniquement sur les permis moto) !
        </h3>
      </div>
      <Image
        src={"/img/cpf-certification.png"}
        alt="CPF"
        width={269}
        height={136}
        className="w-auto h-full"
      />
    </Section>
  );
};
