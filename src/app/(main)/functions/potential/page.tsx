import PotentialFunctionTemplate from "@modules/functions/potential/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Узнай потенциал по дате рождения",
  description: "Девичник",
}

export default async function PotentialFunction() {
  return <PotentialFunctionTemplate />
}
