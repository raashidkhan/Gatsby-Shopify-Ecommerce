import React from "react"
import Image from "gatsby-image"
import { TextLink, typeScale, radius } from "../../utils"
import styled from "styled-components"
const HorizontalBlogCard = ({ key, image, excerpt, title, link, imageAlt }) => {
  return (
    <ArticleCard key={key}>
      <div>
        <Image fluid={image} alt={imageAlt} />
      </div>
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

  & > div {
    width: 40%;
    height: 100%;

    div {
      width: 100%;
      height: 100%;
    }
  }
  & > article {
    width: 60%;
    padding: 2.4rem;

    h2 {
      margin-bottom: 1.2rem;
      font-size: ${typeScale.header5};
    }
    p {
      margin-bottom: 0.8rem;
    }
  }
`
