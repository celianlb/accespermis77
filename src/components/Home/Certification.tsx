import Image from "next/image";
import Link from "next/link";
import { Picto } from "../ui/Picto";
import { Section } from "../ui/Section";

const picto = [
  {
    title: "+4000",
    subtitle: "élèves formés",
    url: "/img/svg/certification/person.svg",
  },
  {
    title: "4,8/5",
    subtitle: "sur Google",
    url: "/img/svg/certification/heart.svg",
  },
  {
    title: "+17 ans",
    subtitle: "d'expertise",
    url: "/img/svg/certification/cake.svg",
  },
];

export const Certification = () => {
  return (
    <Section classname="flex flex-col gap-16 md:gap-24 mb-12 sm:mb-20">
      <h3 className="font-sans text-[24px] md:text-[32px] font-extrabold text-primary md:text-center px-4">
        Une auto-école <span className="text-secondary">certifiée</span>
      </h3>
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {picto.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
            >
              <Picto
                src={item.url}
                alt={item.title}
                width={80}
                height={80}
                styleType="ghost"
              />
              <div>
                <h4 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-primary">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base lg:text-[16px] font-medium text-primary">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <Link href={"/engagement-qualite"}>
            <Image
              src={"/img/logo-certification-qualiopi.webp"}
              alt="Certification Qualiopi"
              width={215}
              height={115}
              className="opacity-50 w-auto h-[90px] md:h-[115px] hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          </Link>

          <Link
            href={"/pdf/certif-qualite.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/img/ecole-conduite-qualite-certification.png"}
              alt="Certification Ecole Conduite Qualité"
              width={120.42}
              height={115}
              className="opacity-50 w-auto h-[90px] md:h-[115px] hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};
