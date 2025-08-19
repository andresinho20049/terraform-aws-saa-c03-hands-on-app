'use client';

import { usePathname } from 'next/navigation';
import { LinkLanguage } from '../link/link-language';
import { getCurrentLanguage } from '@/my-app/hooks/use-languages';

export type LanguageSwitcherPropsType = {
  lang: 'pt' | 'en';
  dictionary: {
    lang_switcher: {
      label: string;
      pt_link: string;
      en_link: string;
    };
  };
};

export default function LanguageSwitcher({ lang, dictionary }: LanguageSwitcherPropsType) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);

  return (
    <div className='w-44 mx-2'>
      <div className="group relative cursor-pointer">

          <div className="flex items-center justify-between px-2 border-2 border-accent rounded-md">
              <span className="menu-hover text-base font-medium text-black">
                  {dictionary.lang_switcher.label}
              </span>
              <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
              </span>
          </div>

          <div className="hidden absolute z-50 w-full flex-col py-1 px-4 shadow-xl bg-second-light dark:bg-second-dark group-hover:flex">
            <LinkLanguage 
              href={pathname}
              lang='pt'
              label={dictionary.lang_switcher.pt_link}
              disabled={currentLang === 'pt'}
            />
            <LinkLanguage 
              href={pathname}
              lang='en'
              label={dictionary.lang_switcher.en_link}
              disabled={currentLang === 'en'}
            />
              

          </div>
      </div>  
    </div>
  );
}