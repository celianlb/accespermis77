interface DescriptionSectionProps {
  title: string;
  whatIsIt: string;
  whatIsItFor: string;
  whatIsItImage?: string;
  whatIsItForImage?: string;
  bgColor?: string;
}

export default function DescriptionSection({
  title,
  whatIsIt,
  whatIsItFor,
  whatIsItImage,
  whatIsItForImage,
  bgColor = "bg-white",
}: DescriptionSectionProps) {
  return (
    <section className={`py-16 `}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tout savoir sur le <span className="text-primary">{title}</span>
            </h2>
          </div>

          <div className="space-y-20">
            {/* Qu'est-ce que - Image à gauche, texte à droite */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                {whatIsItImage ? (
                  <div className="flex items-center justify-center">
                    <img
                      src={whatIsItImage}
                      alt={`Illustration ${title}`}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p>Image {title}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Qu'est-ce que le {title} ?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {whatIsIt}
                </p>
              </div>
            </div>

            {/* À quoi sert - Image à droite, texte à gauche */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-6">
                  À quoi sert le {title} ?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {whatIsItFor}
                </p>
              </div>

              <div>
                {whatIsItForImage ? (
                  <div className="flex items-center justify-center">
                    <img
                      src={whatIsItForImage}
                      alt={`Utilité ${title}`}
                      className="w-full h-64 object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-80 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-16 h-16 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <p>Utilité {title}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
