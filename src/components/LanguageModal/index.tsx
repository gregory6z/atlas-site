import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"
import { CloseButton, Content, FlagButton, Overlay } from "./styles"
import fr from "../../assets/flags/fr.svg"
import es from "../../assets/flags/es.svg"
import pt from "../../assets/flags/br.svg"
import ru from "../../assets/flags/ru.svg"
import gb from "../../assets/flags/us.svg"
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { PdfContext } from "../../context"

// interface ILangue {
//   name: string
//   flag: string
//   value: string
// }

export function LanguageModal() {
  const Languages = [
    {
      name: "Français",
      flag: fr,
      value: "fr",
    },
    {
      name: "English",
      flag: gb,
      value: "gb",
    },
    {
      name: "Portugues",
      flag: pt,
      value: "pt",
    },
    {
      name: "Español",
      flag: es,
      value: "es",
    },
    {
      name: "Русский",
      flag: ru,
      value: "ru",
    },
  ]

  const { i18n } = useTranslation()

  const { changeLang } = useContext(PdfContext)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {/* <Dialog.Title>Choisise votre langue</Dialog.Title> */}
        <h2>CHOISIR VOTRE LANGUE</h2>

        <div className="flagContainer">
          {Languages.map((language) => (
            <FlagButton
              onClick={() => {
                i18n.changeLanguage(language.value)
                changeLang(language.flag)
              }}
              key={language.value}
            >
              <img src={language.flag} alt="" width="38px" />
              {language.name}
            </FlagButton>
          ))}

          <CloseButton>
            <X size="24" />
          </CloseButton>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
