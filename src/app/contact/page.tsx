"use client";

import ContactForm from "@/components/Contact/ContactForm";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const permis = searchParams.get("permis");
  const forfait = searchParams.get("forfait");
  const prix = searchParams.get("prix");

  return (
    <ContactForm
      selectedPermis={permis || ""}
      selectedForfait={forfait || ""}
      selectedPrice={prix || ""}
    />
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-beige/30 to-white py-20">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nous sommes à votre écoute
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prenez contact avec notre équipe pour obtenir toutes les
            informations dont vous avez besoin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <Suspense
            fallback={
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                  <div className="h-12 bg-gray-200 rounded"></div>
                </div>
              </div>
            }
          >
            <ContactFormWrapper />
          </Suspense>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Adresse
                    </h3>
                    <p className="text-gray-600 text-sm">
                      13/15 rue Louis Osteng
                      <br />
                      77181, Courtry
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Téléphone
                    </h3>
                    <a
                      href="tel:0160227277"
                      className="text-secondary hover:underline font-medium"
                    >
                      01 60 08 19 11
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a
                      href="mailto:accespermis77@orange.fr"
                      className="text-secondary hover:underline break-all"
                    >
                      accespermis77@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Horaires d'ouverture
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Lundi</span>
                  <span className="text-red-600 font-semibold">Fermé</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mardi</span>
                  <span className="text-gray-600">10h-14h - 16h-19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Mercredi</span>
                  <span className="text-gray-600">10h-14h - 16h-19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Jeudi</span>
                  <span className="text-gray-600">10h-14h - 16h-19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Vendredi</span>
                  <span className="text-gray-600">10h-14h - 16h-19h</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Samedi</span>
                  <span className="text-gray-600">10h-14h - 16h-19h</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Dimanche</span>
                  <span className="text-red-600 font-semibold">Fermé</span>
                </div>
              </div>
            </div>

            {/* Info complémentaire */}
            <div className="bg-secondary/10 rounded-2xl p-6 border-2 border-secondary/20">
              <p className="text-gray-700 text-sm leading-relaxed">
                <span className="font-semibold text-secondary">
                  Notre équipe est à votre disposition
                </span>{" "}
                pour répondre à toutes vos questions et vous accompagner dans
                votre projet de formation. N'hésitez pas à nous contacter !
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
