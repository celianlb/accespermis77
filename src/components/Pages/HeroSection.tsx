import { ReactNode } from "react";
import { Section } from "../ui/Section";
import { CTA } from "../ui/CTA";

interface Condition {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface PricingOption {
  title: string;
  price: number;
  hours?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: ReactNode;
  pricing?: PricingOption[];
  conditions?: Condition[];
}

export default function HeroSection({
  title,
  subtitle,
  description,
  icon,
  pricing = [],
  conditions = [],
}: HeroSectionProps) {
  return (
    <Section classname="bg-beige py-16 w-full min-h-[70vh] flex flex-col justify-center gap-12 bg-hero-pattern bg-no-repeat bg-right">
      <div className="flex justify-between items-start gap-12">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex items-center gap-4 mb-4">
            {icon && (
              <div className="bg-secondary/10 p-4 rounded-2xl">
                <div className="text-4xl text-secondary">{icon}</div>
              </div>
            )}
            <div>
              <h1 className="font-sans font-extrabold text-[48px] md:text-[64px] text-primary leading-tight">
                {title}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-secondary">
                {subtitle}
              </h2>
            </div>
          </div>

          <p className="font-medium text-lg w-fit md:w-[600px] text-gray-700">
            {description}
          </p>

          {/* Conditions d'accès intégrées */}
          {conditions.length > 0 && (
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border-2 border-secondary/20 max-w-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {conditions.map((condition, index) => (
                  <div key={index} className="">
                    {condition.icon && (
                      <div className="text-2xl text-secondary mb-2">
                        {condition.icon}
                      </div>
                    )}
                    <div className="text-xs font-semibold text-primary mb-1">
                      {condition.label}
                    </div>
                    <div className="text-sm font-bold text-secondary">
                      {condition.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        {pricing.length > 0 && (
          <div className="hidden xl:flex gap-4 flex-shrink-0">
            {pricing.map((option, index) => (
              <div key={index} className="flex flex-col z-10 justify-between p-6 h-[280px] bg-white rounded-lg w-[220px] font-medium shadow-lg">
                <h3 className="text-lg font-semibold text-primary">{option.title}</h3>
                <div className="flex flex-col">
                  <div>
                    <p className="text-gray-600">à partir de</p>
                    <p className="text-secondary text-4xl font-bold">{option.price}€</p>
                    {option.hours && (
                      <p className="text-sm text-gray-600">{option.hours}</p>
                    )}
                  </div>
                </div>
                <CTA href="#pricing">Je découvre</CTA>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Pricing */}
      {pricing.length > 0 && (
        <div className="xl:hidden flex flex-col sm:flex-row gap-4 justify-center">
          {pricing.map((option, index) => (
            <div key={index} className="flex flex-col z-10 justify-between p-6 h-[250px] bg-white rounded-lg w-full sm:w-[200px] font-medium shadow-lg">
              <h3 className="text-base font-semibold text-primary">{option.title}</h3>
              <div className="flex flex-col">
                <div>
                  <p className="text-gray-600 text-sm">à partir de</p>
                  <p className="text-secondary text-3xl font-bold">{option.price}€</p>
                  {option.hours && (
                    <p className="text-xs text-gray-600">{option.hours}</p>
                  )}
                </div>
              </div>
              <CTA href="#pricing" className="text-sm py-2">Je découvre</CTA>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
