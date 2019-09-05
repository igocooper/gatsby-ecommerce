import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Product from "../components/product"
import SEO from "../components/seo"

const tankTopSkus = [
  {
    value: "sku_FkvpxV8wOa0F7o",
    label: "Small"
  },
  {
    value: "sku_FkvpMm6IRMog6S",
    label: "Medium"
  },
  {
    value: "sku_FkvpYhiSqdhUOC",
    label: "Large"
  },
];

const tShirtSkus = [
  {
    value: "sku_Fkvf05b8rndQ2Q",
    label: "Small"
  },
  {
    value: "sku_FkvfoMbNTonOlk",
    label: "Medium"
  },
  {
    value: "sku_FkAz3SHc1exnSA",
    label: "Large"
  },
];

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Product 
          name="T-Shirt"
          image="https://st.depositphotos.com/1813303/2640/v/950/depositphotos_26408557-stock-illustration-front-t-shirt-vector.jpg"
          skus={tShirtSkus}
          defaultSku={tShirtSkus[1].value}
        />
        <Product 
          name="Tank Top"
          image="https://st3.depositphotos.com/1001599/18776/v/1600/depositphotos_187769358-stock-illustration-tank-top-vector-line-icon.jpg"
          skus={tankTopSkus}
          defaultSku={tankTopSkus[1].value}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
