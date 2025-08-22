export const availableLanguages = ['pt', 'en'] as const;

export type LanguageType = (typeof availableLanguages)[number];

export const isLanguage = (lang: string): lang is LanguageType => {
  return availableLanguages.includes(lang as LanguageType);
};

export const getLanguageFromPath = (path: string): LanguageType | null => {
  const segments = path.split('/');
  const langSegment = segments[1]; // Assuming the language is the second segment
  return isLanguage(langSegment) ? (langSegment as LanguageType) : null;
};

export const getLocalizedPath = (
  path: string,
  newLang: LanguageType
): string => {
  const segments = path.split('/');
  if (segments.length > 1 && isLanguage(segments[1])) {
    segments[1] = newLang; // Replace the language segment
  }
  return segments.join('/');
};

export const getDefaultLanguage = (): LanguageType => {
  return 'en'; // Default language can be changed as needed
};

export const getCurrentLanguage = (path: string): LanguageType => {
  return getLanguageFromPath(path) || getDefaultLanguage();
};

export type ParamsLanguageType = {
  lang: LanguageType;
};

export const generateStaticParams = async (): Promise<ParamsLanguageType[]> => {
  return availableLanguages.map((lang) => ({ lang }));
};
