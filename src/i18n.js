
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true  // ✅ أضف هذا السطر
    }
  });

export default i18n;
