import React from "react"
import routes from "../../data/routes.json"

const Navigator = () => {
  return (
    <div className="navigator">
      {routes?.map(item => (
        <a
          className="far fa-circle nav-item"
          key={item.key}
          href={`#${item.page}`}
        ></a>
      ))}
    </div>
  )
}

export default Navigator
