import * as React from "react"

const PageTitle = props => {
  return (
    <div style={{ backgroundColor: "#F6FCFF" }}>
      <div className="container">
        <div className="h1 pageTitle text-center">{props.title}</div>
      </div>
    </div>
  )
}

export default PageTitle
