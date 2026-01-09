import { useTranslation } from './useTranslation';

export const useLocale = () => {
  const { locale, setLocale, direction } = useTranslation();
  return { locale, setLocale, direction };
};
