import clsx from "clsx";

interface CTAProps {
  children: React.ReactNode;
  classname?: string;
  variant?: "primary" | "secondary";
}

export const CTA = ({ children, classname, variant = "primary" }: CTAProps) => {
  return (
    <button
      className={clsx(
        "font-semibold text-[16px] p-[10px] leading-none rounded-lg  transition duration-300 ",
        {
          "bg-primary border-[1px] text-white hover:bg-opacity-70 hover:shadow-sm hover:shadow-primary active:bg-opacity-90":
            variant === "primary",
          "bg-white text-primary border-[1px] border-primary hover:bg-secondary hover:text-white hover:border-white active:bg-opacity-90 hover:shadow-sm hover:shadow-white":
            variant === "secondary",
        },
        classname
      )}
    >
      {children}
    </button>
  );
};
