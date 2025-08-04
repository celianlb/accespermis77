import clsx from "clsx";
import Image from "next/image";

interface PictoProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  styleType?: "primary" | "secondary" | "ghost";
  isRotated?: boolean;
  classname?: string;
}

export const Picto = ({
  src,
  width,
  height,
  alt,
  styleType = "primary",
  isRotated = false,
  classname,
}: PictoProps) => {
  const pictoClasses = clsx(
    "p-4 w-[60px] h-[60px] flex justify-center rounded-xl border-[1px] border-secondary",
    {
      "bg-primary": styleType === "primary",
      "bg-lightgray": styleType === "secondary",
      "bg-transparent": styleType === "ghost",
      "text-secondary": styleType !== "ghost",
      "rotate-45": isRotated,
    }
  );

  return (
    <div className={`${pictoClasses}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={clsx(
          "w-auto h-auto",
          {
            "-rotate-45": isRotated,
          },
          classname
        )}
      />
    </div>
  );
};
