import { getDictionary } from '@/my-app/app/dictionaries';
import {
  WaveDiviver,
  WaveDiviverInvert,
} from '@/my-app/components/dividers/wave-divider';
import { SectionPanelDetail } from '@/my-app/components/sections/section-panel-detail';
import { SectionShowCase } from '@/my-app/components/sections/section-show-case';
import { TitlePage } from '@/my-app/components/title/title-page';
import { LinkAppearanceButton } from '@/my-app/components/ui/link-appearance-button';
import { generateStaticParams } from '@/my-app/hooks/use-languages';
import { PageProps } from '../layout';

export { generateStaticParams };

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const infraDictionary = dictionary.sections_details.infra;
  const infraSections = Object.keys(infraDictionary.sections);

  const ciDictionary = dictionary.sections_details.ci;
  const ciSections = Object.keys(ciDictionary.sections);

  const adDictionary = dictionary.sections_details.advantages;

  return (
    <main>
      <WaveDiviverInvert />
      <TitlePage
        title={dictionary.about.title}
        description={dictionary.about.description}
        customClassName='inverter-bg'
      >
        <LinkAppearanceButton href={dictionary.about.githubLink} isBlank>
          {dictionary.about.githubText}
        </LinkAppearanceButton>
      </TitlePage>

      <SectionPanelDetail
        dictionary={infraDictionary}
        sections={infraSections}
        align='left'
        customClassName='inverter-bg'
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
        customClassName='inverter-bg'
      />
      <WaveDiviver />
    </main>
  );
}
