const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allShopifyProduct {
        nodes {
          handle
          shopifyId
        }
      }
      allShopifyCollection {
        nodes {
          handle
          shopifyId
        }
      }
    }
  `)

  result.data.allShopifyProduct.nodes.forEach(item => {
    createPage({
      path: `/product/${item.handle}`,
      component: path.resolve(`src/templates/ProductPage.js`),
      context: {
        slug: item.handle,
      },
    })
  })
  result.data.allShopifyCollection.nodes.forEach(item => {
    createPage({
      path: `/collection/${item.handle}`,
      component: path.resolve(`src/templates/CollectionPage.js`),
      context: {
        slug: item.handle,
      },
    })
  })
}
