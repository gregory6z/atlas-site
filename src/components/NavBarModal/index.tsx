import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"
import { useTranslation } from "react-i18next"
import { CloseButtonMobile, Content, Overlay } from "./styles"

// interface ILangue {
//   name: string
//   flag: string
//   value: string
// }

export function NavBarModal() {
  const { t } = useTranslation()
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {/* <Dialog.Title>Choisise votre langue</Dialog.Title> */}

        <div className="containerLinks">
          <a href="/"> {t("home")}</a>
          <a href="/cims">CIMS</a>
          <a href="/ccs">CCS</a>
          <a href="/om">{t("om")}</a>
          <a href="/demenagement">{t("move")}</a>
          <a href="/habillement">{t("clothing")}</a>
          <a href="/vaguemestre">{t("postOffice")}</a>
          <a href="/escapade">{t("escapade")}</a>
          <a href="/fdligne">FD@LIGNE</a>
          <a href="/gite">{t("gite")}</a>
          <a href="/eureka">EUREKA</a>
        </div>

        <CloseButtonMobile>
          <X size="52" />
        </CloseButtonMobile>
      </Content>
    </Dialog.Portal>
  )
}
