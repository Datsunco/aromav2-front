import { listEvents } from "@lib/data/event"
import WomanMeetTemplate from "@modules/women-meet/templates"
import { Metadata } from "next"
import { Event } from "types/event"

export const metadata: Metadata = {
  title: "Женские встречи",
  description: "Женские встречи",
}

export default async function NumerologyPage() {
  const data = await listEvents()
  return <WomanMeetTemplate events={data.collections as Event[]} />
}
