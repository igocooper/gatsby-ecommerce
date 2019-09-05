import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Products from "../components/products"
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
        <Products/>
      </div>
    </Layout>
  )
}

export default IndexPage
