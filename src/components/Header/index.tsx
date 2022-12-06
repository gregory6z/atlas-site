import { HeaderContainer } from "./styles"

import logoAtlasCarpiagne from "../../assets/logo-atlas-carpiagne.svg"
import logoAtlas from "../../assets/logo-atlas.png"
import logoFlemme from "../../assets/flemme-1rec.png"
import { NavLink } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <div className="logos">
          <LazyLoadImage effect="blur" className="logoFlemme" src={logoFlemme} width="100%" height="100%" loading="lazy" />
          <LazyLoadImage effect="blur" className="logoAtlasImg" src={logoAtlas} alt="" loading="lazy" height="100%"/>
        </div>
      </NavLink>
      <LazyLoadImage className="logoAtlasCarpiagne" src={logoAtlasCarpiagne} alt="" width="100%" height="100%" />
    </HeaderContainer>
  )
}
