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
import { CardPreview } from '@/my-app/components/card/card-preview';
import { SectionContentPreview } from '@/my-app/components/sections/section-content-preview';
import { SectionShowCase } from '@/my-app/components/sections/section-show-case';
import { SectionConclusion } from '@/my-app/components/sections/section-conclusion';

export { generateStaticParams };

export default async function ResourcePage({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const {
    title,
    subtitle,
    description,
    imgSrc,
    descriptionResources,
    resourcesList,
    contentPreview,
    conclusion,
  } = dictionary.resource;

  return (
    <main className='min-h-screen w-full'>
      <TitlePage
        title={title}
        description={description}
        customClassName='pt-20'
      >
        <img src={imgSrc} alt={title} className='w-full max-w-3xl' />
      </TitlePage>
      <WaveDiviverInvert />
      <TitleToSection
        title={subtitle}
        description={descriptionResources}
        customClassName='inverter-bg'
      />

      <div className='inverter-bg w-full divide-y-2 lg:px-20'>
        {resourcesList.map((resource) => (
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
      <SectionContentPreview dictionary={contentPreview} />
      <div className='h-8 md:h-24'></div>
      <WaveDiviverInvert />
      <SectionConclusion
        customClassName='inverter-bg'
        dictionary={conclusion}
      />
      <div className='inverter-bg h-8 md:h-24'></div>
      <WaveDiviver />
    </main>
  );
}
