import pt from './pt.json';
import en from './en.json';

export const translations = { pt, en } as const;

export type Locale = keyof typeof translations;

export function getLocale(value?: string | null): Locale {
	if (value === 'pt') {
		return 'pt';
	}
	return 'en';
}

export function getTranslation(value?: string | null) {
	return translations[getLocale(value)];
}
