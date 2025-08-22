import { CardPreview } from '../card/card-preview';
import { TitleToSection } from '../title/title-section';

type SectionContentPreviewPropsType = {
  dictionary: {
    title: string;
    description: string;
    contents: {
      [key: string]: {
        title: string;
        description: string;
        imgSrc: string;
        linkText: string;
        linkUrl: string;
      };
    };
  };
  customClassName?: string;
};

export const SectionContentPreview = ({
  dictionary,
  customClassName,
}: SectionContentPreviewPropsType) => {
  const { title, description, contents } = dictionary;

  return (
    <section className={customClassName}>
      <div className='mx-auto py-8'>
        <TitleToSection title={title} description={description} />

        <div className='my-4 flex flex-wrap justify-center gap-4'>
          {Object.keys(contents).map((key) => {
            const section = contents[key];
            return <CardPreview key={key} {...section} />;
          })}
        </div>
      </div>
    </section>
  );
};
