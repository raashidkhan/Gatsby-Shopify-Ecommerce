import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices } from "../../utils"
import ArticleCard from "../blogpage/HorizontalBlogCard"
import Slide from "../Slide"
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

      <Slide>
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
      </Slide>
    </>
  )
}

export default Articles

const BlogHeading = styled.h2`
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
