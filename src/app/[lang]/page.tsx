import { generateStaticParams } from "@/my-app/hooks/use-languages";
import Link from "next/link";
import { PageProps } from "../../../.next/types/app/[lang]/page";
import { getDictionary } from "../dictionaries";

export { generateStaticParams };

export default async function Home({params} : PageProps ) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1>{dictionary.home.title}</h1>
      <p>{dictionary.home.description}</p>
      <Link href={`/${lang}/about`}>
        {dictionary.home.aboutLink}
      </Link>
    </main>
  );
}
