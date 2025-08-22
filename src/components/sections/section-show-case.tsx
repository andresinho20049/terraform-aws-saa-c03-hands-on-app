import { CardSimple } from '../card/card-simple';
import { TitleToSection } from '../title/title-section';

export type SectionShowCasePropsType = {
  dictionary: {
    title: string;
    description: string;
    sections: {
      [key: string]: {
        title: string;
        description: string;
        icon: string;
      };
    };
  };
  customClassName?: string;
};

export const SectionShowCase = ({
  dictionary,
  customClassName = '',
}: SectionShowCasePropsType) => (
  <section className={`${customClassName} pb-8`}>
    <TitleToSection
      title={dictionary.title}
      description={dictionary.description}
    />

    <div className='my-4 flex flex-wrap justify-center gap-6'>
      {Object.keys(dictionary.sections).map((key) => {
        const section = dictionary.sections[key];
        return (
          <CardSimple
            key={key}
            title={section.title}
            description={section.description}
            icon={section.icon}
          />
        );
      })}
    </div>
  </section>
);
