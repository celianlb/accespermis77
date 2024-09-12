import { Section } from "@/components/ui/Section";
import { CardList } from "./Card";

export const Formules = () => {
  return (
    <Section classname=" flex flex-col items-center gap-16 md:gap-24 mt-[80px] md:mt-[180px]">
      <h3 className="text-primary text-[24px] md:text-[32px] font-extrabold">
        Les formules
      </h3>
      <CardList />
    </Section>
  );
};
