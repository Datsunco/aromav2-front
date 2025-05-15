import AromatherapyTemplate from "@modules/aromatherapy/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ароматерапия",
  description: "Ароматерапия",
}

export default async function AromatherapyPag() {
  return <AromatherapyTemplate />
}
