import * as React from "react"

const Banner = props => {
  return (
    <div style={{ backgroundColor: "#F6FCFF" }}>
      <div className="container">
        <div
          className="d-flex flex-xl-row flex-lg-row flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-between align-items-center"
          style={{ padding: "80px 0px" }}
        >
          <div className="col-lg-5">
            <div className="d-flex flex-column ">
              <div className="h4" style={{ color: `var(--color-primary)` }}>
                Get Answers. Get Well.
              </div>
              <div
                className="h1"
                style={{ marginTop: "16px", marginBottom: "48px" }}
              >
                Healthcare Direct Messaging App For Your Needs
              </div>
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  background: "#2FABE2",
                  border: "1px solid #2FABE2",
                  borderRadius: "6px",
                  padding: "16px 40px",
                  width: "180px",
                }}
              >
                <span className="subtitle2">Explore Now</span>
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/Frame-1406.png"
              class="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
