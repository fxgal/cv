import React from "react"

const ProgressElement = ({ item }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-item">
        <div className="progress-title-wrapper">
          <span className="progress-title">{item.title}</span>
          {item.subtitle && (
            <div>
              <span className="progress-subtitle">{item.subtitle}</span>
              <span class="progress-percent-badge"> {item.percent}%</span>
            </div>
          )}
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={item.percent}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: `${item.percent}%` }}
          >
            {/* <span class="progress-percent"> 85%</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressElement
