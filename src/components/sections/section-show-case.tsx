import { TitleToSection } from '../title/title-section';

export type SectionShowCasePropsType = {
  dictionary: {
    title: string;
    description: string;
    sections: {
      [key: string]: {
        title: string;
        description: string;
        imgSrc: string;
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

    <div className='my-4 flex flex-wrap justify-center gap-6 px-4'>
      {Object.keys(dictionary.sections).map((key) => {
        const section = dictionary.sections[key];
        return (
          <SectionShowCaseItem
            key={key}
            title={section.title}
            description={section.description}
            imgSrc={section.imgSrc}
            icon={section.icon}
          />
        );
      })}
    </div>
  </section>
);

type SectionShowCaseItemPropsType = {
  title: string;
  description: string;
  imgSrc: string;
  icon: string;
};

export const SectionShowCaseItem = ({
  title,
  description,
  imgSrc,
  icon,
}: SectionShowCaseItemPropsType) => (
  <div className='h-48 max-w-lg rounded-xl bg-card-bg p-4 shadow-md shadow-disableLight dark:bg-card-bg-dark dark:shadow-disableDark'>
    <h3>
      <span>
        <img src={icon} alt={title} className='mr-2 inline-block w-11' />
      </span>
      {title}
    </h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);
