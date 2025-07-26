import PotentialFunctionTemplate from "@modules/functions/potential/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Энергия имени в Мытищах - Нумерологический анализ имени и судьбы",
  description:
    "🔤 Узнайте энергетический потенциал своего имени в Мытищах: влияние на судьбу, характер, жизненный путь. 🌟 Персональный анализ. Запись: +7 916 675-78-95",
  keywords: [
    "энергия имени Мытищи",
    "нумерология имени",
    "анализ имени",
    "влияние имени на судьбу",
    "энергетика имени",
    "нумерологический анализ",
    "имя и характер",
    "судьба по имени",
  ],
  openGraph: {
    title: "Энергия имени в Мытищах - Нумерологический анализ",
    description:
      "🔤 Откройте тайну своего имени: влияние на судьбу, характер, жизненный путь. 🌟 Персональный анализ",
    // type: "service",
    images: [
      {
        url: "/images/name-energy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Энергия имени - нумерологический анализ",
      },
    ],
  },
  alternates: {
    canonical: "/functions/name-energy",
  },
}

export default async function PotentialFunction() {
  return <PotentialFunctionTemplate />
}
