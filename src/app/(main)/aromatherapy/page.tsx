import AromatherapyTemplate from "@modules/aromatherapy/templates"
import { Metadata } from "next"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title:
    "Ароматерапия в Мытищах - Индивидуальные сеансы и лечение эфирными маслами",
  description:
    "💫 Профессиональная ароматерапия в Мытищах: индивидуальные сеансы, семейная терапия, детская ароматерапия. 🌿 Сертифицированный специалист. Запись: +7 916 675-78-95",
  keywords: [
    "ароматерапия Мытищи",
    "лечение эфирными маслами",
    "индивидуальная ароматерапия",
    "семейная ароматерапия",
    "детская ароматерапия",
    "ароматерапевт Мытищи",
    "эфирные масла терапия",
    "натуральное лечение",
    "холистическая медицина",
    "ароматестирование",
  ],
  openGraph: {
    title:
      "Ароматерапия в Мытищах - Индивидуальные сеансы от сертифицированного специалиста",
    description:
      "💫 Профессиональная ароматерапия: индивидуальные сеансы, семейная и детская терапия. Запись: +7 916 675-78-95",
    type: "website",
    images: [
      {
        url: "/images/aromatherapy-og.jpg",
        width: 1200,
        height: 630,
        alt: "Профессиональная ароматерапия в Мытищах",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ароматерапия в Мытищах - Индивидуальные сеансы",
    description:
      "💫 Профессиональная ароматерапия от сертифицированного специалиста. Запись: +7 916 675-78-95",
  },
  alternates: {
    canonical: "/aromatherapy",
  },
}

export default async function AromatherapyPag() {
  return <AromatherapyTemplate />
}
