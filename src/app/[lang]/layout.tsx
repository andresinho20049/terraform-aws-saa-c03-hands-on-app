import { FooterComponent } from '@/my-app/components/footer/footer';
import { NavBar } from '@/my-app/components/navbar/navbar';
import { getDictionary } from '../dictionaries';

import {
  generateStaticParams,
  ParamsLanguageType,
} from '@/my-app/hooks/use-languages';
export { generateStaticParams };

export type PageProps = {
  params: Promise<ParamsLanguageType>;
  searchParams?: Promise<{ [key: string]: string }>;
};

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<ParamsLanguageType>;
};

export default async function LanguageLayout({
  children,
  params,
}: LayoutProps) {
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
