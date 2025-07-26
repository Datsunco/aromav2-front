import ArchetypesPerfumeTemplate from "@modules/services/girls/aromo-dress/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Архетипы и аромаплатье в Мытищах - Женские энергии через ароматы",
  description:
    '👸 Мастер-класс "Архетипы и аромаплатье" в Мытищах: исследование женских энергий, создание персонального аромата. ✨ 2 часа трансформации. Стоимость 3500₽. Запись: +7 916 675-78-95',
  keywords: [
    "женские архетипы Мытищи",
    "аромаплатье",
    "женские энергии",
    "архетипы женщины",
    "трансформация через ароматы",
    "женские практики",
    "самопознание женщины",
    "женская психология",
  ],
  openGraph: {
    title: "Архетипы и аромаплатье в Мытищах - Женские энергии",
    description:
      "👸 Исследуйте женские архетипы и создайте персональное аромаплатье. 2 часа трансформации. ✨ Стоимость 3500₽",
    // type: "service",
    images: [
      {
        url: "/images/aromo-dress-og.jpg",
        width: 1200,
        height: 630,
        alt: "Архетипы и аромаплатье - женские энергии через ароматы",
      },
    ],
  },
  alternates: {
    canonical: "/services/aromo-dress",
  },
}

export default async function AromaDress() {
  return <ArchetypesPerfumeTemplate />
}
