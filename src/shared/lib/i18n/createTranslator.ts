import type { LocaleKey, Translations, TranslationKey } from '@shared/config';

type TranslationDictionary = Record<LocaleKey, Translations>;

type TranslationGroup = keyof Translations;

const getEntry = (dictionary: Translations, key: TranslationKey): string | undefined => {
  const [group, item] = key.split('.') as [TranslationGroup, string];
  const groupDictionary = dictionary[group];
  const value = (groupDictionary as Record<string, string>)[item];
  return typeof value === 'string' ? value : undefined;
};

export const createTranslator = (
  locale: LocaleKey,
  fallbackLocale: LocaleKey,
  dictionaries: TranslationDictionary,
) => {
  return (key: TranslationKey): string => {
    const fromCurrent = getEntry(dictionaries[locale], key);
    if (fromCurrent) {
      return fromCurrent;
    }

    return getEntry(dictionaries[fallbackLocale], key) ?? key;
  };
};
