"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FaCar,
  FaCog,
  FaGraduationCap,
  FaMotorcycle,
  FaRoad,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

interface SubMenuItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavElementProps {
  href?: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  submenu?: SubMenuItem[];
  isMobile?: boolean;
  isSubmenuOpen?: boolean;
  onToggleSubmenu?: () => void;
}

const NavElement = ({
  href,
  children,
  isActive,
  onClick,
  submenu,
  isMobile,
  isSubmenuOpen: externalSubmenuOpen,
  onToggleSubmenu,
}: NavElementProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSubmenuOpen(false);
      }
    };

    if (isSubmenuOpen && !isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubmenuOpen, isMobile]);

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (submenu) {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile && onToggleSubmenu) {
        onToggleSubmenu();
      } else {
        setIsSubmenuOpen(!isSubmenuOpen);
      }
    }
  };

  const handleSubmenuClick = () => {
    setIsSubmenuOpen(false);
    onClick();
  };

  const submenuIsOpen = isMobile ? externalSubmenuOpen : isSubmenuOpen;

  if (isMobile && submenu) {
    return (
      <li className="w-full">
        <div
          onClick={toggleSubmenu}
          className={`border ${
            isActive ? "border-secondary" : "border-transparent"
          } hover:border-secondary hover:text-secondary leading-none p-3 rounded-lg duration-200 box-border cursor-pointer flex items-center justify-between w-full`}
        >
          <span>{children}</span>
          <MdOutlineKeyboardArrowDown
            className={`transition-transform duration-200 ${submenuIsOpen ? "rotate-180" : ""}`}
          />
        </div>
        {submenuIsOpen && (
          <ul className="mt-3 ml-2 space-y-1 animate-in slide-in-from-top-1 duration-300">
            {submenu.map((item, index) => (
              <li key={index} className="group">
                <Link
                  href={item.href}
                  onClick={handleSubmenuClick}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:text-secondary hover:bg-gradient-to-r hover:from-secondary/10 hover:to-transparent rounded-lg transition-all duration-300 ease-out group-hover:translate-x-1 border border-transparent hover:border-secondary/20"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-secondary/15 group-hover:to-secondary/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="flex-1 leading-tight">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="relative" ref={dropdownRef}>
      <div
        onClick={submenu ? toggleSubmenu : onClick}
        className={`border ${
          isActive ? "border-secondary" : "border-transparent"
        } hover:border-secondary hover:text-secondary leading-none p-2 rounded-lg duration-200 box-border cursor-pointer flex items-center gap-1`}
      >
        {href && !submenu ? (
          <Link href={href}>{children}</Link>
        ) : (
          <span className="flex items-center gap-1">
            {children}
            {submenu && (
              <MdOutlineKeyboardArrowDown
                className={`transition-transform duration-200 ${submenuIsOpen ? "rotate-180" : ""}`}
              />
            )}
          </span>
        )}
      </div>
      {submenu && submenuIsOpen && !isMobile && (
        <ul className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl border border-gray-100 min-w-[280px] z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {submenu.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                onClick={handleSubmenuClick}
                className="flex items-center gap-4 px-6 py-4 text-sm font-medium text-gray-700 hover:text-secondary hover:bg-gradient-to-r hover:from-secondary/5 hover:to-transparent transition-all duration-300 ease-out group-hover:translate-x-1"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-secondary/10 group-hover:to-secondary/5 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="flex-1 leading-tight">{item.label}</span>
                <svg
                  className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          ))}
          <div className="h-2 bg-gradient-to-b from-transparent to-gray-50/50"></div>
        </ul>
      )}
    </li>
  );
};

const Nav = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubmenu(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenuMobile = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const permisAutoSubmenu: SubMenuItem[] = [
    {
      href: "/permis-auto/permis-b",
      label: "Permis B",
      icon: <FaCar className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-auto/permis-bea",
      label: "Permis BEA (Automatique)",
      icon: <FaCog className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-auto/passerelle-bea-vers-b",
      label: "Passerelle BEA vers B",
      icon: <FaRoad className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-auto/conduite-accompagnee-manuelle",
      label: "Conduite Accompagnée Manuelle",
      icon: <FaUsers className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-auto/conduite-accompagnee-automatique",
      label: "Conduite Accompagnée Automatique",
      icon: <FaUsers className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-auto/formation-am",
      label: "Formation AM",
      icon: (
        <FaGraduationCap className="text-secondary text-lg flex-shrink-0" />
      ),
    },
  ];

  const permisMotoSubmenu: SubMenuItem[] = [
    {
      href: "/permis-moto/permis-125-a1",
      label: "Permis 125 A1",
      icon: <FaMotorcycle className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-moto/permis-a2",
      label: "Permis A2",
      icon: <FaMotorcycle className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-moto/passerelle-a2-vers-a",
      label: "Passerelle A2 vers A",
      icon: <FaRoad className="text-secondary text-lg flex-shrink-0" />,
    },
    {
      href: "/permis-moto/formation-125",
      label: "Formation 125",
      icon: (
        <FaGraduationCap className="text-secondary text-lg flex-shrink-0" />
      ),
    },
  ];

  const permisAcceleresSubmenu: SubMenuItem[] = [
    {
      href: "/permis-acceleres/permis-b",
      label: "Permis B",
      icon: (
        <FaTachometerAlt className="text-secondary text-lg flex-shrink-0" />
      ),
    },
    {
      href: "/permis-acceleres/permis-bea",
      label: "Permis BEA (Automatique)",
      icon: (
        <FaTachometerAlt className="text-secondary text-lg flex-shrink-0" />
      ),
    },
  ];

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
            ? "flex flex-col absolute top-full left-0 right-0 bg-white p-4 shadow-md w-full"
            : "hidden"
        }`}
      >
        <NavElement
          href="/code-de-la-route"
          isActive={path === "/code-de-la-route"}
          onClick={closeMenu}
          isMobile={isOpen}
        >
          Code de la route
        </NavElement>
        <NavElement
          isActive={path.startsWith("/permis-auto")}
          onClick={closeMenu}
          submenu={permisAutoSubmenu}
          isMobile={isOpen}
          isSubmenuOpen={openSubmenu === "permis-auto"}
          onToggleSubmenu={() => toggleSubmenuMobile("permis-auto")}
        >
          Permis Auto
        </NavElement>
        <NavElement
          isActive={path.startsWith("/permis-moto")}
          onClick={closeMenu}
          submenu={permisMotoSubmenu}
          isMobile={isOpen}
          isSubmenuOpen={openSubmenu === "permis-moto"}
          onToggleSubmenu={() => toggleSubmenuMobile("permis-moto")}
        >
          Permis Moto
        </NavElement>
        <NavElement
          isActive={path.startsWith("/permis-acceleres")}
          onClick={closeMenu}
          submenu={permisAcceleresSubmenu}
          isMobile={isOpen}
          isSubmenuOpen={openSubmenu === "permis-acceleres"}
          onToggleSubmenu={() => toggleSubmenuMobile("permis-acceleres")}
        >
          Permis Accélérés
        </NavElement>
        <NavElement
          href="/engagement-qualite"
          isActive={path === "/engagement-qualite"}
          onClick={closeMenu}
          isMobile={isOpen}
        >
          Engagement & Qualité
        </NavElement>
      </ul>
    </nav>
  );
};

export default Nav;
