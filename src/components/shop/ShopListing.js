import React, { useState } from "react"
import styled from "styled-components"
import ProductCard from "../products/productCard"
import { FormLabel, green, Select, typeScale } from "../../utils"
const ShopListing = ({ products }) => {
  const [sort, setSort] = useState("featured")
  const [filter, setFilter] = useState("All")
  const handleFilterSort = value => {
    setSort(value)
  }

  const handleCollectionFilter = value => {
    setFilter(value)
  }

  return (
    <ProductListing>
      <h2>All products</h2>
      <SortAndFilter>
        <SortWrapper>
          <FormLabel htmlFor="sortBy">Sort By</FormLabel>
          <Select
            onChange={e => handleFilterSort(e.target.value)}
            onBlur={e => handleFilterSort(e.target.value)}
            id="sortBy"
          >
            <option key={0} value="featured">
              Featured
            </option>
            <option key={1} value="A-Z">
              Alphabetically, A-Z
            </option>
            <option key={2} value="Z-A">
              Alphabetically, Z-A
            </option>
            <option key={3} value="low">
              Price, low to high
            </option>
            <option key={4} value="high">
              Price, high to low
            </option>
          </Select>
        </SortWrapper>
        <FilterWrapper>
          <FormLabel htmlFor="filterBy">Shop by collection</FormLabel>
          <Select
            onChange={e => handleCollectionFilter(e.target.value)}
            onBlur={e => handleCollectionFilter(e.target.value)}
            id="filterBy"
          >
            <option key={0} value="All">
              All
            </option>
            <option key={1} value="Office">
              Office Desk
            </option>
            <option key={2} value="Home">
              Home Decoration
            </option>
            <option key={3} value="Gift">
              Gift a Plant
            </option>
          </Select>
        </FilterWrapper>
      </SortAndFilter>

      <ProductGrid>
        {products
          .filter(p =>
            filter === "All" ? p : p.node.productType.includes(filter)
          )
          .sort(
            sort === "featured"
              ? (a, b) => a.node.publishedAt.localeCompare(b.node.publishedAt)
              : sort === "low"
              ? (a, b) => a.node.variants[0].price - b.node.variants[0].price
              : sort === "high"
              ? (a, b) => b.node.variants[0].price - a.node.variants[0].price
              : sort === "Z-A"
              ? (a, b) => b.node.title.localeCompare(a.node.title)
              : sort === "A-Z"
              ? (a, b) => a.node.title.localeCompare(b.node.title)
              : null
          )
          .map(item => {
            return (
              <ProductCard
                key={item.node.id}
                image={item.node.images[0].localFile.childImageSharp.fluid}
                name={item.node.title}
                price={item.node.variants[0].price}
                id={item.node.variants[0].shopifyId}
                link={item.node.handle}
              />
            )
          })}
      </ProductGrid>
    </ProductListing>
  )
}

export default ShopListing

const ProductListing = styled.section`
  padding: 5vw;

  & > h2 {
    margin-bottom: 2.4rem;
    font-weight: 400;
    font-size: ${typeScale.header4};
    text-transform: uppercase;
    letter-spacing: 8px;
    text-align: center;
    font-weight: 400;
  }
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 45rem;
  grid-auto-rows: 45rem;
  gap: 2.5vw;
`

const SortAndFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem 0;
`
const SortWrapper = styled.div``
const FilterWrapper = styled.div``
