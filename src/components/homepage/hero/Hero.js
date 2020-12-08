import React from "react"
import { Link } from "gatsby"
import { HeroHeader, HeroHeaderTitle, HeroHeaderImage } from "./heroStyles"
import { PrimarySolidButton } from "../../../utils"
import HeroImage from "../../../assets/hero.jpg"
const Hero = () => {
  return (
    <HeroHeader>
      <HeroHeaderImage>
        <img src={HeroImage} alt="" />
      </HeroHeaderImage>
      <HeroHeaderTitle>
        <span>We help your keep your surrounding green and clean.</span>
        <Link to="#">
          <PrimarySolidButton>Shop Now</PrimarySolidButton>
        </Link>
      </HeroHeaderTitle>
    </HeroHeader>
  )
}

export default Hero
