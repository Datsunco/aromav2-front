import ResourceParfumeTemplate from "@modules/services/girls/resource-parfume/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Девичник: Создание ресурсного аромата",
  description: "Ароматерапия для пары",
}

export default async function IndividualParfume() {
  return <ResourceParfumeTemplate />
}
