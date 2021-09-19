import { Link } from "gatsby"
import React from "react"
import routes from "../../data/routes.json"

const Navigator = (props) => {
  console.log({props});
  return (
    <div className="navigator">
      {routes?.map(item => {
        return item.hidden ? (
          ""
        ) : (
          <Link
            to={`/${item.page}`}
            className={`nav-item`}
            title={item.name}
            activeClassName="active"
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Navigator
