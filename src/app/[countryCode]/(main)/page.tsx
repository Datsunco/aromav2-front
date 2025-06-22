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

export const metadata: Metadata = {
  title: "Арома Вдохновение",
  description: "Сайт аромастудии",
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

  const data = await listEvents()
  const banner = await getBannerData()

  return (
    <>
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
