import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import { elevation, radius, TextLink, typeScale } from "../utils"
import ArticleCard from "../components/blogpage/HorizontalBlogCard"
import Layout from "../components/layout"
const Blog = () => {
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
    <Layout>
      <FirstArticle className="firstArticle">
        <ArticleImage>
          <Image fluid={articles[0].image.localFile.childImageSharp.fluid} />
        </ArticleImage>
        <h2>{articles[0].title}</h2>
        <p>{articles[0].excerpt.split(" ").splice(0, 45).join(" ")}... </p>
        <TextLink to={`/blog/${articles[0].handle}`}>Read More</TextLink>
      </FirstArticle>
      <ArticlesWrapper>
        {articles.slice(1).map((item, index) => {
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
    </Layout>
  )
}

export default Blog

const FirstArticle = styled.header`
  width: 100vw;
  padding: 5vw;
`
const ArticleImage = styled.div`
  width: 100%;
  height: 65vh;
  border-radius: ${radius.large};
  margin-bottom: 2.5vw;
  overflow: hidden;
  box-shadow: ${elevation[100]};
  div {
    width: 100%;
    height: 100%;
  }
`
const ArticlesWrapper = styled.section`
  width: 100vw;
  padding: 5vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 5vw;
`
