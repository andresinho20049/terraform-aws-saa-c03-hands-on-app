import { TitlePage } from '../title/title-page';
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
    className={`flex min-h-screen items-center justify-center ${customClassName}`}
  >
    <div className='mx-10 max-w-6xl px-4 text-center'>
      <p className='caption text-center'>{subtitle}</p>
      <TitlePage title={title} description={description}>
        <div className='mt-6 flex items-center justify-center gap-2 lg:gap-4'>
          <LinkAppearanceButton
            href={buttonPrimaryLink}
            isBlank={buttonPrimaryLink.startsWith('http')}
            isPrimary
          >
            {buttonPrimaryText}
          </LinkAppearanceButton>
          <LinkAppearanceButton
            href={buttonSecondaryLink}
            isBlank={buttonSecondaryLink.startsWith('http')}
            isPrimary={false}
          >
            {buttonSecondaryText}
          </LinkAppearanceButton>
        </div>
      </TitlePage>
    </div>
  </div>
);
