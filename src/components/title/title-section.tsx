export type TitleToSectionPropsType = {
  title: string;
  description: string;
  customClassName?: string;
  children?: React.ReactNode;
};

export const TitleToSection = ({
  title,
  description,
  customClassName = '',
  children,
}: TitleToSectionPropsType) => (
  <section
    className={`title-section mx-auto flex flex-col items-center justify-center space-y-4 ${customClassName}`}
  >
    <h2 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: description }} />
    {children}
  </section>
);
