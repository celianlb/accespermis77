"use client";

import { useState } from "react";
import Link from "next/link";

interface PricingItem {
  label: string;
  price?: string;
  included?: boolean;
  description?: string;
}

interface PricingPackage {
  name: string;
  price: string;
  duration?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

interface PaymentSchedule {
  step: string;
  amount: string;
  description: string;
}

interface PaymentOption {
  hours: string;
  schedule: PaymentSchedule[];
}

interface PricingSectionProps {
  title?: string;
  packages?: PricingPackage[];
  includedItems?: PricingItem[];
  paymentOptions?: PaymentOption[];
  additionalInfo?: string[];
}

export default function PricingSection({
  title = "Nos tarifs et formules",
  packages = [],
  includedItems = [],
  paymentOptions = [],
  additionalInfo = [],
}: PricingSectionProps) {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(0);
  return (
    <section id="pricing" className="py-40 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-sans font-bold  text-gray-800 mb-24">
            {title}
          </h2>

          {/* Pricing Packages */}
          {packages.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg p-8 relative border-2 ${
                    pkg.highlighted
                      ? "border-secondary transform scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                    {pkg.duration && (
                      <p className="text-gray-600 text-sm">{pkg.duration}</p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 text-lg">✓</span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?formule=${encodeURIComponent(pkg.name)}&prix=${encodeURIComponent(pkg.price)}`}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                      pkg.highlighted
                        ? "bg-secondary text-white hover:bg-secondary/90"
                        : "border border-secondary text-secondary hover:bg-secondary/10"
                    }`}
                  >
                    Choisir cette formule
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Included Items */}
          {includedItems.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Ce qui est inclus
              </h3>
              <div className="space-y-4">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div>
                      <span className="text-gray-800 font-medium">
                        {item.label}
                      </span>
                      {item.description && (
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {item.price ? (
                        <span className="font-bold text-gray-800">
                          {item.price}
                        </span>
                      ) : item.included ? (
                        <span className="text-green-600 font-semibold">
                          ✓ Inclus
                        </span>
                      ) : (
                        <span className="text-gray-500">En option</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payment Schedule */}
          {paymentOptions.length > 0 && (
            <div className="bg-beige/30 rounded-2xl p-8 mb-12 border-2 border-secondary/20">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-primary">
                  Modalités de règlement
                </h3>

                {/* Hour Selection Tabs */}
                <div className="flex bg-white rounded-lg p-1 shadow-sm border border-secondary/20">
                  {paymentOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPaymentOption(index)}
                      className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                        selectedPaymentOption === index
                          ? "bg-secondary text-white shadow-sm"
                          : "text-primary hover:bg-secondary/10"
                      }`}
                    >
                      {option.hours}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className={`grid ${paymentOptions[selectedPaymentOption]?.schedule.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-6`}
              >
                {paymentOptions[selectedPaymentOption]?.schedule.map(
                  (payment, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary/10 hover:shadow-md transition-shadow duration-300">
                        <div className="bg-secondary/15 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-secondary font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="font-semibold text-primary mb-2 text-sm">
                          {payment.step}
                        </h4>
                        <div className="text-2xl font-bold text-secondary mb-2">
                          {payment.amount}
                        </div>
                        <p className="text-gray-700 text-xs leading-tight">
                          {payment.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Additional Info */}
          {additionalInfo.length > 0 && (
            <div className="bg-white rounded-2xl p-8 ">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                Informations importantes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {additionalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-beige/20 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
                  >
                    <div className="bg-secondary/15 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-secondary font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed text-sm">
                      {info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
