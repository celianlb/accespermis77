import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Section } from "../ui/Section";

const review = [
  {
    name: "Lorenzo Canciani",
    review:
      "je me suis inscrit il y a un mois et demi pour passer mon permis B , j’ai pris la formule accélérée .Tous les délais ont été respectées, ils étaient même en avance pour ma part le personnel est à l’écoute Toutes les demandes ont été faites super rapidement , les moniteurs m’ont appris À conduire avec le sourire et on su régler Toutes les difficultés Rencontrées Durant mon apprentissage .Que demander de mieux Des auto-écoles comme eux, il y en a pas à tous les coins de rue .",
    rate: 5,
    when: "Il y a 3 semaines",
    url: "https://www.google.com/search?sa=X&sca_esv=edac8ac752a361e3&sca_upv=1&hl=fr-FR&biw=1492&bih=924&tbm=lcl&sxsrf=ADLYWII48worqRuQZRM3rSd26tc4vIwN3g:1725971892546&q=avis%20sur%20acces%20permis%2077&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDeztDAwtTCwMDG0MDYyNDA2M9vAyPiKUSKxLLNYobi0SCExOTm1WKEgtSgXKGBuvogVpxQA8YLF1lEAAAA&rldimm=17698058084183210366&ved=0CAcQ5foLahcKEwj45IywsriIAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUM3MHRHdnpnRRAB",
  },
  {
    name: "Sirin Aouchiche",
    review:
      "Équipe incroyable, moniteurs très pédagogues. Ils ont su me mettre à l’aise dés le premier cours et m’ont donné confiance en mes capacités. Je recommande vivement cette auto école à tous ceux qui cherchent une formation de qualité. Merci encore à toute l’équipe !",
    rate: 5,
    when: "Il y a 3 mois",
    url: "https://www.google.com/search?sa=X&sca_esv=edac8ac752a361e3&sca_upv=1&hl=fr-FR&biw=1492&bih=924&tbm=lcl&sxsrf=ADLYWII48worqRuQZRM3rSd26tc4vIwN3g:1725971892546&q=avis%20sur%20acces%20permis%2077&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDeztDAwtTCwMDG0MDYyNDA2M9vAyPiKUSKxLLNYobi0SCExOTm1WKEgtSgXKGBuvogVpxQA8YLF1lEAAAA&rldimm=17698058084183210366&ved=0CAwQ5foLahcKEwj45IywsriIAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChRDSUhNMG9nS0VJQ0FnSUNUamZNUhAB",
  },
  {
    name: "Hugo Rudloff",
    review:
      "L'auto-école Permis 77 mérite une reconnaissance sérieuse pour son enseignement de qualité et son équipe exceptionnelle. Les moniteurs, en particulier Tourkia, font preuve d'un professionnalisme exemplaire, d'une grande gentillesse et d'une patience remarquable. Leur expertise et leur soutien ont grandement contribué à mon développement en tant que conducteur. L'approche pédagogique progressive de l'école m'a permis d'acquérir des compétences solides tout en me mettant à l'aise derrière le volant. L'atmosphère familiale de l'équipe a également joué un rôle crucial dans mon expérience positive. Je recommande vivement Permis 77 à tous ceux qui recherchent une formation de conduite sérieuse et de qualité. Un grand merci à Tourkia et à toute l'équipe pour leur dévouement et leur accompagnement précieux.",
    rate: 5,
    when: "Il y a 4 mois",
    url: "https://www.google.com/search?sa=X&sca_esv=edac8ac752a361e3&sca_upv=1&hl=fr-FR&biw=1492&bih=924&tbm=lcl&sxsrf=ADLYWII48worqRuQZRM3rSd26tc4vIwN3g:1725971892546&q=avis%20sur%20acces%20permis%2077&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDeztDAwtTCwMDG0MDYyNDA2M9vAyPiKUSKxLLNYobi0SCExOTm1WKEgtSgXKGBuvogVpxQA8YLF1lEAAAA&rldimm=17698058084183210366&ved=0CBEQ5foLahcKEwj45IywsriIAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChZDSUhNMG9nS0VJQ0FnSUNqdG9yMER3EAE",
  },
];

interface ReviewProps {
  name: string;
  review: string;
  rate: number;
  when: string;
  url: string;
}

const OneReview = ({ name, review, rate, when, url }: ReviewProps) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-gray-300" />
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="flex flex-col items-center gap-6 hover:cursor-pointer"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {renderStars(rate)}
      <Image
        src="/img/google-icon.png"
        alt="google"
        width={300}
        height={300}
        className=" w-5 h-5"
      />

      <p className="line-clamp-5 overflow-hidden text-[13px]">{review}</p>
      <div className="flex flex-col items-center gap-4 ">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{when}</p>
      </div>
    </div>
  );
};

export const Review = () => {
  return (
    <Section classname="flex flex-col gap-16 md:gap-24 mt-[80px] mb-[120px]  md:mt-[180px] md:mb-[240px]">
      <h3 className="text-[24px] md:text-[32px] mx-auto font-extrabold">
        Ce que disent nos <span className="text-secondary">élèves</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {review.map((item, index) => (
          <OneReview key={index} {...item} />
        ))}
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className=" text-center">
          <span className="font-semibold">Acces Permis 77</span> a une note de{" "}
          <span className="font-semibold">4,8/5</span> sur{" "}
          <span className="font-semibold">101 avis.</span>{" "}
        </p>
        <Image
          src="/img/google-rating-logo.png"
          alt="google rating logo"
          width={1920}
          height={1920}
          className=" w-24 h-auto"
        />
      </div>
    </Section>
  );
};
