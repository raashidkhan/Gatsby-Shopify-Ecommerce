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
    <Hero />
    <Collection />
    <NewArrivals />
    <BestSellers />
    <ShopAll />
    <Articles />
  </Layout>
)

export default IndexPage
