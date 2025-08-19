import { getDictionary } from '@/my-app/app/dictionaries';
import { generateStaticParams } from "@/my-app/hooks/use-languages";
import { PageProps } from '../../../../.next/types/app/[lang]/page';

export { generateStaticParams };

export default async function AboutPage({params} : PageProps ) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1>{dictionary.about.title}</h1>
      <p>{dictionary.about.description}</p>
      <a href={`/${lang}`}>{dictionary.about.homeLink}</a>
    </main>
  );
}