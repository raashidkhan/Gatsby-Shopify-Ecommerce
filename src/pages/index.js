import React from "react"
import Layout from "../components/layout"
import Hero from "../components/homepage/Hero"
import Collection from "../components/homepage/Collection"
import NewArrivals from "../components/homepage/NewArrivals"
import Articles from "../components/homepage/Articles"
import styled from "styled-components"
import { Devices } from "../utils"
import BestSellers from "../components/homepage/BestSellers"
import ShopAll from "../components/homepage/ShopAll"
const IndexPage = () => (
  <Layout>
    <PageWrapper>
      <Hero />
      <Collection />
      <NewArrivals />
      <BestSellers />
      <ShopAll />
      <Articles />
    </PageWrapper>
  </Layout>
)

export default IndexPage
const PageWrapper = styled.div`
  width: 100vw;
  padding: 5vw;
  padding-bottom: 0;
  overflow-x: hidden;

  @media ${Devices.tab} {
    padding-top: 10vw;
  }
`
