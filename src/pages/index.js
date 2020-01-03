import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo/WTM-Main.svg";
import SM from "../components/socialmedia";
import LP from "../components/landing";
import EventSlide from '../components/EventSlide'
import EventSlideShow from '../components/EventSlideShow'
import EventSection from '../components/EventSection'
import EventPage from './EventPage'
const IndexPage = () => (
  <EventPage
    title="IWD'20"
    info={{
      location: "Algiers",
      date: "2020-03-8",
      website: "www.iwd.com"
    }}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac odio tempor orci dapibus ultrices in iaculis.Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Risus nec feugiat in fermentum…."

  >

  </EventPage>

)

export default IndexPage
