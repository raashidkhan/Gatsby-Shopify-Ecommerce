import React from "react"
import Layout from "../components/layout"
import Hero from "../components/homepage/Hero"
import Collection from "../components/homepage/Collection"
import NewArrivals from "../components/homepage/NewArrivals"
import Articles from "../components/homepage/Articles"
import styled from "styled-components"
import { Devices } from "../utils"
const IndexPage = () => (
  <Layout>
    <PageWrapper>
      <Hero />
      <Collection />
      <NewArrivals />
      <Articles />
    </PageWrapper>
  </Layout>
)

export default IndexPage
const PageWrapper = styled.div`
  width: 100vw;
  padding: 5vw;
  padding-bottom: 0;

  @media ${Devices.tab} {
    padding-top: 10vw;
  }
`
