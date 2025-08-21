import {
  WaveDiviver,
  WaveDiviverInvert,
} from '@/my-app/components/dividers/wave-divider';
import { HeroSection } from '@/my-app/components/hero/hero-section';
import { HeroSeeMore } from '@/my-app/components/hero/hero-see-more';
import { generateStaticParams } from '@/my-app/hooks/use-languages';
import { getDictionary } from '../dictionaries';
import { PageProps } from './layout';

export { generateStaticParams };

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <HeroSection
        title={dictionary.home.title}
        subtitle={dictionary.home.subtitle}
        description={dictionary.home.description}
        buttonPrimaryText={dictionary.home.buttonPrimaryText}
        buttonPrimaryLink={dictionary.home.buttonPrimaryLink}
        buttonSecondaryText={dictionary.home.buttonSecondaryText}
        buttonSecondaryLink={dictionary.home.buttonSecondaryLink}
      />
      <WaveDiviverInvert />
      <HeroSeeMore
        title={dictionary.home.seeMore.title}
        description={dictionary.home.seeMore.description}
        buttonText={dictionary.home.seeMore.buttonText}
        buttonLink={dictionary.home.seeMore.buttonLink}
        customClassName='bg-second-light dark:bg-second-dark'
        imgSrc={dictionary.home.seeMore.imgSrc}
      />
      <WaveDiviver />
    </main>
  );
}
