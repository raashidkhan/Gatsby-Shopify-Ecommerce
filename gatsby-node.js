const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allShopifyProduct {
        nodes {
          handle
          shopifyId
          productType
        }
      }
      allShopifyCollection {
        nodes {
          handle
          shopifyId
        }
      }
      allShopifyArticle {
        edges {
          next {
            handle
          }
          node {
            handle
          }
          previous {
            handle
          }
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
        type: item.productType,
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
  result.data.allShopifyArticle.edges.forEach(item => {
    let previousArticle = ""
    item.previous === null
      ? (previousArticle = "")
      : (previousArticle = item.previous.handle)

    let nextArticle = ""
    item.next === null ? (nextArticle = "") : (nextArticle = item.next.handle)

    createPage({
      path: `/blogs/${item.node.handle}`,
      component: path.resolve(`src/templates/BlogPage.js`),
      context: {
        slug: item.node.handle,
        next: nextArticle,
        previous: previousArticle,
      },
    })
  })
}
