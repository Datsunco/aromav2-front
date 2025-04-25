import IndividualAromaTemplate from "@modules/services/inividual-aroma/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ароматерапия для пары",
  description: "Ароматерапия для пары",
}

export default async function FamilyAromatherapy() {
  return <IndividualAromaTemplate />
}
