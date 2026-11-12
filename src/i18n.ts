import { resolveLocale, type Locale } from './cv-loader';

const STRINGS = {
  es: {
    pageTitle: (name: string, label: string) => `Portfolio de ${name} - ${label}`,
    about: 'Sobre mí',
    experience: 'Experiencia laboral',
    education: 'Educación',
    projects: 'Proyectos',
    skills: 'Habilidades',
    present: 'Actual',
    sendEmail: (name: string, email: string) => `Enviar un correo electrónico a ${name} al correo ${email}`,
    call: (name: string, phone: string) => `Llamar por teléfono a ${name} al número ${phone}`,
    visitProfile: (name: string, network: string) => `Visitar el perfil de ${name} en ${network}`,
    viewCompany: (name: string) => `Ver ${name}`,
    viewProject: (name: string) => `Ver el proyecto ${name}`,
    viewSource: (name: string) => `Ver código fuente del proyecto ${name}`,
    activeProject: 'Proyecto en línea',
    visit: (network: string) => `Visitar ${network}`,
    print: 'Imprimir',
    actions: 'Acciones',
    searchCommand: 'Buscar comando',
    paletteHintBefore: 'Pulsa',
    paletteHintAfter: 'para abrir la paleta de comandos.',
    toggleTheme: 'Cambiar entre modo claro y oscuro',
    switchLanguage: 'Read in English',
    switchLanguageShort: 'EN',
  },
  en: {
    pageTitle: (name: string, label: string) => `${name}'s Portfolio - ${label}`,
    about: 'About me',
    experience: 'Work experience',
    education: 'Education',
    projects: 'Projects',
    skills: 'Skills',
    present: 'Present',
    sendEmail: (name: string, email: string) => `Send an email to ${name} at ${email}`,
    call: (name: string, phone: string) => `Call ${name} at ${phone}`,
    visitProfile: (name: string, network: string) => `Visit ${name}'s ${network} profile`,
    viewCompany: (name: string) => `Visit ${name}`,
    viewProject: (name: string) => `View the project ${name}`,
    viewSource: (name: string) => `View the source code of ${name}`,
    activeProject: 'Live project',
    visit: (network: string) => `Visit ${network}`,
    print: 'Print',
    actions: 'Actions',
    searchCommand: 'Search command',
    paletteHintBefore: 'Press',
    paletteHintAfter: 'to open the command palette.',
    toggleTheme: 'Toggle light and dark mode',
    switchLanguage: 'Leer en español',
    switchLanguageShort: 'ES',
  },
} as const;

export function useTranslations(locale?: string) {
  return STRINGS[resolveLocale(locale)];
}

const DATE_LOCALES: Record<Locale, string> = { es: 'es', en: 'en' };

// CV dates are plain ISO days, so format them in UTC to avoid off-by-one months.
export function formatMonthYear(date: string, locale?: string): string {
  const formatted = new Intl.DateTimeFormat(DATE_LOCALES[resolveLocale(locale)], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
