import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { elevation, radius, TextLink, typeScale } from "../../../utils"

const Articles = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyArticle {
        nodes {
          handle
          author {
            firstName
          }
          contentHtml
          excerpt
          excerptHtml
          id
          publishedAt(fromNow: true)
          title
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  `)
  const articles = data.allShopifyArticle.nodes
  return (
    <ArticlesWrapper>
      <FirstArticle className="firstArticle">
        <ArticleImage>
          <Image fluid={articles[0].image.localFile.childImageSharp.fluid} />
        </ArticleImage>
        <h2>{articles[0].title}</h2>
        <p>{articles[0].excerpt.split(" ").splice(0, 45).join(" ")}... </p>
        <TextLink to={`/articles/${articles[0].handle}`}>Read More</TextLink>
      </FirstArticle>

      {articles.slice(0).map((item, index) => {
        return (
          <ArticleCard key={item.id} className={`article-${index}`}>
            <div>
              <Image
                fluid={item.image.localFile.childImageSharp.fluid}
                alt=""
              />
            </div>

            <article>
              <h2>{item.title}</h2>
              <p>{item.excerpt.split(" ").splice(0, 20).join(" ")}... </p>
              <TextLink to={`/articles/${item.handle}`}>Read More</TextLink>
            </article>
          </ArticleCard>
        )
      })}
    </ArticlesWrapper>
  )
}

export default Articles

const ArticlesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2.5vw 2.5vw;
  grid-template-areas:
    "articleOne articleTwo"
    "articleOne articleThree"
    "articleOne articleFour";
  & > * {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: ${radius.medium};
    overflow: hidden;
  }
  .firstArticle {
    grid-area: articleOne;
  }
  .article-1 {
    grid-area: articleTwo;
  }
  .article-2 {
    grid-area: articleThree;
  }
  .article-3 {
    grid-area: articleFour;
  }
`

const FirstArticle = styled.article`
  h2 {
    margin: 2.4rem 0;
    padding: 0 2.4rem;
  }
  p {
    margin-bottom: 0.8rem;
    padding: 0 2.4rem;
  }
  a {
    padding: 0 2.4rem;
  }
`
const ArticleImage = styled.div`
  height: 65%;

  div {
    width: 100%;
    height: 100%;
  }
`

const ArticleCard = styled.div`
  display: flex;

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
