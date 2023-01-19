import { AtlasContainer } from "./styles"

import AtlasBon from "../../../assets/atlasBon.png"
import { useTranslation } from "react-i18next"
export function AtlasInfo() {
  const { t } = useTranslation()

  return (
    <AtlasContainer>
      <p>{t("schedules")}</p>
      <p>{t("schedules1")}</p>
      <h1>ATLAS</h1>
      <div className="horaires">
        <p>09:00 - 12:00</p>
        <p>14:00 - 17:00</p>
      </div>

      <div className="imgContainer">
        <img src={AtlasBon} alt="" width="80%" height="100%" />
      </div>
    </AtlasContainer>
  )
}
