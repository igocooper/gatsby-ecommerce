import React from "react"
import Product from "./product"
import { graphql, StaticQuery } from "gatsby"

const PRODUCTS_QUERY = graphql`
  query AllProducts {
    allStripeSku {
      edges {
        node {
          id
          price
          attributes {
            name
          }
          product {
            name
            id
          }
        }
      }
    }
    allStripeProduct {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={PRODUCTS_QUERY}
      render={({ allStripeSku, allStripeProduct }) => {
        return allStripeProduct.edges.map(product => {
          const skus = allStripeSku.edges.filter(
            sku => sku.node.product.id === product.node.id
          )
          return <Product key={product.node.id} product={product} skus={skus} />
        })
      }}
    />
  )
}

export default Products
