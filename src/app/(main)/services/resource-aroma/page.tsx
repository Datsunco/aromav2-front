import ResourceParfumeTemplate from "@modules/services/girls/resource-parfume/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Создание ресурсного аромата в Мытищах - Энергетический заряд через ароматы",
  description:
    "⚡ Создание персонального ресурсного аромата в Мытищах: заряд энергии, повышение продуктивности. 🌿 1,5 часа. От 1500₽. Запись: +7 916 675-78-95",
  keywords: [
    "ресурсный аромат Мытищи",
    "энергетический аромат",
    "аромат для энергии",
    "персональный аромат",
    "повышение продуктивности",
    "заряд энергии ароматами",
    "ресурсное состояние",
  ],
  openGraph: {
    title: "Создание ресурсного аромата в Мытищах - Заряд энергии",
    description:
      "⚡ Персональный ресурсный аромат для энергии и продуктивности. 1,5 часа активности. 🌿 От 1500₽",
    // type: "service",
    images: [
      {
        url: "/images/resource-aroma-og.jpg",
        width: 1200,
        height: 630,
        alt: "Создание ресурсного аромата - заряд энергии",
      },
    ],
  },
  alternates: {
    canonical: "/services/resource-aroma",
  },
}

export default async function IndividualParfume() {
  return <ResourceParfumeTemplate />
}
