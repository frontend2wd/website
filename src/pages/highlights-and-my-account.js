import * as React from "react"
import Download from "../components/download"
import Highlight from "../components/highlight"
import PageTitle from "../components/pageTitle"

const pageTitle = "User Guide"

const data = [
  {
    title: "Welcome To WhatsDoc",
    desc: "No sign up is needed at this point. You will be brought through a quick demo of the app features accordingly.",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/07/Frame-1541%403x.png",
      direction: "right",
  },
  {
    title: "Start Chat In Forum",
    desc: "While highlighting our main feature - the Health Forums, you can see the different messages sent by other users enquiring different health conditions. With different focus and specialties, you can be sure your enquiry is well-noted and the available healthcare professionals will try to assist you accordingly.",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/07/Frame-1543%403x.png",
      direction: "left",
  },
  {
    title: "Sign Up And Unlock Exclusive Benefits",
    desc: "Taken interest in the app and would like to send a health message in the forums? Or would you want to set an online appointment with a health professional? This would require you to sign up for an account for security purposes. Your account also would allow you to explore more features and send more health messages.",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/07/Frame-1542%403x.png",
      direction: "right",
  },
]

const Highlights = () => {
  return (
    <>
      <PageTitle title={pageTitle} />
      <div className="container">
        {data.map(item => {
          return (
            <Highlight
              title={item.title}
              desc={item.desc}
              image={item.image}
              direction={item.direction}
            />
          )
        })}
        <Download />
      </div>
    </>
  )
}

export default Highlights
