import GirlsTemplate from "@modules/girls/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Девичник",
  description: "Девичник",
}

export default async function GirlsPage() {
  return <GirlsTemplate />
}
