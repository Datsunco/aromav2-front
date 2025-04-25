import { Metadata } from "next"

import WomenMeetTemplate from "@modules/women-meet/templates"

export const metadata: Metadata = {
  title: "Женские встречи",
  description: "Женские встречи",
}

export default async function NumerologyPage() {
  return <WomenMeetTemplate />
}
