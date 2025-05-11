import ChildAromaTemplate from "@modules/services/aromatherapy/child-aroma/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ароматерапия для детей",
  description: "Ароматерапия для детей",
}

export default async function ChildAromatherapy() {
  return <ChildAromaTemplate />
}
