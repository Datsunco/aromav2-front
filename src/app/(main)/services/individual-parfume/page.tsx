import IndividualParfumeTemplate from "@modules/services/girls/individual-parfume/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Создание индивидуального парфюма в Мытищах - Мастер-класс парфюмерии",
  description:
    "🌺 Мастер-класс по созданию индивидуального парфюма в Мытищах: натуральные ингредиенты, персональный аромат. 💫 3 часа творчества. Стоимость 4500₽. Запись: +7 916 675-78-95",
  keywords: [
    "создание парфюма Мытищи",
    "мастер класс парфюмерия",
    "индивидуальный парфюм",
    "натуральные духи",
    "парфюмерный мастер класс",
    "создание духов",
    "авторский аромат",
    "парфюмерия обучение",
  ],
  openGraph: {
    title: "Создание индивидуального парфюма в Мытищах - Мастер-класс",
    description:
      "🌺 Создайте свой уникальный аромат из натуральных ингредиентов. 3 часа творчества и вдохновения. 💫 Стоимость 4500₽",
    // type: "service",
    images: [
      {
        url: "/images/individual-parfume-og.jpg",
        width: 1200,
        height: 630,
        alt: "Создание индивидуального парфюма - мастер-класс",
      },
    ],
  },
  alternates: {
    canonical: "/services/individual-parfume",
  },
}

export default async function IndividualParfume() {
  return <IndividualParfumeTemplate />
}
