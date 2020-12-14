import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { PrimarySolidButton, typeScale, radius, Devices } from "../../utils"
//import HeroImage from "../../assets/hero.jpg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-2.jpg" }) {
        relativePath
        childImageSharp {
          fluid(quality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  const HeroImage = data.file.childImageSharp.fluid
  return (
    <HeroHeader>
      <HeroHeaderImage>
        <Image fluid={HeroImage} />
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

const HeroHeader = styled.header`
  width: 100%;
  height: 60vh;
  position: relative;
  margin-bottom: 2.5vw;

  @media ${Devices.tab} {
    height: 45vh;
    margin-bottom: 5vw;
  }
`

const HeroHeaderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${radius.large};
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`
const HeroHeaderTitle = styled.h1`
  font-size: ${typeScale.header3};
  position: absolute;
  width: 40%;
  top: 50%;
  left: 5vw;
  transform: translateY(-50%);
  z-index: 5;
  //mix-blend-mode: exclusion;
  @media ${Devices.tab} {
    width: 50%;
  }
  @media ${Devices.mobile} {
    width: 80%;
    font-size: ${typeScale.header4};
  }
  & > span {
    display: block;
    margin-bottom: 2.4rem;
  }
`
