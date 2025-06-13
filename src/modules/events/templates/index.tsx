import Header from "@modules/default/header"

import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"
import EventsScroll from "@modules/home/components/event-scroll"
import { Event } from "types/event"
import EventListing from "../components/events-list"

export default function EventsTemplate({ events }: { events: Event[] }) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      <div className="px-2">
        <EventsScroll events={events} />
      </div>
      <div className="max-w-5xl flex flex-col mx-auto ">
        <EventListing events={events} />
      </div>
    </div>
  )
}
