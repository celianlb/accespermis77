"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavElementProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const NavElement = ({ href, children, isActive, onClick }: NavElementProps) => {
  return (
    <li
      onClick={onClick}
      className={`border ${
        isActive ? "border-secondary" : "border-transparent"
      } hover:border-secondary hover:text-secondary leading-none p-2 rounded-lg duration-200 box-border cursor-pointer`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Nav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="font-serif">
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? <IoClose size={32} /> : <RxHamburgerMenu size={32} />}
      </button>

      <ul
        className={`md:flex gap-10 font-semibold ${
          isOpen
            ? "flex flex-col absolute top-full left-0 right-0 bg-white p-4 shadow-md"
            : "hidden"
        }`}
      >
        <NavElement
          href="/code-de-la-route"
          isActive={path === "/faqs"}
          onClick={closeMenu}
        >
          Code de la route
        </NavElement>
        <NavElement
          href="/permis-b"
          isActive={path === "/permis-b"}
          onClick={closeMenu}
        >
          Permis B
        </NavElement>
        <NavElement
          href="/permis-moto"
          isActive={path === "/permis-moto"}
          onClick={closeMenu}
        >
          Permis moto
        </NavElement>
      </ul>
    </nav>
  );
};

export default Nav;
