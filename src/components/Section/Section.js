import React from "react"
import PropTypes from "prop-types"

const Section = ({ title, icon, text, items }) => {
  return (
    <div className="expertise-item">
      <h3>
        <i className={icon}></i> {title}
      </h3>
      {text && <p>{text}</p>}
      {items &&
        items.map((item, key) => (
          <li className="list-group-item" key={key}>
            <i className="fas fa-check"></i>
            {item}
          </li>
        ))}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  items: PropTypes.array,
}

Section.defaultProps = {
  items: [],
}

export default Section
