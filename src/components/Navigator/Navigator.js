import React, { useState } from "react"

const Navigator = () => {
  const [hover, setHover] = useState(null)
  const items = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]
  return (
    <div className="navigator">
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <i class="far fa-circle"></i>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigator
