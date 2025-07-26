import IndividualAromaTemplate from "@modules/services/aromatherapy/inividual-aroma/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Индивидуальная ароматерапия в Мытищах - Персональный сеанс ароматолога",
  description:
    "👤 Индивидуальный прием ароматолога в Мытищах: диагностика, подбор эфирных масел, персональная программа. 🌿 Стоимость 5000₽. Запись: +7 916 675-78-95",
  keywords: [
    "индивидуальная ароматерапия Мытищи",
    "персональный ароматолог",
    "индивидуальный сеанс ароматерапия",
    "диагностика ароматами",
    "подбор эфирных масел",
    "ароматестирование личное",
    "консультация ароматерапевт",
  ],
  openGraph: {
    title: "Индивидуальная ароматерапия в Мытищах - Персональный подход",
    description:
      "👤 Персональный сеанс ароматолога: диагностика, подбор масел, индивидуальная программа. 🌿 Стоимость 5000₽",
    // type: "service",
    images: [
      {
        url: "/images/individual-aroma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Индивидуальная ароматерапия - персональный сеанс",
      },
    ],
  },
  alternates: {
    canonical: "/services/individual-aroma",
  },
}

export default async function FamilyAromatherapy() {
  return <IndividualAromaTemplate />
}
