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
    <h2>{dictionary.title}</h2>
    <p
      className='text-center'
      dangerouslySetInnerHTML={{ __html: dictionary.description }}
    />
    <div className='my-4 flex flex-wrap justify-center gap-6'>
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
  <div className='h-48 max-w-lg rounded-lg bg-card-bg p-6 shadow-lg dark:bg-card-bg-dark'>
    <h3>
      <span>
        <img src={icon} alt={title} className='mr-2 inline-block w-11' />
      </span>
      {title}
    </h3>
    <p dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);
