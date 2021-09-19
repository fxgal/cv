// import { Link } from "gatsby"
import React from "react"
// import routes from "../../data/routes.json"

const Navigator = () => {
  return (
    <div className="navigator">
      {/* {routes?.map(item => (
        <Link
          to={`/${item.page}`}
          className={`far fa-circle nav-item active ${
            window.location?.pathname?.includes(item.page) ? "active" : ""
          }`}
          title={item.name}
        />
      ))} */}
    </div>
  )
}

export default Navigator
