import { isLanguage } from '../hooks/use-languages';

const dictionaries = {
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  isLanguage(locale) ? dictionaries[locale]() : dictionaries.en();
