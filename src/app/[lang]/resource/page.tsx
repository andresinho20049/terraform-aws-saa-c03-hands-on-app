import {
  WaveDiviver,
  WaveDiviverInvert,
} from '@/my-app/components/dividers/wave-divider';
import { SectionIntroduceToLink } from '@/my-app/components/sections/section-introduce-to-link';
import { TitlePage } from '@/my-app/components/title/title-page';
import { TitleToSection } from '@/my-app/components/title/title-section';
import { generateStaticParams } from '@/my-app/hooks/use-languages';
import { getDictionary } from '../../dictionaries';
import { PageProps } from '../layout';

export { generateStaticParams };

export default async function ResourcePage({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <main className='min-h-screen w-full'>
      <TitlePage
        title={dictionary.resource.title}
        description={dictionary.resource.description}
        customClassName='pt-20'
      >
        <img
          src={dictionary.resource.imgSrc}
          alt={dictionary.resource.title}
          className='w-full max-w-3xl'
        />
      </TitlePage>
      <WaveDiviverInvert />
      <TitleToSection
        title={dictionary.resource.subtitle}
        description={dictionary.resource.descriptionResources}
        customClassName='bg-second-light dark:bg-second-dark'
      />

      <div className='w-full divide-y-2 bg-second-light px-4 dark:bg-second-dark lg:px-20'>
        {dictionary.resource.resourcesList.map((resource) => (
          <SectionIntroduceToLink
            title={resource.title}
            description={resource.description}
            linkButton={resource.link}
            cardImage={{
              cardTitle: resource.cardTitle,
              imageSrc: resource.imgSrc,
            }}
            key={resource.title}
          />
        ))}
      </div>
      <WaveDiviver />
    </main>
  );
}
