import React from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  storefrontAccessToken: process.env.SHOPIFY_API_KEY,
  domain: `${process.env.SHOPIFY_STORE_NAME}.myshopify.com`,
})

export const defaultStoreContext = {
  client,
  adding: true,
  isCartOpen: false,
  checkout: { lineItems: [] },
  //products: [],
  //shop: {},
  //filteredType: "all",
  //filteredSort: "featured",
  customerAccessToken: null,
  setValue: () => {},
  buyNow: async () => {},
  addToCart: () => {},
  //addVariantToCartAndBuyNow: () => {},
  //removeLineItem: () => {},
  //updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext
