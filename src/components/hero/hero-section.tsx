import { LinkAppearanceButton } from '../ui/link-appearance-button';

export type HeroSectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  buttonPrimaryText: string;
  buttonPrimaryLink: string;
  buttonSecondaryText: string;
  buttonSecondaryLink: string;
  customClassName?: string;
};

export const HeroSection = ({
  title,
  subtitle,
  description,
  buttonPrimaryText,
  buttonPrimaryLink,
  buttonSecondaryText,
  buttonSecondaryLink,
  customClassName = '',
}: HeroSectionPropsType) => (
  <div
    className={`flex h-screen items-center justify-center ${customClassName}`}
  >
    <div className='mx-10 max-w-6xl text-center'>
      <p className='caption text-center'>{subtitle}</p>
      <h1 className='my-3'>{title}</h1>
      <div>
        <p className='mx-auto my-2 max-w-2xl'>{description}</p>
      </div>
      <div className='mt-6 flex flex-col items-center justify-center gap-5 md:flex-row'>
        <LinkAppearanceButton href={buttonPrimaryLink} isPrimary>
          {buttonPrimaryText}
        </LinkAppearanceButton>
        <LinkAppearanceButton href={buttonSecondaryLink} isPrimary={false}>
          {buttonSecondaryText}
        </LinkAppearanceButton>
      </div>
    </div>
  </div>
);
