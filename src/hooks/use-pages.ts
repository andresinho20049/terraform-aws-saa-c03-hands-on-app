import { getCurrentLanguage } from './use-languages';

export type PageType = {
  href: string;
  labelKey: string;
  icon?: React.ReactNode;
};

export const pages: PageType[] = [
  {
    href: '',
    labelKey: 'home',
  },
  {
    href: '/about',
    labelKey: 'about',
  },
  {
    href: '/contact',
    labelKey: 'contact',
  },
];

export const redirectPage = (currentPath: string, newPath: string) => {
  return `/${getCurrentLanguage(currentPath)}${newPath}`;
};
