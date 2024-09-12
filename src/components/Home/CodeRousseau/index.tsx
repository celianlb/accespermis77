import { Section } from "@/components/ui/Section";
import { Mockup } from "./Mockup";
import { Step } from "./Step";

export const CodeRousseau = () => {
  return (
    <Section classname="flex flex-col gap-16 md:gap-24">
      <h3 className="text-[24px] md:text-[32px] font-sans font-extrabold">
        Passez votre code avec Code Rousseau
      </h3>
      <div className="flex flex-col lg:flex-row w-full gap-12">
        <Mockup />
        <Step />
      </div>
    </Section>
  );
};
