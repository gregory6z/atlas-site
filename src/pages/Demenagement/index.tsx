/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { NavLink, useNavigate } from "react-router-dom"

import { Button } from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { PdfContext } from "../../context"
import { ButtonRetour, ContentBox } from "../Cims"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"

export function Demenagement() {
  const { changePdf } = useContext(PdfContext)

  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }

  function handleTransBagageNav() {
    changePdf("demenagement-trans-babages.pdf")
    navigate("/pdf")
  }

  function handleDroitBagageNav() {
    changePdf("demenagement-droit-bagage.pdf")
    navigate("/pdf")
  }

  function handlePFMDNav() {
    changePdf("demenagement-pfmd.pdf")
    navigate("/pdf")
  }

  const { t } = useTranslation()

  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>{t("move")}</h2>

            <div className="buttons">
              <Button title={t("move1")} onClick={handleTransBagageNav} />
              <Button title={t("move2")} onClick={handleDroitBagageNav} />
              <Button title={t("move3")} onClick={handlePFMDNav} />

              <NavLink to="/demenagement/metropole">
                <Button title={t("move4")} />
              </NavLink>
              <NavLink to="/demenagement/hors-metropole">
                <Button title={t("move5")} />
              </NavLink>
            </div>
            <ButtonRetour onClick={handleReturnPage}>
              <ArrowLeft weight="bold" /> {t("retur")}
            </ButtonRetour>
          </ContentBox>
        </MainContent>
        <AtlasInfo />
      </HomeContentHeader>
      <div className="bottom">
        <div className="copyright">
          <h5>Copyright © all rights reserved</h5>
          <h5>Développé par 1CL PRAXEDES Gregory</h5>
        </div>
        <div>
          <h3>
            <Phone size={18} weight="fill" /> 04 42 73 34 82 / 864 132 94 82
          </h3>
          <h3>
            <Envelope size={18} weight="fill" />{" "}
            gsbdd-mrs-carpiagne-atlas.accueil.fct@intradef.gouv.fr
          </h3>
        </div>
      </div>
    </HomeContainer>
  )
}
