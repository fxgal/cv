/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar/Sidebar"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div id="preloader">
        <div id="status">
          <div className="status-mes"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4 left-col-block blocks">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-8 right-col-block blocks">
          <div className="theiaStickySidebar">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
