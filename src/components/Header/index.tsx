import {
  FlagContainer,
  FlagContainerMobile,
  HeaderContainer,
  MenuMobile,
} from "./styles"

import logoAtlasCarpiagne from "../../assets/logo-atlas-carpiagne.svg"
import logoAtlas from "../../assets/logo-atlas.png"
import logoFlemme from "../../assets/flemme-1rec.png"
import { NavLink } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import * as Dialog from "@radix-ui/react-dialog"
import { LanguageModal } from "../LanguageModal"
import { useContext } from "react"
import { PdfContext } from "../../context"
import { List } from "phosphor-react"
import { NavBarModal } from "../NavBarModal"

export function Header() {
  const { lang } = useContext(PdfContext)

  return (
    <HeaderContainer>
      <div className="logos">
        <NavLink to="/">
          <div className="logoLeft">
            <LazyLoadImage
              effect="blur"
              className="logoFlemme"
              src={logoFlemme}
              width="100%"
              height="100%"
              loading="lazy"
            />
            <LazyLoadImage
              effect="blur"
              className="logoAtlasImg"
              src={logoAtlas}
              alt=""
              loading="lazy"
              height="100%"
            />
          </div>
        </NavLink>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <MenuMobile>
              <List size={50} weight="bold" color="#000" />
            </MenuMobile>
          </Dialog.Trigger>
          <NavBarModal />
        </Dialog.Root>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <FlagContainer>
              Langage
              <img src={String(lang)} alt="" />
            </FlagContainer>
          </Dialog.Trigger>

          <Dialog.Trigger asChild>
            <FlagContainerMobile>
              <img src={String(lang)} alt="" />
            </FlagContainerMobile>
          </Dialog.Trigger>

          <LanguageModal />
        </Dialog.Root>
      </div>
      <NavLink to="/">
        <LazyLoadImage
          className="logoAtlasCarpiagne"
          src={logoAtlasCarpiagne}
          alt=""
        />
      </NavLink>
    </HeaderContainer>
  )
}
