import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from "styled-components"
import { Devices, radius, typeScale } from "../utils"
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
        <p>
          by <em>{article.author.name}</em>
        </p>
      </BlogHeader>
      <BlogBody>
        <div
          className="prev"
          style={{
            background: `${
              previous === null
                ? "none"
                : `url(${previous.image.localFile.childImageSharp.fluid.src})`
            }`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {previous === null ? (
            <SecondarySolidButton>
              <Link to={`/blogs/`}>All Blogs</Link>
            </SecondarySolidButton>
          ) : (
            <SecondarySolidButton>
              <Link to={`/blogs/${previous.handle}`}>Prev</Link>
            </SecondarySolidButton>
          )}
        </div>
        <article className="body">{parse(article.contentHtml)}</article>
        <div
          className="next"
          style={{
            background: `${
              next === null
                ? "none"
                : `url(${next.image.localFile.childImageSharp.fluid.src})`
            }`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {next === null ? (
            <SecondarySolidButton>
              <Link to={`/blogs/`}>All Blogs</Link>
            </SecondarySolidButton>
          ) : (
            <SecondarySolidButton>
              <Link to={`/blogs/${next.handle}`}>Next</Link>
            </SecondarySolidButton>
          )}
        </div>
      </BlogBody>
      <NextAndPrevWrapper>
        <div className="prev">
          {previous === null ? (
            <SecondarySolidButton>
              <Link to={`/blogs/`}>All Blogs</Link>
            </SecondarySolidButton>
          ) : (
            <SecondarySolidButton>
              <Link to={`/blogs/${previous.handle}`}>Prev</Link>
            </SecondarySolidButton>
          )}
        </div>
        <div className="next">
          {next === null ? (
            <SecondarySolidButton>
              <Link to={`/blogs/`}>All Blogs</Link>
            </SecondarySolidButton>
          ) : (
            <SecondarySolidButton>
              <Link to={`/blogs/${next.handle}`}>Next</Link>
            </SecondarySolidButton>
          )}
        </div>
      </NextAndPrevWrapper>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query MyArticles($slug: String!, $next: String!, $previous: String!) {
    nextArticle: shopifyArticle(handle: { eq: $next }) {
      handle
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
`
const BlogHeader = styled.header`
  width: 100vw;
  padding: 5vw;
  text-align: center;
  @media ${Devices.tab} {
    padding-top: 7.5rem;
  }
  @media ${Devices.mobile} {
    text-align: left;
  }

  h1 {
    font-weight: 400;
    font-size: ${typeScale.header2};
    @media ${Devices.tab} {
      font-size: ${typeScale.header3};
    }
  }
`
const MainImage = styled.div`
  width: 100%;
  height: 65vh;
  overflow: hidden;
  border-radius: ${radius.large};
  margin-bottom: 2.5vw;
  @media ${Devices.tab} {
    height: auto;
  }
  div {
    width: 100%;
    height: 100%;
  }
`

const BlogBody = styled.article`
  width: 100vw;
  padding: 5vw 0;
  display: grid;
  grid-template-columns: 1fr min(70ch, 100%) 1fr;
  gap: 5vw;
  @media ${Devices.tab} {
    gap: 0;
    padding: 5vw;
  }

  .prev {
    grid-column: 1 / 2;
    position: sticky;
    top: 25vh;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${radius.large};

    @media ${Devices.tab} {
      display: none;
    }
  }
  .body {
    grid-column: 2 / 3;
  }
  .next {
    grid-column: 3 / 4;
    position: sticky;
    top: 25vh;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${radius.large};
    @media ${Devices.tab} {
      display: none;
    }
  }

  & > * {
    //grid-column: 2;
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
  display: none;

  @media ${Devices.tab} {
    display: flex;
    width: 100vw;
    padding: 5vw;
    justify-content: space-between;
    padding-top: 0;
  }
`
