import React from "react"
import { Link } from "gatsby"
import ProductListing from "../components/products/ProductListing"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero/Hero"
import Collection from "../components/homepage/collection/Collection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Collection />
    <ProductListing />
  </Layout>
)

export default IndexPage
