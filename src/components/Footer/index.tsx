import Image from "next/image";
import Link from "next/link";
import {
  FaCar,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPhone,
} from "react-icons/fa";

var year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et infos générales */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/img/logo-acces-permis77-auto-ecole.svg"
                width={80}
                height={80}
                alt="Logo Accès Permis 77"
                className=""
              />
            </Link>
            <h3 className="font-bold text-lg mb-3">Accès Permis 77</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Votre auto-école de confiance en Seine-et-Marne. Formation
              complète au permis de conduire depuis plus de 10 ans.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <FaMapMarkerAlt className="text-secondary flex-shrink-0" />
              <span>77181 Courtry</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <FaPhone className="text-secondary flex-shrink-0" />
              <span>0160081911</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <FaEnvelope className="text-secondary flex-shrink-0" />
              <span>accespermis77@gmail.com</span>
            </div>
          </div>

          {/* Formations Auto */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FaCar className="text-secondary" />
              Formations Auto
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/permis-auto/permis-b"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Permis B
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-auto/permis-bea"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Permis BEA (Automatique)
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-auto/conduite-accompagnee-manuelle"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Conduite Accompagnée
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-auto/formation-am"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Formation AM
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-acceleres/permis-b"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Permis Accéléré
                </Link>
              </li>
              <li>
                <Link
                  href="/code-de-la-route"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Code de la route
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations Moto */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FaMotorcycle className="text-secondary" />
              Formations Moto
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/permis-moto/permis-125-a1"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Permis A1 (125cc)
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-moto/permis-a2"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Permis A2
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-moto/passerelle-a2-vers-a"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Passerelle A2 vers A
                </Link>
              </li>
              <li>
                <Link
                  href="/permis-moto/formation-125"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Formation 125
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations pratiques */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FaClock className="text-secondary" />
              Informations
            </h4>
            <div className="space-y-3 mb-6">
              <div>
                <p className="font-medium text-sm mb-1">
                  Horaires d'ouverture :
                </p>
                <p className="text-white/80 text-xs">
                  Mar-Sam : 10h-14 & 16h-19h
                </p>
              </div>
              <div>
                <p className="font-medium text-sm mb-1">Paiements acceptés :</p>
                <p className="text-white/80 text-xs">CB, Espèces, Chèques</p>
                <p className="text-white/80 text-xs">Financement CPF</p>
              </div>
            </div>

            {/* Certification Qualiopi */}
            <div className="mb-6">
              <a
                href="/certificat-qualiopi-acces-permis-77.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                title="Télécharger le certificat Qualiopi"
              >
                <Image
                  src="/img/logo-certification-qualiopi.webp"
                  width={120}
                  height={40}
                  alt="Certification Qualiopi"
                  className="rounded"
                />
              </a>
            </div>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-white/80 hover:text-secondary transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary-dark border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {year} Accès Permis 77. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-white/60 text-xs">
                Auto-école agréée • SIRET : 881 564 546 00029
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
