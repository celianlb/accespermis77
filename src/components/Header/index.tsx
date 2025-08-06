"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CTA } from "../ui/CTA";
import Nav from "./Nav";

const Header = () => {
  const [bgColor, setBgColor] = useState("bg-beige");

  useEffect(() => {
    const handleScroll = () => {
      const showWhiteBg = window.scrollY > 0;
      setBgColor(showWhiteBg ? "bg-white" : "bg-beige");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex z-30 justify-between items-center text-primary py-6 ${bgColor} md:px-[100px] px-[40px] sticky top-0 w-full transition duration-300`}
    >
      <Link href="/">
        <Image
          src="/img/logo-acces-permis77-auto-ecole.svg"
          width={70}
          height={70}
          alt="Logo Acces Permis 77"
        />
      </Link>
      <Nav />
      <CTA href="/toutes-les-offres">Je veux conduire</CTA>
    </header>
  );
};

export default Header;
