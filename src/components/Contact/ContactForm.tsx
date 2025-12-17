"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  selectedFormula?: string;
  selectedPrice?: string;
}

export default function ContactForm({
  selectedFormula,
  selectedPrice,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    formule: selectedFormula || "",
    message: "",
  });

  // Mettre à jour la formule quand selectedFormula change
  useEffect(() => {
    if (selectedFormula) {
      setFormData((prev) => ({
        ...prev,
        formule: selectedFormula,
      }));
    }
  }, [selectedFormula]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // TODO: Remplacer par votre endpoint API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.",
        });
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          formule: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Contactez-nous
        </h2>
        <p className="text-gray-600">
          Remplissez le formulaire ci-dessous et nous vous recontacterons dans
          les plus brefs délais pour discuter de votre projet.
        </p>
        {selectedFormula && (
          <div className="mt-4 p-4 bg-secondary/10 rounded-lg border border-secondary/20">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Formule sélectionnée :</span>{" "}
              {selectedFormula}
              {selectedPrice && (
                <span className="ml-2 text-secondary font-bold">
                  {selectedPrice}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Nom */}
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              placeholder="Votre nom"
            />
          </div>

          {/* Prénom */}
          <div>
            <label
              htmlFor="prenom"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              placeholder="Votre prénom"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              placeholder="votre.email@exemple.com"
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="telephone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              placeholder="06 12 34 56 78"
            />
          </div>
        </div>

        {/* Formule */}
        <div>
          <label
            htmlFor="formule"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Formule souhaitée
          </label>
          <select
            id="formule"
            name="formule"
            value={formData.formule}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
          >
            <option value="">Sélectionnez une formule</option>
            <option value="Permis B">Permis B</option>
            <option value="Permis BEA">Permis BEA (Boîte automatique)</option>
            <option value="Conduite accompagnée manuelle">
              Conduite accompagnée manuelle
            </option>
            <option value="Conduite accompagnée automatique">
              Conduite accompagnée automatique
            </option>
            <option value="Formation AM">Formation AM</option>
            <option value="Passerelle BEA vers B">Passerelle BEA vers B</option>
            <option value="Permis A2">Permis A2</option>
            <option value="Permis 125 A1">Permis 125 A1</option>
            <option value="Passerelle A2 vers A">Passerelle A2 vers A</option>
            <option value="Formation 125">Formation 125</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
            placeholder="Décrivez votre projet ou posez-nous vos questions..."
          />
        </div>

        {/* Message de statut */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        {/* Bouton Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-white py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Envoi en cours...
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          * Champs obligatoires
        </p>
      </form>
    </div>
  );
}
