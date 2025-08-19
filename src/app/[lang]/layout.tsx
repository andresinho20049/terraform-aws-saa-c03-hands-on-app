import { generateStaticParams, LanguageType } from "@/my-app/hooks/use-languages";
import { getDictionary } from "../dictionaries";
import { NavBar } from "@/my-app/components/navbar/navbar";
import { FooterComponent } from "@/my-app/components/footer/footer";

export { generateStaticParams }

type LanguageLayoutPropsType = {
    children: React.ReactNode;
    params: {
        lang: LanguageType;
    };
}

export default async function LanguageLayout({ children, params }: LanguageLayoutPropsType) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang);
  
    return (
        <>
            <header>
                <NavBar lang={lang} dictionary={dictionary} />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <FooterComponent lang={lang} dictionary={dictionary} />
            </footer>
        </>
    )
    
}