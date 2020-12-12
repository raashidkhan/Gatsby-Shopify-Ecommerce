import React from "react"
import Image from "gatsby-image"
import { TextLink, typeScale, radius, Devices } from "../../utils"
import styled from "styled-components"
const HorizontalBlogCard = ({ image, excerpt, title, link, imageAlt }) => {
  return (
    <ArticleCard>
      <ImageWrapper>
        <Image fluid={image} alt={imageAlt} />
      </ImageWrapper>
      <article>
        <h2>{title}</h2>
        <p>{excerpt.split(" ").splice(0, 20).join(" ")}... </p>
        <TextLink to={link}>Read More</TextLink>
      </article>
    </ArticleCard>
  )
}

export default HorizontalBlogCard

const ArticleCard = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${radius.medium};
  overflow: hidden;
  justify-content: center;

  @media ${Devices.tab} {
    margin-bottom: 5vw;
  }

  & > article {
    width: 60%;
    padding: 2.4rem;
    align-self: center;

    h2 {
      margin-bottom: 2.4rem;
      font-size: ${typeScale.header5};
    }
    p {
      margin-bottom: 2.4rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow-y: hidden;
    }
  }
`
const ImageWrapper = styled.div`
  width: 40%;

  & > div {
    width: 100%;
    height: 100%;
  }
`
