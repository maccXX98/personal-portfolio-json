import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { CV } from './cv';

export type Locale = 'es' | 'en';

export const DEFAULT_LOCALE: Locale = 'es';

const CV_FILES: Record<Locale, string> = {
  es: 'cv.yaml',
  en: 'cv_english.yaml',
};

const cache = new Map<Locale, CV>();

export function resolveLocale(locale?: string): Locale {
  return locale === 'en' ? 'en' : DEFAULT_LOCALE;
}

// Most recent first; ongoing positions (no end date) on top.
function byMostRecent<T extends { startDate: string; endDate?: string | null }>(a: T, b: T) {
  const end = (item: T) => (item.endDate ? Date.parse(item.endDate) : Number.POSITIVE_INFINITY);
  return end(b) - end(a) || Date.parse(b.startDate) - Date.parse(a.startDate);
}

export function getCV(locale?: string): CV {
  const key = resolveLocale(locale);
  const cached = cache.get(key);
  if (cached) return cached;

  const cvPath = path.resolve(process.cwd(), CV_FILES[key]);
  const cv = yaml.load(fs.readFileSync(cvPath, 'utf8')) as CV;
  cv.work = [...cv.work].sort(byMostRecent);
  cv.projects = [...cv.projects].sort(byMostRecent);

  cache.set(key, cv);
  return cv;
}
