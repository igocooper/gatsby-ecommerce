import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const SuccessPage = () => (
  <Layout>
    <h1>Thanks for your order 🤝</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
