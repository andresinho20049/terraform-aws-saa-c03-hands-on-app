import {
  CardImageWithTitle,
  CardImageWithTitlePropsType,
} from '../card/card-image-with-title';
import {
  LinkAppearanceButton,
  LinkAppearanceButtonPropsType,
} from '../ui/link-appearance-button';

export type SectionIntroduceToLinkPropsType = {
  title: string;
  description: string;
  cardImage?: CardImageWithTitlePropsType;
  linkButton: string;
  customClassName?: string;
};

export const SectionIntroduceToLink = ({
  title,
  description,
  cardImage,
  linkButton,
  customClassName = '',
}: SectionIntroduceToLinkPropsType) => (
  <section className={`w-full ${customClassName}`}>
    <div
      className={`mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 py-12 ${!!cardImage ? 'lg:flex-row' : ''}`}
    >
      {cardImage && (
        <div className='hidden w-5/12 justify-center md:flex'>
          <CardImageWithTitle {...cardImage} />
        </div>
      )}
      <div className='mx-auto flex max-w-7xl flex-col'>
        <div className='resume mb-8'>
          <h3
            className='text-left'
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {cardImage && (
            <div className='mb-8 flex w-10/12 justify-center md:hidden'>
              <CardImageWithTitle {...cardImage} />
            </div>
          )}
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        {linkButton && (
          <div className='card-button'>
            <LinkAppearanceButton
              href={linkButton}
              isBlank={linkButton.startsWith('http')}
            >
              {title}
            </LinkAppearanceButton>
          </div>
        )}
      </div>
    </div>
  </section>
);
