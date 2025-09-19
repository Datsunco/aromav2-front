import { listEvents } from "@lib/data/event"
import NumerologyTemplate from "@modules/numerology/templates"
import { Metadata } from "next"
import { Event } from "types/event"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Нумерология в Мытищах - Персональные расчеты и консультации от эксперта",
  description:
    "🔮 Профессиональная нумерология в Мытищах: персональные расчеты, анализ судьбы, совместимость. ✨ Узнайте тайны своих чисел. Запись: +7 916 675-78-95",
  keywords: [
    "нумерология Мытищи",
    "персональная нумерология",
    "расчет судьбы по числам",
    "нумеролог Мытищи",
    "совместимость по числам",
    "число судьбы",
    "матрица судьбы",
    "энергия чисел",
    "нумерологический анализ",
    "предназначение по дате рождения",
  ],
  openGraph: {
    title: "Нумерология в Мытищах - Персональные расчеты от эксперта",
    description:
      "🔮 Узнайте тайны своей судьбы: персональные расчеты, анализ совместимости, раскрытие потенциала. ✨ Запись: +7 916 675-78-95",
    type: "website",
    images: [
      {
        url: "/images/numerology-og.jpg",
        width: 1200,
        height: 630,
        alt: "Нумерология - персональные расчеты и анализ судьбы",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Нумерология в Мытищах - Раскройте тайны чисел",
    description:
      "🔮 Персональные расчеты, анализ судьбы, совместимость. Узнайте свое предназначение!",
  },
  alternates: {
    canonical: "/numerology",
  },
}

export default async function NumerologyPage() {
  const data = await listEvents()
  return <NumerologyTemplate events={data.collections as Event[]} />
}
