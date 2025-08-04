interface SectionProps {
  classname?: string;
  children: React.ReactNode;
}

export const Section = ({ classname, children }: SectionProps) => {
  return (
    <section className={`px-[40px] md:px-[150px] ${classname}`}>
      {children}
    </section>
  );
};
