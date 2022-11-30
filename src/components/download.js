import * as React from "react"

const Download = props => {
  return (
    <div
      className={
        "d-flex flex-md-column-reverse flex-sm-column-reverse flex-column-reverse justify-content-between align-items-center section flex-xl-row-reverse flex-lg-row-reverse"
      }
    >
      <div className="col-lg-5">
        <div className="d-flex flex-column">
          <div className="h2">Join WhatsDoc Now!</div>
          <div className="h5" style={{ color: `var(--color-primary)` }}>
            WhatsDoc is FREE to download on the Apple Store and the Google Play
            Store
          </div>
          <div className="d-flex" style={{marginTop: "56px", gap: "8px"}}>
            <a href="https://apps.apple.com/sg/app/whatsdoc-healthcare-for-all/id1529733122">
              <img
                src="https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/store-1.png"
                class="img-fluid"
                alt="Responsive image"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.whatsdoc.app&hl=en&gl=US">
              <img
                src="https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/store-2.png"
                class="img-fluid"
                alt="Responsive image"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <img
          src="https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/06/join.png"
          class="img-fluid"
          alt="Responsive image"
        />
      </div>
    </div>
  )
}

export default Download
