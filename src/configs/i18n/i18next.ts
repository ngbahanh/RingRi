import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from './types';

import en from '../../locales/en/en-US.json';
import vi from '../../locales/vi/vi-VN.json';

export const resources = {
  en: {
    translation: {
      en,
    },
  },
  vi: {
    translation: {
      vi,
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
};

i18n.use(initReactI18next).init(defaultConfig, (err, t) => {
  if (err) return console.log('Init I18Next wrong: ', err);
});

export default i18n;
