import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { typeScale } from "../utils"
const Policy = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Section>
        <h2>{data.shopifyShopPolicy.title}</h2>
        <article className="body">{parse(data.shopifyShopPolicy.body)}</article>
      </Section>
    </Layout>
  )
}

export default Policy

const Section = styled.section`
  padding: 10vw 5vw;

  h2 {
    margin-bottom: 3.2rem;
    font-size: ${typeScale.header3};
  }

  article {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1.6rem;
    }
    p {
      margin-bottom: 3.2rem;
    }
  }
`
export const query = graphql`
  query($slug: String!) {
    shopifyShopPolicy(handle: { eq: $slug }) {
      body
      title
    }
  }
`
