import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { radius, TextLink, typeScale, Devices, green } from "../../utils"
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
    <Blogs>
      <Slide
        slideWidth={42}
        slideHeading="Latest from our blogs"
        viewAll={`/blogs`}
      >
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
    </Blogs>
  )
}

export default Articles

const Blogs = styled.section`
  width: 100vw;
  padding: 5vw;
  background-color: ${green[100]};
  overflow-x: hidden;

  @media ${Devices.tab} {
    margin-top: 5vw;
  }
`
