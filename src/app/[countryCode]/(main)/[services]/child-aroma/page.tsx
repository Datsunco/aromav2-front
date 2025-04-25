import ChildAromaTemplate from "@modules/services/child-aroma/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ароматерапия для пары",
  description: "Ароматерапия для пары",
}

export default async function ChildAromatherapy() {
  return <ChildAromaTemplate/>
}
