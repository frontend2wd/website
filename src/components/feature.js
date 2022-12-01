import * as React from "react"

const FeatureItem = props => {
  return (
    <div
      className="d-flex flex-column align-items-center col"
      style={{
        background: "#FFFFFF",
        boxShadow: "0px 10px 50px rgba(47, 171, 226, 0.1)",
        borderRadius: "16px",
        padding: "24px 40px 40px 40px",
      }}
    >
      <div className="h3">{props.title}</div>
      <div className="body1 text-center">{props.desc}</div>
    </div>
  )
}

const Feature = props => {
  return (
    <div className="container d-flex flex-column align-items-center section">
      <div className="h2">{props.data.sectionTitle}</div>
      <div
        className="d-flex flex-column flex-lg-row flex-lg-row flex-xl-row justify-content-between feature-gap"
        style={{ gap: "24px" }}
      >
        {props.data.data.map((item, index) => {
          return <FeatureItem title={item.title} desc={item.desc} />
        })}
      </div>
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{
          // background: "#2FABE2",
          border: "1px solid #2FABE2",
          borderRadius: "6px",
          padding: "16px 40px",
          width: "180px",
        }}
      >
        <span className="subtitle2" style={{ color: `var(--color-primary)` }}>
          Read More
        </span>
      </button>
    </div>
  )
}

export default Feature
