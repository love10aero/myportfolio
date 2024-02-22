// i18n.js

import enTranslations from '../locales/en.json';
import esTranslations from '../locales/en.json';

// Función para obtener las traducciones basadas en el idioma seleccionado
function getTranslationsForLanguage(language) {
    console.log(language);
  switch (language) {
    case 'es':
      return esTranslations;
    case 'en':
    default:
      return enTranslations;
  }
}

// Función para obtener una traducción anidada basada en una clave de ruta
function getNestedTranslation(translations, keyPath) {
  return keyPath.split('.').reduce((obj, key) => obj && obj[key], translations);
}

// Función para traducir texto con variables opcionales
export function translate(language, key, variables = {}) {
  // imprimir las variables
  console.log(language);
  const translations = getTranslationsForLanguage(language);
  let translation = getNestedTranslation(translations, key) || key;

  Object.keys(variables).forEach((varKey) => {
    const re = new RegExp(`{{${varKey}}}`, 'g');
    translation = translation.replace(re, variables[varKey]);
  });

  return translation;
}
