import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { radius, typeScale } from "../utils"
import parse from "html-react-parser"
import { SecondarySolidButton } from "../utils"
const BlogPage = ({ data }) => {
  const article = data.shopifyArticle
  const next = data.nextArticle
  const previous = data.previousArticle

  console.log(next, previous)
  return (
    <Layout>
      <BlogHeader>
        <MainImage>
          <Image fluid={article.image.localFile.childImageSharp.fluid} />
        </MainImage>
        <h1>{article.title}</h1>
        <p style={{ textAlign: "center" }}>
          by <em>{article.author.name}</em>
        </p>
      </BlogHeader>
      <BlogBody>{parse(article.contentHtml)}</BlogBody>
      <NextAndPrevWrapper>
        {previous === null ? (
          <SecondarySolidButton>
            <Link to={`/blogs/`}>All Blogs</Link>
          </SecondarySolidButton>
        ) : (
          <SecondarySolidButton>
            <Link to={`/blogs/${previous.handle}`}>Prev</Link>
          </SecondarySolidButton>
        )}
        {next === null ? (
          <SecondarySolidButton>
            <Link to={`/blogs/`}>All Blogs</Link>
          </SecondarySolidButton>
        ) : (
          <SecondarySolidButton>
            <Link to={`/blogs/${next.handle}`}>Next</Link>
          </SecondarySolidButton>
        )}
      </NextAndPrevWrapper>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query MyArticles($slug: String!, $next: String!, $previous: String!) {
    nextArticle: shopifyArticle(handle: { eq: $next }) {
      handle
    }
    shopifyArticle(handle: { eq: $slug }) {
      contentHtml
      id
      title
      author {
        name
      }
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
    previousArticle: shopifyArticle(handle: { eq: $previous }) {
      handle
    }
  }
`
const BlogHeader = styled.header`
  width: 100vw;
  padding: 5vw;

  h1 {
    font-weight: 400;
    font-size: ${typeScale.header2};
    text-align: center;
  }
`
const MainImage = styled.div`
  width: 100%;
  height: 65vh;
  overflow: hidden;
  border-radius: ${radius.large};
  margin-bottom: 2.5vw;
  div {
    width: 100%;
    height: 100%;
  }
`

const BlogBody = styled.article`
  width: 100vw;
  padding: 5vw;
  display: grid;
  grid-template-columns: 1fr min(70ch, 100%) 1fr;
  & > * {
    grid-column: 2;
    font-size: ${typeScale.header5};
  }

  & > div {
    width: 100%;
    margin-bottom: 2.4rem;

    img {
      width: 100%;
    }
  }
  & > p {
    width: 100%;
    font-size: ${typeScale.header5};
    margin-bottom: 2.4rem;
    img {
      width: 100%;
    }
  }
`
const NextAndPrevWrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 5vw;
  justify-content: space-between;
  padding-top: 0;
`
