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
    <HeroWrapper>
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
    </HeroWrapper>
  )
}

export default Hero
const HeroWrapper = styled.header`
  width: 100vw;
  height: 70vh;
  padding: 5vw;
  padding-bottom: 0;

  @media ${Devices.tab} {
    min-height: 50vh;
    //margin-top: 10rem;
    padding-bottom: 5vw;
    padding-top: 7.5rem;
  }
`
const HeroHeader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: ${radius.large};
  overflow-x: hidden;
  overflow-y: hidden;
`

const HeroHeaderImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //border-radius: ${radius.large};
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
