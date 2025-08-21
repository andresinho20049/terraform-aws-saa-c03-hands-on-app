import {
  generateStaticParams,
  LanguageType,
} from '@/my-app/hooks/use-languages';
import { getDictionary } from '../dictionaries';
import { NavBar } from '@/my-app/components/navbar/navbar';
import { FooterComponent } from '@/my-app/components/footer/footer';

export { generateStaticParams };

export type PageProps = {
  params: {
    lang: LanguageType;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
  children?: React.ReactNode;
  dictionary?: { [key: string]: string };
  lang?: LanguageType;
  locale?: string;
  defaultLocale?: string;
  asPath?: string;
  basePath?: string;
  isFallback?: boolean;
};

export default async function LanguageLayout({ children, params }: PageProps) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <header>
        <NavBar lang={lang} dictionary={dictionary} />
      </header>
      {children}
      <footer>
        <FooterComponent lang={lang} dictionary={dictionary} />
      </footer>
    </>
  );
}
