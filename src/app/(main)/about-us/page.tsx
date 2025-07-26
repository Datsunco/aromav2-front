import { Metadata } from "next"

import AboutSection from "@modules/home/components/about"
import Header from "@modules/default/header"
import ReviewCarousel from "@modules/default/reviews"

export const metadata: Metadata = {
  title: "Арома Вдохновение",
  description: "Сайт аромастудии",
}

export default async function AboutUs() {
  return (
    <>
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      <div className="mt-6 md:mt-20 max-w-6xl mx-auto">
        <h1 className="px-4 font-acrom font-semibold mb-6 md:mb-20 text-4xl md:text-5xl">
          О студии
        </h1>
        <AboutSection />
      </div>
      <ReviewCarousel />
    </>
  )
}
