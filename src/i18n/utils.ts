import { ui, defaultLang, showDefaultLang } from './ui';


export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}


export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function langMirrorPage( pathname, currLang, langDefault, langTarget ) {

  let langURL = "";

  if( currLang != langDefault ){
    // Eliminar el idioma y las barras inclinadas del principio de la pathname
    const page = pathname.replace(`/${currLang}/`, "");
    langURL = page;
  }else{
    langURL = `/${langTarget}${pathname}`;
  }

  return langURL;

}

