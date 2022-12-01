import * as React from "react"

const Highlight = props => {
  const direction =
    props.direction === "left"
      ? "flex-xl-row-reverse flex-lg-row-reverse"
      : "flex-xl-row flex-lg-row"
  return (
    <div
      className={
        "d-flex flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-between align-items-center section " +
        direction
      }
    >
      <div className="col-lg-5">
        <div className="d-flex flex-column">
          <div className="h2">{props.title}</div>
          <div
            className="body1"
            style={{ marginTop: "40px" }}
          >
            {props.desc}
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={props.image} className="img-fluid" alt="Responsive image" />
      </div>
    </div>
  )
}

export default Highlight
