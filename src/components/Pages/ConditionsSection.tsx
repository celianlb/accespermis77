import { ReactNode } from "react";

interface Condition {
  label: string;
  value: string;
  icon?: ReactNode;
}

interface ConditionsSectionProps {
  title?: string;
  conditions: Condition[];
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
}

export default function ConditionsSection({
  title = "Conditions d'accès",
  conditions,
  bgColor = "bg-beige/50",
  borderColor = "border-secondary/30",
  textColor = "text-primary",
}: ConditionsSectionProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`${bgColor} ${borderColor} border-2 rounded-2xl p-8 shadow-sm`}
          >
            <h2 className={`text-2xl font-bold ${textColor} mb-6 text-center`}>
              {title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-4">
                  {condition.icon && (
                    <div className="text-2xl flex-shrink-0 text-secondary">
                      {condition.icon}
                    </div>
                  )}
                  <div>
                    <dt className={`font-semibold ${textColor}`}>
                      {condition.label}
                    </dt>
                    <dd className="text-gray-700 text-sm">{condition.value}</dd>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
