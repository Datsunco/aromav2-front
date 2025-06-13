import { Metadata } from "next"

import { listEvents } from "@lib/data/event"

import EventsTemplate from "@modules/events/templates"

export const metadata: Metadata = {
  title: "Арома Вдохновение - Расписание",
  description: "Сайт аромастудии",
}

export default async function EventsPage(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const data = await listEvents()

  return (
    <>
      <EventsTemplate events={data.collections} />
    </>
  )
}
