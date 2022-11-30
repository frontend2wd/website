import * as React from "react"

const Service = props => {
  const direction =
    props.direction === "left"
      ? "flex-xl-row-reverse flex-lg-row-reverse"
      : "flex-xl-row flex-lg-row"
  return (
    <div
      className={
        "d-flex flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-between align-items-center " +
        direction
      }
    >
      <div className="col-lg-4">
        <div className="d-flex flex-column">
          <div className="h3">{props.title}</div>
          <div
            className="body1"
            style={{ marginTop: "24px", marginBottom: "40px" }}
          >
            {props.desc}
          </div>
          <button
            type="button"
            class="btn btn-outline-primary"
            style={{
              // background: "#2FABE2",
              border: "1px solid #2FABE2",
              borderRadius: "6px",
              padding: "16px 40px",
              width: "180px",
            }}
          >
            <span
              className="subtitle2"
              style={{ color: `var(--color-primary)` }}
            >
              Learn More
            </span>
          </button>
        </div>
      </div>
      <div className="col-lg-7">
        <img src={props.image} class="img-fluid" alt="Responsive image" />
      </div>
    </div>
  )
}

export default Service
