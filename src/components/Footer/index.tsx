import Image from "next/image";
import { List } from "./List";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] xl:grid-rows-1 grid-rows-[auto_auto_1fr] py-16 px-10 lg:px-[150px] gap-8 items-start">
      <Logo className="xl:col-start-1 xl:row-start-1" />
      <Image
        src="/img/le-permis-a-un-euro-par-jour.jpg"
        alt="logo"
        width={100}
        height={100}
        className="w-auto h-auto object-contain justify-self-center xl:col-start-2 xl:row-start-1"
      />
      <List />
    </footer>
  );
};
