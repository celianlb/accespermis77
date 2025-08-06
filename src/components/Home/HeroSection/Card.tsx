import { CTA } from "../../ui/CTA";

interface CardProps {
  title: string;
  price: number;
  classname?: string;
  link?: string;
}

export const Card = ({ title, price, classname, link }: CardProps) => {
  return (
    <div
      className={`flex flex-col z-10 justify-between p-10 h-[280px] bg-white rounded-lg w-fit font-medium ${classname}`}
    >
      <h3>{title}</h3>
      <div className="flex flex-col">
        <div>
          <p>à partir de</p>
          <p className=" text-secondary text-5xl font-bold">{price}€</p>
        </div>
      </div>
      <CTA href={link}>Je découvre</CTA>
    </div>
  );
};
