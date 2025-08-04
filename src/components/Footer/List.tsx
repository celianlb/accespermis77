const footerLists = [
  {
    title: "Les permis",
    items: [
      "Le code de la route",
      "Permis B",
      "Permis Moto",
      "Conduite supervisée",
      "Conduite accompagnée",
    ],
  },
  {
    title: "Informations",
    items: ["FAQ", "Locations", "Témoignages", "Partenaires"],
  },
  {
    title: "Mentions légales",
    items: [
      "Règlement intérieur",
      "Nos engagements",
      "Les enjeux de la formation",
      "Informations handicap",
    ],
  },
];

export const List = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
      {footerLists.map((list, index) => (
        <div key={index}>
          <h5 className="text-[16px] font-bold text-secondary mb-8">
            {list.title}
          </h5>
          <ul className="space-y-4">
            {list.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
