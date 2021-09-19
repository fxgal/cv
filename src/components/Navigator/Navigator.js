import { Link } from "gatsby"
import React from "react"
import routes from "../../data/routes.json"

const Navigator = () => {
  return (
    <div className="navigator">
      {routes?.map((item) => {
        return item.hidden ? (
          ""
        ) : (
          <Link
            to={`/${item.page}`}
            className={`nav-item`}
            title={item.name}
            activeClassName="active"
            key={item.page}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Navigator
