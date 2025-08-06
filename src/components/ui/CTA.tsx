import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface BaseCTAProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

interface ButtonCTAProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'>, BaseCTAProps {
  href?: never;
}

interface LinkCTAProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'>, BaseCTAProps {
  href: string;
}

type CTAProps = ButtonCTAProps | LinkCTAProps;

export const CTA = ({ 
  children, 
  className, 
  variant = "primary", 
  size = "md",
  ...props 
}: CTAProps) => {
  const baseClasses = clsx(
    "font-semibold leading-none rounded-lg transition duration-300 border inline-block text-center",
    {
      // Variants
      "bg-primary border-primary text-white hover:bg-opacity-80 hover:shadow-sm hover:shadow-primary/30 active:bg-opacity-90":
        variant === "primary",
      "bg-white text-primary border-primary hover:bg-secondary hover:text-white hover:border-secondary active:bg-opacity-90 hover:shadow-sm hover:shadow-secondary/30":
        variant === "secondary",
      
      // Sizes
      "text-sm px-3 py-2": size === "sm",
      "text-base px-4 py-2.5": size === "md", 
      "text-lg px-6 py-3": size === "lg",
    },
    className
  );

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as LinkCTAProps;
    return (
      <Link href={href} className={baseClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonCTAProps;
  return (
    <button className={baseClasses} {...buttonProps}>
      {children}
    </button>
  );
};
