import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEn from './locales/en/common.json';
import commonRu from './locales/ru/common.json';

const resources = {
  en: {
    common: commonEn
  },
  ru: {
    common: commonRu
  }
};

async function returnsPromise() {
  await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: false,
      detection: {
        order: ['navigator']
      },
      ns: ['common'],
      resources,
      fallbackLng: 'en',
      react: {
        bindI18n: 'languageChanged',
        bindI18nStore: '',
        transEmptyNodeValue: '',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i']
        //useSuspense: true
      }
    });
}

const i18 = void returnsPromise();
void Promise.reject();

export default i18;
