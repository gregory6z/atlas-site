import { CategoryCard } from "./CategoryCard"
import { MainContent } from "./styles"

import imgCims from "../../../assets/cims.svg"
import imgCss from "../../../assets/css.svg"
import imgDeminagement from "../../../assets/deminagement.png"
import imgHabillement from "../../../assets/habillement.png"
import imgVaguemestre from "../../../assets/vaguemestre.png"
import imgOm from "../../../assets/om.png"
import { useTranslation } from "react-i18next"

export function MainContainer() {
  const { t } = useTranslation()
  return (
    <MainContent>
      <CategoryCard category="CIMS" image={imgCims} link="/cims" />
      <CategoryCard category="CCS" image={imgCss} link="/ccs" />
      <CategoryCard category="OM" image={imgOm} link="/om" />
      <CategoryCard
        category={t("move")}
        image={imgDeminagement}
        link="/demenagement"
      />
      <CategoryCard
        category={t("clothing")}
        image={imgHabillement}
        link="/habillement"
      />
      <CategoryCard
        category={t("postOffice")}
        image={imgVaguemestre}
        link="/vaguemestre"
      />
    </MainContent>
  )
}
