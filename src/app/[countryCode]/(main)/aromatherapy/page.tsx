import AromatherapyTemplate from "@modules/aromatherapy/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Аромотерапия",
  description: "Аромотерапия",
}

export default async function AromatherapyPag() {
  return <AromatherapyTemplate />
}
