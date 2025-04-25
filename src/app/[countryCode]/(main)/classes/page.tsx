import ClassesTemplate from "@modules/classes/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Девичник",
  description: "Девичник",
}

export default async function ClassesPage() {
  return <ClassesTemplate />
}
