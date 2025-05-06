import IndividualParfumeTemplate from "@modules/services/girls/individual-parfume/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Девичник: Создание индивидуального парфюма",
  description: "Ароматерапия для пары",
}

export default async function IndividualParfume() {
  return <IndividualParfumeTemplate />
}
