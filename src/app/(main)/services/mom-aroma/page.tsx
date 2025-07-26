import IndividualAromaTemplate from "@modules/services/aromatherapy/inividual-aroma/templates"
import MomAromaTemplate from "@modules/services/aromatherapy/mom-aroma/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Аромасеанс с мамой в Мытищах - Совместная ароматерапия для мамы и ребенка",
  description:
    "👩‍👧 Аромасеанс с мамой в Мытищах: совместная терапия, укрепление связи, адаптация ребенка. 🌿 Безопасно и эффективно. Стоимость 6000₽. Запись: +7 916 675-78-95",
  keywords: [
    "аромасеанс с мамой Мытищи",
    "совместная ароматерапия",
    "мама и ребенок ароматерапия",
    "укрепление связи мама ребенок",
    "семейная терапия",
    "адаптация ребенка",
    "совместный сеанс ароматерапия",
  ],
  openGraph: {
    title: "Аромасеанс с мамой в Мытищах - Укрепление связи через ароматы",
    description:
      "👩‍👧 Совместная ароматерапия для мамы и ребенка: укрепление связи, адаптация, безопасность. 🌿 Стоимость 6000₽",
    // type: "service",
    images: [
      {
        url: "/images/mom-aroma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Аромасеанс с мамой - совместная ароматерапия",
      },
    ],
  },
  alternates: {
    canonical: "/services/mom-aroma",
  },
}

export default async function MomAromatherapy() {
  return <MomAromaTemplate />
}
