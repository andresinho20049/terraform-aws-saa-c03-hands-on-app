import { getDictionary } from '@/my-app/app/dictionaries';
import { generateStaticParams } from '@/my-app/hooks/use-languages';
import { PageProps } from '../layout';
import { SectionPanelDetail } from '@/my-app/components/sections/section-panel-detail';
import {
  WaveDiviver,
  WaveDiviverInvert,
} from '@/my-app/components/dividers/wave-divider';
import { SectionShowCase } from '@/my-app/components/sections/section-show-case';
import Link from 'next/link';
import { LinkAppearanceButton } from '@/my-app/components/ui/link-appearance-button';

export { generateStaticParams };

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const infraDictionary = dictionary.sections_details.infra;
  const infraSections = Object.keys(infraDictionary.sections);

  const ciDictionary = dictionary.sections_details.ci;
  const ciSections = Object.keys(ciDictionary.sections);

  const adDictionary = dictionary.sections_details.advantages;
  const adSections = Object.keys(adDictionary.sections);

  return (
    <main>
      <WaveDiviverInvert />
      <div className='bg-second-light text-center dark:bg-second-dark'>
        <h1 className='mb-4'>{dictionary.about.title}</h1>
        <div className='mx-auto flex max-w-7xl flex-col items-end justify-end gap-4 py-4'>
          <p
            className='text-center'
            dangerouslySetInnerHTML={{ __html: dictionary.about.description }}
          />
          <LinkAppearanceButton href={dictionary.about.githubLink} isBlank>
            {dictionary.about.githubText}
          </LinkAppearanceButton>
        </div>
      </div>
      <SectionPanelDetail
        dictionary={infraDictionary}
        sections={infraSections}
        align='left'
        customClassName='bg-second-light dark:bg-second-dark'
      />
      <WaveDiviver />
      <SectionPanelDetail
        dictionary={ciDictionary}
        sections={ciSections}
        align='right'
      />
      <WaveDiviverInvert />
      <SectionShowCase
        dictionary={adDictionary}
        customClassName='bg-second-light dark:bg-second-dark'
      />
      <WaveDiviver />
    </main>
  );
}
