import { Metadata } from "next"

import { listEvents } from "@lib/data/event"

import EventsTemplate from "@modules/events/templates"

export const dynamic = "force-static"
export const revalidate = 1800 // 30 минут

export const metadata: Metadata = {
  title: "Мероприятия по ароматерапии в Мытищах - Актуальные события и встречи",
  description:
    "📅 Актуальные мероприятия по ароматерапии и духовным практикам в Мытищах. 🌟 Встречи, семинары, девичники, мастер-классы. Запись: +7 916 675-78-95",
  keywords: [
    "мероприятия ароматерапия Мытищи",
    "события ароматерапия",
    "встречи ароматерапия",
    "семинары эфирные масла",
    "групповые занятия",
    "женские встречи Мытищи",
    "духовные практики события",
  ],
  openGraph: {
    title: "Мероприятия по ароматерапии в Мытищах - Актуальные события",
    description:
      "📅 Не пропустите интересные встречи, семинары и мастер-классы по ароматерапии. 🌟 Запись: +7 916 675-78-95",
    type: "website",
    images: [
      {
        url: "/images/events-og.jpg",
        width: 1200,
        height: 630,
        alt: "Мероприятия по ароматерапии и духовным практикам",
      },
    ],
  },
  alternates: {
    canonical: "/events",
  },
}

export default async function EventsPage() {
  const data = await listEvents()

  return (
    <>
      <EventsTemplate events={data.collections} />
    </>
  )
}
