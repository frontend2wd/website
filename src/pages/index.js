import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Service from "../components/service"
import Banner from "../components/banner"
import Feature from "../components/feature"

const serviceData = [
  {
    title: "Health & Wellness Forum",
    desc: "A feature specifically available only on WhatsDoc, browse through the listed health forums segregated by categories. With verified healthcare professionals available 24-7 to answer your burning questions, you can be sure to get the trustworthy answers you need!",
    link: "",
    direction: "right",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/Ilustration.png",
  },
  {
    title: "Direct Messaging To Clinicians",
    desc: "Getting health answers has never been so hassle-free! Like any messaging app, connect to a preferred healthcare professional via text, or through audio and video calls.",
    link: "",
    direction: "left",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/Get-Treatment.png",
  },
  {
    title: "TipDoc",
    desc: "Check out our new feature, TipDoc - where you get first hand health care tips from your favourite healthcare professionals! A short news-like feed that is simple and easy to explore. Sharing is caring, and therefore we know how much we love sharing. Tips are meant to inspire and educate, and TipDoc can be shared and posted on your social media channels as well as Whatsapp.",
    link: "",
    direction: "right",
    image:
      "https://web-cdn-whatsdoc.s3.ap-southeast-1.amazonaws.com/2022/05/Get-Well.png",
  },
]

const featureData = {
  sectionTitle: "Why WhatsDoc?",
  data: [
    {
      title: "Accessibility",
      desc: "Easing the process of health-related enquiries, not only for yourself but for your loved ones and pets; all at your fingertips. No more queuing up till late hours and getting stuck in a jam to enquire about a minor condition that you are worried about.",
    },
    {
      title: "Affordability",
      desc: "Healthcare is a basic human right, and with this, you would not have to spend too much to get a second opinion. Access the app with ease and ask your health-related questions with no hidden extra charges. ",
    },
    {
      title: "Quality",
      desc: "Highly secured interface for your personal information, WhatsDoc vets through every verified and trusted healthcare professional that is listed on the app, so stay assured that your health is in good hands.",
    },
  ],
  link: "",
}

const IndexPage = () => (
  <Layout>
    <Banner />
    <div className="container d-flex flex-column" style={{ rowGap: "80px" }}>
      {serviceData.map(item => {
        return (
          <Service
            title={item.title}
            desc={item.desc}
            image={item.image}
            direction={item.direction}
          />
        )
      })}
    </div>
    <Feature data={featureData} />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
