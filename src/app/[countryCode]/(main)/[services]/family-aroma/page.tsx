import GirlsTemplate from "@modules/girls/templates"
import FamilyAromaTemplate from "@modules/services/family-aroma/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ароматерапия для пары",
  description: "Ароматерапия для пары",
}

export default async function FamilyAromatherapy() {
  return <FamilyAromaTemplate />
}
