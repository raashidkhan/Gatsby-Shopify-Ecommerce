import React from "react"
import Image from "gatsby-image"
import { TextLink, typeScale, radius, Devices, elevation } from "../../utils"
import styled from "styled-components"
const HorizontalBlogCard = ({ image, title, link, imageAlt }) => {
  return (
    <ArticleCard>
      <ImageWrapper>
        <Image fluid={image} alt={imageAlt} />
        <p>
          <TextLink to={link}>Read More</TextLink>
        </p>
      </ImageWrapper>
      <article>
        <h2>{title}</h2>
      </article>
    </ArticleCard>
  )
}

export default HorizontalBlogCard

const ArticleCard = styled.div`
  overflow: hidden;
  width: 100%;

  @media ${Devices.tab} {
    margin-bottom: 5vw;
  }

  & > article {
    width: 100%;
    padding-top: 2.4rem;

    h2 {
      margin-bottom: 2.4rem;
      font-size: ${typeScale.header5};
      font-weight: 400;
    }
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
  border-radius: ${radius.medium};
  overflow: hidden;
  box-shadow: ${elevation[200]};

  @media ${Devices.tab} {
    height: 30rem;
  }
  @media ${Devices.mobile} {
    height: 20rem;
  }
  & > div {
    width: 100%;
    height: 100%;
  }

  & > p {
    position: absolute;
    bottom: 2.5vw;
    left: 2.5vw;
    z-index: 10;
    padding: 1.6rem;
    background: ${props => props.theme.background};
    border-radius: ${radius.medium};
  }
`
