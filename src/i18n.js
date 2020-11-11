import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationENUS from './locales/en-US/translation.json';
import translationZHCN from './locales/zh-CN/translation.json';

// the translations
const resources = {
	'en-US': {
		translation: translationENUS
	},
	'zh-CN': {
		translation: translationZHCN
	}
};

i18n
	// load translation using xhr -> see /public/locales
	// learn more: https://github.com/i18next/i18next-xhr-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		// backend: {
		//   // for all available options read the backend's repository readme file
		//   loadPath: './locales/{{lng}}/{{ns}}.json'
		// },
		react: {
			useSuspense: false //   <---- this will do the magic
		},
		resources,
		ns: ['translation'],
		defaultNS: 'translation',
		// lng:'zh-CN', //lock default lang
		// lng: 'en-US',
		fallbackLng: 'zh-CN',
		debug: true,
		saveMissing: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		}
	});

export default i18n;
