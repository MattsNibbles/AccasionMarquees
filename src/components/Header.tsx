import * as React from "react"
import { Link } from "gatsby"

type props = {
  siteTitle: string
}

const Header = ({ siteTitle }: props) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

export default Header
