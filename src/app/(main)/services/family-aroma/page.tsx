import GirlsTemplate from "@modules/girls/templates"
import FamilyAromaTemplate from "@modules/services/aromatherapy/family-aroma/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Семейная ароматерапия в Мытищах - Сеанс для пары и гармонизация отношений",
  description:
    "👫 Семейная ароматерапия в Мытищах: гармонизация отношений, работа с парой, создание общих ритуалов. 💕 Стоимость 8000₽. Запись: +7 916 675-78-95",
  keywords: [
    "семейная ароматерапия Мытищи",
    "ароматерапия для пары",
    "гармонизация отношений",
    "парная терапия ароматами",
    "семейные ритуалы",
    "ароматерапия супругов",
    "терапия для двоих",
  ],
  openGraph: {
    title: "Семейная ароматерапия в Мытищах - Гармонизация отношений",
    description:
      "👫 Укрепите отношения через ароматы: гармонизация, создание общих ритуалов, работа с парой. 💕 Стоимость 8000₽",
    // type: "service",
    images: [
      {
        url: "/images/family-aroma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Семейная ароматерапия - гармонизация отношений",
      },
    ],
  },
  alternates: {
    canonical: "/services/family-aroma",
  },
}

export default async function FamilyAromatherapy() {
  return <FamilyAromaTemplate />
}
