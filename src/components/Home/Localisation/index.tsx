import { Section } from "@/components/ui/Section";
import { Info } from "./Info";
import { Map } from "./Map";

export const Localisation = () => {
  return (
    <Section classname="bg-beige py-[100px] ">
      <h3 className="text-[24px] md:text-[32px] font-extrabold mb-16 md:mb-24">
        Où nous trouver ?
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        <div className="lg:col-span-1">
          <Info />
        </div>
        <div className="lg:col-span-2">
          <Map />
        </div>
      </div>
    </Section>
  );
};
