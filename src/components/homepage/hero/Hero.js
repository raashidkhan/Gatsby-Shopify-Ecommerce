import React from "react"
import { Link } from "gatsby"
import { HeroHeader, HeroHeaderTitle, HeroHeaderImage } from "./heroStyles"
import { InternalLinkButton } from "../../../utils"
import HeroImage from "../../../assets/hero.jpg"
const Hero = () => {
  return (
    <HeroHeader>
      <HeroHeaderImage>
        <img src={HeroImage} alt="" />
      </HeroHeaderImage>
      <HeroHeaderTitle>
        We help your keep your surrounding green and clean. <br />
        <Link>
          <InternalLinkButton>Shop Now</InternalLinkButton>
        </Link>
      </HeroHeaderTitle>
    </HeroHeader>
  )
}

export default Hero
