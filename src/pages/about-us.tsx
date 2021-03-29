import * as React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Link from "../components/Link"

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUs
