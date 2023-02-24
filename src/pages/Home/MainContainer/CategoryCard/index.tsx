import { CategoryCardContainer } from "../styles"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

interface CategoryCardProps {
  category?: string | null
  image?: string
  link: string
}

export function CategoryCard({ category, image, link }: CategoryCardProps) {
  return (
    <CategoryCardContainer to={link}>
      <h3>{category}</h3>
      <LazyLoadImage
        src={image}
        alt=""
        width="100%"
        height="85%"
        effect="blur"
      />
    </CategoryCardContainer>
  )
}
