export const languages = {
  es: 'Es',
  en: 'En',
};

export const defaultLang = 'es';

export const showDefaultLang = false;


// Aqui comienza la traducción

export const ui = {

  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre',
    'nav.services': 'Servicios',
    'nav.icons': 'Iconos',
    'nav.contact': 'Contacto',
    'home.sec1.title': 'Título a traducir',
    'home.sec1.txt': 'Texto a traducir con el fantástico sistema de traducción de astro',
  },

  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.icons': 'Icons',
    'nav.contact': 'Contact',   
    'home.sec1.title': 'Title to translate',
    'home.sec1.txt': 'Text to be translated with the fantastic astro translation system',
  },
 
} as const;
