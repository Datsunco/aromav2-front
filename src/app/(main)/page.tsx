import { Metadata } from "next"

import Banner from "@modules/home/components/banner"
import FeaturesPreview from "@modules/home/components/features-preview"
import FeaturedProducts from "@modules/home/components/featured-products"

import { getRegion } from "@lib/data/regions"
import { listCollections } from "@lib/data/collections"
import EventsScroll from "@modules/home/components/event-scroll"
import { Event } from "types/event"
import AboutSection from "@modules/home/components/about"
import ReviewCarousel from "@modules/default/reviews"
import FunctionsList from "@modules/default/functions-list"
import { listEvents } from "@lib/data/event"
import { getBannerData } from "@lib/data/banner"

// export const metadata: Metadata = {
//   title: "Арома Вдохновение",
//   description: "Сайт аромастудии",
// }

// ПРИНУДИТЕЛЬНАЯ СТАТИЧЕСКАЯ ГЕНЕРАЦИЯ
export const dynamic = "force-static"
export const revalidate = 3600 // Обновлять каждый час

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Арома Вдохновение - Студия ароматерапии и духовного развития в Мытищах",
    description:
      "🌿 Профессиональная ароматерапия, нумерология, мастер-классы и женские практики в Мытищах. ✨ Индивидуальные сеансы, девичники, создание парфюма. Запись: +7 916 675-78-95",
    keywords: [
      "ароматерапия Мытищи",
      "эфирные масла Москва",
      "нумерология Мытищи",
      "женские практики",
      "создание парфюма",
      "мастер классы ароматерапия",
      "духовное развитие",
      "девичники с ароматами",
      "индивидуальная ароматерапия",
      "Жанна Доценко ароматерапевт",
    ],
    authors: [{ name: "Жанна Доценко", url: "https://t.me/zhannadotsenko" }],
    creator: "Жанна Доценко - Сертифицированный ароматерапевт",
    publisher: "Арома Вдохновение",
    category: "Здоровье и красота",
    openGraph: {
      type: "website",
      locale: "ru_RU",
      title: "Арома Вдохновение - Студия ароматерапии в Мытищах",
      description:
        "🌿 Профессиональная ароматерапия и духовные практики. Индивидуальные сеансы, мастер-классы, девичники. ✨ Запись: +7 916 675-78-95",
      siteName: "Арома Вдохновение",
      images: [
        {
          url: "/images/home-banner-og.jpg",
          width: 1200,
          height: 630,
          alt: "Арома Вдохновение - Студия ароматерапии в Мытищах",
        },
        {
          url: "/images/home-square.jpg",
          width: 1080,
          height: 1080,
          alt: "Профессиональная ароматерапия и мастер-классы",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Арома Вдохновение - Студия ароматерапии в Мытищах",
      description:
        "🌿 Профессиональная ароматерапия, нумерология, мастер-классы. Запись: +7 916 675-78-95",
      images: ["/images/home-banner-og.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/`,
      languages: {
        ru: "/ru",
      },
    },
    other: {
      "geo.region": "RU-MO",
      "geo.placename": "Мытищи",
      "geo.position": "55.893263;37.724481",
      ICBM: "55.893263, 37.724481",
    },
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Арома Вдохновение",
  description: "Студия ароматерапии и духовного развития",
  url: "https://aroma-inspiration.ru",
  telephone: "+7-916-675-78-95",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "ул. Веры Волошиной, дом 14, бизнес-центр Разумихин, 3 этаж, кабинет 315",
    addressLocality: "Мытищи",
    addressRegion: "Московская область",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.893263,
    longitude: 37.724481,
  },
  openingHours: "Mo-Su 09:00-21:00",
  priceRange: "₽₽",
  founder: {
    "@type": "Person",
    name: "Жанна Доценко",
  },
  serviceType: [
    "Ароматерапия",
    "Нумерология",
    "Мастер-классы",
    "Женские практики",
  ],
}

export default async function Home() {
  const data = await listEvents()
  const banner = await getBannerData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner banner={banner} />
      <FeaturesPreview />
      <div className="mt-40">
        <FunctionsList />
      </div>
      <div className="mt-40">
        <EventsScroll events={data.collections as Event[]} />
      </div>
      <div className="mt-40">
        <AboutSection />
      </div>
      <ReviewCarousel />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
    </>
  )
}
