import { createContext, ReactNode, useState } from "react"

import fr from "../assets/flags/fr.svg"

interface AuthContextData {
  pdf: string
  changePdf: (pdf: string) => void
  lang: typeof Image | string
  changeLang: (lang: string) => void
}
export const PdfContext = createContext({} as AuthContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function PdfProvider({ children }: CartContextProviderProps) {
  const [pdf, setPdf] = useState("")
  const [lang, setLang] = useState(fr)

  function changeLang(lang: string) {
    setLang(lang)
  }

  function changePdf(pdf: string) {
    setPdf(pdf)
  }

  return (
    <PdfContext.Provider value={{ pdf, changePdf, lang, changeLang }}>
      {children}
    </PdfContext.Provider>
  )
}
