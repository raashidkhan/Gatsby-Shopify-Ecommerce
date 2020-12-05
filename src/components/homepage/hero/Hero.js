import React from "react"
import { HeroHeader, HeroHeaderTitle, HeroHeaderImage } from "./heroStyles"
import HeroImage from "../../../assets/hero.jpg"
const Hero = () => {
  return (
    <HeroHeader>
      <HeroHeaderImage>
        <img src={HeroImage} alt="" />
      </HeroHeaderImage>
      <HeroHeaderTitle>
        We help your keep your surrounding green and clean.
        <a href="">Shop Now</a>
      </HeroHeaderTitle>
    </HeroHeader>
  )
}

export default Hero
