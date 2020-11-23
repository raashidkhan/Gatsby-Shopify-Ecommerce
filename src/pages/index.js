import React from "react"
import { Link } from "gatsby"
import ProductListing from "../components/products/ProductListing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductListing />
  </Layout>
)

export default IndexPage
