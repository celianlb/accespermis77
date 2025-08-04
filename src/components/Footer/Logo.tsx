import Image from "next/image";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Image
        src="/img/logo-var.png"
        alt="logo"
        width={300}
        height={100}
        className="w-[300px] h-auto mb-6"
      />
      <p className="text-sm">
        Nous fournissons un service honorable et professionnel qui vise à vous
        donner la confiance nécessaire pour réussir votre examen et conduire en
        toute sécurité sur les routes.
      </p>
    </div>
  );
};
