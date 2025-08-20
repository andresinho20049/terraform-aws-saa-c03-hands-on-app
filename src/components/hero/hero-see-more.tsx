import { LinkAppearanceButton } from '../ui/link-appearance-button';

export type HeroSeeMorePropsType = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imgSrc?: string;
  customClassName?: string;
};

export const HeroSeeMore = ({
  title,
  description,
  buttonText,
  buttonLink,
  imgSrc,
  customClassName = '',
}: HeroSeeMorePropsType) => (
  <section className={`flex h-screen flex-wrap 2xl:px-20 ${customClassName}`}>
    <div className='flex h-full w-full flex-col justify-between lg:w-8/12'>
      <section className='flex items-center justify-between px-4'>
        <div className='size-28 landscape:size-12 landscape:lg:size-28'>
          <img
            alt='Andresinho20049'
            src={'/logo/andresinho20049.svg'}
            className='w-24'
          />
        </div>
      </section>
      <section className='flex h-full items-center px-4 lg:mt-0'>
        <div className='w-full'>
          <h2 className='text-left'>{title}</h2>
          <div className='my-4 h-2 w-36 bg-primary'></div>
          <p
            className='resume max-w-5xl'
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className='my-8 w-44'>
            {buttonLink && (
              <LinkAppearanceButton
                href={buttonLink}
                isBlank={buttonLink.startsWith('http')}
              >
                <span className='sr-only'>{buttonText}</span>
                {buttonText || 'Learn more'}
              </LinkAppearanceButton>
            )}
          </div>
        </div>
      </section>
    </div>
    <div className='hidden h-full w-4/12 items-center px-4 lg:flex'>
      <img
        src={imgSrc}
        alt='Ilustrate Image'
        className='w-full object-contain object-center'
      />
    </div>
  </section>
);
