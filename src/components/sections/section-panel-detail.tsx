'use client';

import { useState } from 'react';
import { TitleToSection } from '../title/title-section';
export type SectionPanelDetailPropsType = {
  align: 'left' | 'right';
  sections: string[];
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

export const SectionPanelDetail = ({
  align = 'left',
  sections,
  dictionary,
  customClassName = '',
}: SectionPanelDetailPropsType) => {
  const [currentItem, setCurrentItem] = useState<string>(sections[0]);

  return (
    <section className={customClassName}>
      <div className='mx-auto max-w-7xl py-8'>
        <TitleToSection
          title={dictionary.title}
          description={dictionary.description}
        />

        <div
          className={`flex w-full flex-col justify-between gap-4 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} mt-6 px-4`}
        >
          <div className='flex w-full flex-wrap justify-between gap-2 md:w-1/3 md:flex-col md:items-stretch'>
            {sections.map((section) => (
              <SectionPanelDetailButton
                key={section}
                title={dictionary.sections[section].title}
                icon={dictionary.sections[section].icon}
                onClick={() => setCurrentItem(section)}
              />
            ))}
          </div>

          <div className='h-full w-full rounded-lg bg-card-bg p-4 shadow-md dark:bg-card-bg-dark md:w-2/3'>
            <h3 className='mb-4 text-3xl font-extrabold text-second dark:text-second'>
              <img
                src={dictionary.sections[currentItem].icon}
                alt={dictionary.sections[currentItem].title}
                className='mr-2 inline-block h-8 w-8'
              />
              {dictionary.sections[currentItem].title}
            </h3>

            <p
              className='resume'
              dangerouslySetInnerHTML={{
                __html: dictionary.sections[currentItem].description,
              }}
            />
            <img
              src={dictionary.sections[currentItem].imgSrc}
              alt={dictionary.sections[currentItem].title}
              className='mx-auto mt-4 w-10/12 object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type SectionPanelDetailButtonPropsType = {
  title: string;
  icon: string;
  onClick: () => void;
};

const SectionPanelDetailButton = ({
  title,
  icon,
  onClick,
}: SectionPanelDetailButtonPropsType) => (
  <button
    onClick={onClick}
    className='w-5/12 bg-card-bg p-4 shadow-lg transition-colors duration-300 hover:rounded-lg hover:bg-second-light dark:bg-card-bg-dark hover:dark:bg-second-dark md:w-full'
  >
    <div className='flex flex-col items-center'>
      <img src={icon} alt={title} className='h-12' />
      <span>{title}</span>
    </div>
  </button>
);
