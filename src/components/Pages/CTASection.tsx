import { FaEnvelope, FaPhone } from "react-icons/fa";

interface CTAButton {
  text: string;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
}

interface CTASectionProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
}

export default function CTASection({
  title,
  description,
  buttons,
}: CTASectionProps) {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(238, 172, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(238, 172, 0, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>

          {description && (
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              {description}
            </p>
          )}

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-white/70 mb-3">
              Contactez-nous directement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="tel:0164879271"
                className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaPhone className="text-sm" /> 01 64 87 92 71
              </a>
              <span className="hidden sm:block text-white/50">•</span>
              <a
                href="mailto:contact@accespermis77.fr"
                className="text-white/90 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaEnvelope className="text-sm" /> contact@accespermis77.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
