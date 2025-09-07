import React from "react"
import Home from "../v2components/banner"
import FeaturesTabs from "../v2components/features-tabs"
import Benefits from "../v2components/benefits"
import EventsScroll from "../v2components/event-scroll"
import { Event } from "types/event"
import Adds from "../v2components/adds"
import FunctionsList from "../v2components/functions-list"
import About from "../v2components/about"
import ReviewCarousel from "@modules/default/reviews"

const HomeTemplateV2 = ({ events }: { events: Event[] }) => {
  return (
    <div>
      <Home />
      <FeaturesTabs />
      <Benefits />
      <EventsScroll events={events} />
      <Adds />
      <FunctionsList />
      <About />
      <ReviewCarousel />
    </div>
  )
}

export default HomeTemplateV2
