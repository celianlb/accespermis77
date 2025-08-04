import Link from "next/link";

const NavList = () => {
  return (
    <ul className="absolute flex flex-col gap-4 text-primary min-w-max p-4 rounded-xl border border-secondary mt-1">
      <li>
        <Link href="/permis-b-manuelle">Permis B Manuelle</Link>
      </li>
      <li>
        <Link href="/permis-b-automatique">Permis B Automatique</Link>
      </li>
      <li>
        <Link href="/conduite-accompagnee">Conduite accompagnée</Link>
      </li>
      <li>
        <Link href="/conduite-supervisee">Conduite supervisée</Link>
      </li>
      <li>
        <Link href="/permis-am">Permis AM</Link>
      </li>
      <li>
        <Link href="/passerelle-auto-vers-manuelle">
          Passerelle Automatique vers Manuelle
        </Link>
      </li>
      <li>
        <Link href="/annulation-ou-permis-etranger">
          Annulation ou permis étranger
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
