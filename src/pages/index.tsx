import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "@material-ui/core/Button"
import Link from "../components/Link"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

// @ts-ignore
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={200}
      quality={95}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/contact-us/">Contact Us</Link> <br />
      <Link to="/about-us/">About us"</Link>
    </p>
    <Button color="primary" variant="contained">
      A button!
    </Button>
    <Button color="secondary" variant="contained">
      A button!
    </Button>
  </Layout>
)

export default IndexPage
