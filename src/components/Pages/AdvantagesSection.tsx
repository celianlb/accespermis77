import { ReactNode } from "react";

interface Advantage {
  title: string;
  description: string;
  icon: ReactNode;
}

interface AdvantagesSectionProps {
  title?: string;
  advantages: Advantage[];
  bgColor?: string;
  columns?: 2 | 3 | 4;
}

export default function AdvantagesSection({
  title = "Pourquoi nous choisir ?",
  advantages,
  bgColor = "bg-white",
  columns = 3,
}: AdvantagesSectionProps) {
  const gridClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={`py-40 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-24">
            {title}
          </h2>

          <div className={`grid ${gridClasses[columns]} gap-8`}>
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-secondary/20">
                  <div className="text-3xl text-secondary">
                    {advantage.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-4">
                  {advantage.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
