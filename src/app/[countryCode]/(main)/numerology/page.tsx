import { Metadata } from "next"

import NumerologyTemplate from "@modules/numerology/templates"

export const metadata: Metadata = {
  title: "Девичник",
  description: "Девичник",
}

export default async function NumerologyPage() {
  return <NumerologyTemplate />
}
