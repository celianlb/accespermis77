import Image from "next/image";

export const Mockup = () => {
  return (
    <Image
      src="/img/coderousseau/mockup-coderousseau.png"
      alt="Code Rousseau"
      width={1227}
      height={742}
      quality={100}
      unoptimized
      className="w-full lg:w-2/3 rounded-xl h-auto shadow-[7px_12px_31px_0px_rgba(53,46,29,0.20)]"
    />
  );
};
