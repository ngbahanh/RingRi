import { en, vi } from '@locales/index';
import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from './types';

export const resources = {
  en: {
    common: {
      ...en.common,
    },
    translation: {
      ...en.translation,
    },
  },
  vi: {
    common: {
      ...vi.common,
    },
    translation: {
      ...vi.translation,
    },
  },
};

export const defaultNS = LANGUAGES.English;

const defaultConfig: InitOptions = {
  compatibilityJSON: 'v3',
  resources,
  defaultNS,
  lng: LANGUAGES.English,
  fallbackLng: LANGUAGES.English,
  interpolation: {
    escapeValue: false,
  },
  debug: __DEV__,
};

i18n.use(initReactI18next).init(defaultConfig, (err, t) => {
  if (err) return console.log('Init I18Next wrong: ', err);
});

export default i18n;
