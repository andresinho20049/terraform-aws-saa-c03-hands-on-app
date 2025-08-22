import { CardImageWithTitle } from '../card/card-image-with-title';
import { CardSimple } from '../card/card-simple';
import { DividerSimple } from '../dividers/divider-simple';
import { TitleToSection } from '../title/title-section';
import { LinkAppearanceButton } from '../ui/link-appearance-button';
import { SectionIntroduceToLink } from './section-introduce-to-link';

type CardType = {
  title: string;
  description: string;
  icon: string;
};

type CertificationType = {
  title: string;
  description: string;
  cardTitle: string;
  imgSrc: string;
  mainLinkText: string;
  mainLinkUrl: string;
  secondLinkText: string;
  secondLinkUrl: string;
};

export type SectionConclusionPropsType = {
  dictionary: {
    title: string;
    description: string;
    certification: CertificationType;
    cards: {
      [key: string]: CardType;
    };
  };
  customClassName?: string;
};

export const SectionConclusion = ({
  dictionary,
  customClassName,
}: SectionConclusionPropsType) => {
  const { title, description, certification, cards } = dictionary;

  return (
    <section className={`py-8 ${customClassName}`}>
      <TitleToSection title={title} description={description} />

      <div className='mx-4 grid grid-cols-3 gap-8 md:mx-24'>
        {Object.keys(cards).map((key) => (
          <SimpleCard key={key} {...cards[key]} />
        ))}
        <CertificationCard {...certification} />
      </div>
    </section>
  );
};

const SimpleCard = ({ title, description, icon }: CardType) => (
  <div key={title} className='col-span-3 md:col-span-1'>
    <div className='min-h-48 rounded-xl bg-card-bg p-4 shadow-md shadow-disableLight dark:bg-card-bg-dark dark:shadow-disableDark'>
      <h3>
        <span>
          <img src={icon} alt={title} className='mr-2 inline-block w-11' />
        </span>
        {title}
      </h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  </div>
);

const CertificationCard = ({
  title,
  description,
  cardTitle,
  imgSrc,
  mainLinkText,
  mainLinkUrl,
  secondLinkText,
  secondLinkUrl,
}: CertificationType) => (
  <div className='col-span-3 rounded-xl bg-card-bg shadow-md shadow-disableLight dark:bg-card-bg-dark dark:shadow-disableDark'>
    <div
      className={`flex flex-col items-center justify-between gap-10 lg:flex-row lg:pb-12 lg:pr-4`}
    >
      <div className='flex w-full justify-start lg:w-5/12'>
        <div className='relative h-48 w-10/12 rounded-md bg-card-bg-dark shadow-md dark:bg-card-bg lg:h-96 lg:w-full'>
          <div className='flex h-full w-12 items-center justify-center px-2'>
            <h2 className='rotate-180 text-center text-base font-bold uppercase text-commonDark [writing-mode:vertical-lr] dark:text-commonLight lg:text-2xl'>
              {cardTitle}
            </h2>
          </div>
          <div className='absolute inset-x-10 top-5 flex h-full w-full items-center justify-center rounded-md bg-card-bg shadow-md transition-all duration-300 ease-out hover:translate-x-3 hover:-rotate-1 hover:scale-110 dark:bg-card-bg-dark'>
            <img
              className='h-full w-full object-cover'
              src={imgSrc}
              alt={cardTitle}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col p-4'>
        <div className='resume'>
          <h3
            className='text-left'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className='card-button'>
          <div className='mt-10 flex items-center justify-center gap-4 max-lg:flex-col'>
            <LinkAppearanceButton
              href={mainLinkUrl}
              isBlank={mainLinkUrl.startsWith('http')}
              isPrimary
            >
              {mainLinkText}
            </LinkAppearanceButton>
            <LinkAppearanceButton
              href={secondLinkUrl}
              isBlank={secondLinkUrl.startsWith('http')}
              isPrimary={false}
            >
              {secondLinkText}
            </LinkAppearanceButton>
          </div>
        </div>
      </div>
    </div>
  </div>
);
