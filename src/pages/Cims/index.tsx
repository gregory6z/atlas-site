/* eslint-disable react/no-unescaped-entities */
import { ArrowLeft, Envelope, Phone } from "phosphor-react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Button } from "../../components/Button"
import { Sidebar } from "../../components/Sidebar"
import { PdfContext } from "../../context"
import { AtlasInfo } from "../Home/AtlasInfo"
import { MainContent } from "../Home/MainContainer/styles"
import { HomeContainer, HomeContentHeader } from "../Home/styles"

export function Cims() {
  const { changePdf } = useContext(PdfContext)
  const { t } = useTranslation()

  const navigate = useNavigate()

  function handleReturnPage() {
    navigate(-1)
  }

  function handlePdfViewCimsInfo() {
    changePdf("cims-info.pdf")
    navigate("/pdf")
  }
  function handlePdfFicheReflexe() {
    changePdf("cims-reflexe.pdf")
    navigate("/pdf")
  }

  return (
    <HomeContainer>
      <HomeContentHeader>
        <Sidebar />
        <MainContent>
          <ContentBox>
            <h2>{t("cims")}</h2>
            <div className="buttons">
              <Button title={t("cims1")} onClick={handlePdfViewCimsInfo} />
              <Button title={t("cims2")} onClick={handlePdfFicheReflexe} />
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

export const ContentBox = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  height: 60vh;
  padding: 2rem;
  position: relative;
  border: 0.5px solid rgb(218, 218, 218);

  @media (max-width: 1080px) {
    padding: 4rem 2rem;
  }

  > h2 {
    font-size: 1.75rem;
    letter-spacing: 0.075rem;

    @media (max-width: 1080px) {
      text-align: center;
      font-size: 3.5rem;
      margin-bottom: 5rem;
    }
  }

  .buttons {
    margin-top: 2rem;
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    flex-wrap: wrap;

    @media (max-width: 1680px) {
      gap: 1rem;
    }

    @media (max-width: 1080px) {
      gap: 2.25rem;
      width: 100%;
    }
  }

  .buttons a {
    text-decoration: none;
  }
`
export const ButtonRetour = styled.div`
  border: 0;
  position: absolute;
  bottom: 2rem;
  left: 2rem;

  cursor: pointer;

  @media (max-width: 1680px) {
    font-size: 1rem;
    height: 3rem;
  }

  padding: 0.75rem 2rem;
  font-size: 1.25rem;
  background: ${(props) => props.theme["blue-700"]};
  border-radius: 8px;
  color: white;

  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
