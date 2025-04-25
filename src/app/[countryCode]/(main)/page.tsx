import { Metadata } from "next"

import Banner from "@modules/home/components/banner"
import FeaturesPreview from "@modules/home/components/features-preview"
import FeaturedProducts from "@modules/home/components/featured-products"

import { getRegion } from "@lib/data/regions"
import { listCollections } from "@lib/data/collections"
import EventsScroll from "@modules/home/components/event-scroll"

export const metadata: Metadata = {
  title: "Арома Вдохновение",
  description:
    "Сайт аромастудии",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  // const region = await getRegion(countryCode)

  // const { collections } = await listCollections({
  //   fields: "id, handle, title",
  // })

  // if (!region) {
  //   return null
  // }

  return (
    <>
      <Banner />
      
      <FeaturesPreview />
      <EventsScroll/>
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
    </>
  )
}
