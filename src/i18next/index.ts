/* eslint-disable react-hooks/rules-of-hooks */
import i18next from "i18next"

import { initReactI18next } from "react-i18next"

import frJson from "./translations/fr.json"
import ptJson from "./translations/pt.json"
import esJson from "./translations/es.json"
import ruJson from "./translations/ru.json"
import engJson from "./translations/eng.json"

export default i18next.use(initReactI18next).init({
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: frJson,
    es: esJson,
    pt: ptJson,
    ru: ruJson,
    eng: engJson,
  },
})
