export type TitlePagePropsType = {
  title: string;
  description: string;
  customClassName?: string;
  children?: React.ReactNode;
};

export const TitlePage = ({
  title,
  description,
  customClassName = '',
  children,
}: TitlePagePropsType) => (
  <section
    className={`title-section mx-auto flex flex-col items-center space-y-4 pb-12 ${customClassName}`}
  >
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: description }} />
    {children}
  </section>
);
