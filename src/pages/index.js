import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero/Hero"
import Collection from "../components/homepage/collection/Collection"
import NewArrivals from "../components/homepage/newArrivals/NewArrivals"
import styled from "styled-components"

const IndexPage = () => (
  <Layout>
    <PageWrapper>
      <Hero />
      <Collection />
      <NewArrivals />
    </PageWrapper>
  </Layout>
)

export default IndexPage
const PageWrapper = styled.div`
  width: 100vw;
  padding: 5vw;
  padding-bottom: 0;
`
