import { Metadata } from "next"
import ChildAromaTemplate from "@modules/services/aromatherapy/child-aroma/templates"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Детская ароматерапия в Мытищах - Безопасные сеансы для детей от 9 лет",
  description:
    "👶 Детская ароматерапия в Мытищах: безопасные методы, укрепление иммунитета, помощь в учебе. 🌿 Для детей от 9 лет. Стоимость 5000₽. Запись: +7 916 675-78-95",
  keywords: [
    "детская ароматерапия Мытищи",
    "ароматерапия для детей",
    "эфирные масла детям",
    "безопасная ароматерапия",
    "детский ароматерапевт",
    "укрепление иммунитета детей",
    "помощь в учебе ароматами",
  ],
  openGraph: {
    title: "Детская ароматерапия в Мытищах - Безопасно и эффективно",
    description:
      "👶 Безопасная ароматерапия для детей от 9 лет: укрепление иммунитета, помощь в учебе. 🌿 Стоимость 5000₽",
    // type: "service",
    images: [
      {
        url: "/images/child-aroma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Детская ароматерапия - безопасные сеансы для детей",
      },
    ],
  },
  alternates: {
    canonical: "/services/child-aroma",
  },
}

export default async function ChildAromatherapy() {
  return <ChildAromaTemplate />
}
