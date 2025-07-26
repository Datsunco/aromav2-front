import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"

// export const metadata: Metadata = {
//   title: "Магазин",
//   description: "Explore all of our products.",
// }

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
}

export const dynamic = "force-static"
export const revalidate = 3600

// export async function generateStaticParams() {
//   const regions = await listRegions()
//   const countryCodes = regions?.map(r =>
//     r.countries?.map(c => c.iso_2)
//   ).flat().filter(Boolean) || ["us"]

//   return countryCodes.map(countryCode => ({
//     countryCode
//   }))
// }

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ countryCode: string }>
  searchParams: Promise<{ sortBy?: string; page?: string }>
}): Promise<Metadata> {
  const { page = "1" } = await searchParams
  const pageNumber = parseInt(page)
  const titleSuffix = pageNumber > 1 ? ` - Страница ${pageNumber}` : ""

  return {
    title: `Магазин эфирных масел и ароматерапии в Мытищах${titleSuffix}`,
    description:
      "🛒 Натуральные эфирные масла, ароматические композиции, косметика ручной работы. 🌿 Качественные товары для ароматерапии в Мытищах. Доставка по Москве и области.",
    keywords: [
      "эфирные масла купить Мытищи",
      "натуральная косметика",
      "ароматические масла",
      "товары для ароматерапии",
      "натуральные духи",
      "органическая косметика",
      "эфирные масла высокого качества",
      "ароматерапия товары",
    ],
    openGraph: {
      title: `Магазин эфирных масел и ароматерапии в Мытищах`,
      description:
        "🛒 Натуральные эфирные масла, ароматические композиции, косметика ручной работы. Качественные товары для ароматерапии.",
      type: "website",
      images: [
        {
          url: "/images/store-og.jpg",
          width: 1200,
          height: 630,
          alt: "Магазин эфирных масел и товаров для ароматерапии",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Магазин эфирных масел в Мытищах",
      description:
        "🛒 Натуральные эфирные масла, ароматические композиции, косметика ручной работы",
    },
    robots: {
      index: pageNumber <= 5, // Индексируем только первые 5 страниц
      follow: true,
    },
    alternates: {
      canonical: `/store${pageNumber > 1 ? `?page=${pageNumber}` : ""}`,
      // prev: pageNumber > 1 ? `/store?page=${pageNumber - 1}` : undefined,
      // next: `/store?page=${pageNumber + 1}`,
    },
  }
}

export default async function StorePage(props: Params) {
  const searchParams = await props.searchParams
  const { sortBy, page } = searchParams

  return <StoreTemplate sortBy={sortBy} page={page} countryCode={"ru"} />
}
