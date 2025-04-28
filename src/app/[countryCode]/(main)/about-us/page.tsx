import { Metadata } from "next"

import AboutSection from "@modules/home/components/about"
import Header from "@modules/default/header"
import ReviewCarousel from "@modules/default/reviews"

export const metadata: Metadata = {
  title: "Арома Вдохновение",
  description: "Сайт аромастудии",
}

export default async function AboutUs(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  return (
    <>
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      <div className="mt-20">
        <AboutSection />
      </div>
      <ReviewCarousel />
    </>
  )
}
