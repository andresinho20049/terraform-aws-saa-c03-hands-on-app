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
  <section className={`flex h-screen flex-wrap ${customClassName}`}>
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
          <p className='text-md mb-5 lg:mb-16 lg:text-xl'>{description}</p>
          <div className='w-44'>
            {buttonLink && (
              <LinkAppearanceButton href={buttonLink}>
                <span className='sr-only'>{buttonText}</span>
                {buttonText || 'Learn more'}
              </LinkAppearanceButton>
            )}
          </div>
        </div>
      </section>
    </div>
    <div className='hidden h-full w-4/12 items-end px-2 lg:flex'>
      <img
        width={894}
        height={1280}
        src={imgSrc}
        alt='Ilustrate Image'
        className='h-full w-full object-contain object-bottom'
      />
    </div>
  </section>
);
