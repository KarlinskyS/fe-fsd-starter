import type { LocaleKey, TranslationKey } from '@shared/config';
import { useTranslation } from '@shared/lib';

const languageOptions: Array<{ value: LocaleKey; labelKey: TranslationKey }> = [
  { value: 'en', labelKey: 'languageSwitcher.english' },
  { value: 'ru', labelKey: 'languageSwitcher.russian' },
  { value: 'he', labelKey: 'languageSwitcher.hebrew' },
  { value: 'ar', labelKey: 'languageSwitcher.arabic' },
];

export const useLanguageSwitcher = () => {
  const { locale, setLocale, t } = useTranslation();

  return {
    locale,
    setLocale,
    t,
    languageOptions,
  };
};
