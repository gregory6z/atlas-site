/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom"
import { SidebarContainer } from "./styles"
import { useTranslation } from "react-i18next"

export function Sidebar() {
  const { t } = useTranslation()

  return (
    <SidebarContainer>
      <NavLink to="/"> {t("home")}</NavLink>

      <NavLink to="/cims">CIMS</NavLink>
      <NavLink to="/ccs">CCS</NavLink>
      <NavLink to="/om">{t("om")}</NavLink>
      <NavLink to="/demenagement">{t("move")}</NavLink>
      <NavLink to="/habillement">{t("clothing")}</NavLink>
      <NavLink to="/vaguemestre">{t("postOffice")}</NavLink>
      <NavLink to="/escapade">{t("escapade")}</NavLink>
      <NavLink to="/fdligne">FD@LIGNE</NavLink>
      <NavLink to="/gite">{t("gite")}</NavLink>
      <NavLink to="/eureka">EUREKA</NavLink>
    </SidebarContainer>
  )
}
