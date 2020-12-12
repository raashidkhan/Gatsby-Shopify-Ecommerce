import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import ArticleCard from "../blogpage/HorizontalBlogCard"
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
    <>
      <BlogHeading>Latest from our blogs</BlogHeading>
      <ArticlesWrapper>
        <FirstArticle className="firstArticle">
          <ArticleImage>
            <Image fluid={articles[0].image.localFile.childImageSharp.fluid} />
          </ArticleImage>
          <ArticleContent>
            <h2>{articles[0].title}</h2>
            <p>{articles[0].excerpt.split(" ").splice(0, 45).join(" ")}... </p>
            <TextLink to={`/blogs/${articles[0].handle}`}>Read More</TextLink>
          </ArticleContent>
        </FirstArticle>

        {articles.slice(0).map((item, index) => {
          return (
            <ArticleCard
              key={item.id}
              className={`article-${index}`}
              image={item.image.localFile.childImageSharp.fluid}
              imageAlt={""}
              title={item.title}
              excerpt={item.excerpt.split(" ").splice(0, 20).join(" ")}
              link={`/blogs/${item.handle}`}
            />
          )
        })}
      </ArticlesWrapper>
    </>
  )
}

export default Articles

export const BlogHeading = styled.h2`
  font-size: ${typeScale.header4};
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-bottom: 1.4rem;
  text-align: center;
  font-weight: 400;
  margin-bottom: 2.5vw;
  @media ${Devices.mobile} {
    text-align: left;
  }
`

const ArticlesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2.5vw 2.5vw;
  grid-template-areas:
    "articleOne articleTwo"
    "articleOne articleThree"
    "articleOne articleFour";

  @media ${Devices.tab} {
    display: block;
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
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${radius.medium};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${Devices.tab} {
    margin-bottom: 5vw;
  }
  /* h2 {
    margin: 1.6rem 0;
    padding: 0 2.4rem;
  }
  p {
    margin-bottom: 0.8rem;
    padding: 0 2.4rem;
  }
  a {
    padding: 0 2.4rem;
    @media ${Devices.tab} {
      margin-bottom: 2.5vw;
    }
  } */
`
const ArticleImage = styled.div`
  height: 65%;
  @media ${Devices.tab} {
    height: 20rem;
  }

  div {
    width: 100%;
    height: 100%;
  }
`
const ArticleContent = styled.div`
  padding: 2.4rem;

  & > h2 {
    margin-bottom: 2.4rem;
  }
  & > p {
    margin-bottom: 2.4rem;
  }
`
