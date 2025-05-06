import ArchetypesPerfumeTemplate from "@modules/services/girls/aromo-dress/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Девичник: Архетипы и аромаплатье",
  description:
    "Через обонятельное тестирование мы погрузимся в мир женских архетипов. А затем создадим каждая своё арома-платье и примерим на себя желаемый архетип.",
}

export default async function AromaDress() {
  return <ArchetypesPerfumeTemplate />
}
