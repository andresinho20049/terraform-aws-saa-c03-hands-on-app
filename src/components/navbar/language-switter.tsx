'use client';

import { usePathname } from 'next/navigation';
import { LinkLanguage } from '@/my-app/components/ui/link-language';
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

export default function LanguageSwitcher({
  lang,
  dictionary,
}: LanguageSwitcherPropsType) {
  const pathname = usePathname();
  const currentLang = getCurrentLanguage(pathname);

  return (
    <div className='mx-2 w-44'>
      <div className='group relative cursor-pointer'>
        <div className='flex items-center justify-between rounded-md border-2 border-accent px-2'>
          <span className='menu-hover text-base font-medium text-black'>
            {dictionary.lang_switcher.label}
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6 -rotate-90 transition-transform duration-300 group-hover:-rotate-0'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </div>

        <div className='absolute z-50 hidden w-full flex-col bg-second-light px-4 py-1 shadow-xl group-hover:flex dark:bg-second-dark'>
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
