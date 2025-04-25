"use client"

import Header from "@modules/default/header"

import Banner from "../components/banner"
import InfoBlock from "../components/info-first-block"
import SecondInfoBlock from "../components/info-second-block"
import InfoThirdBlock from "../components/info-third-block"
import ReviewCarousel from "../components/reviews"

export default function IndividualAromaTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <Banner img="/images/wonem-meet.png" title={"Прием ароматерапевта"} />
        <InfoBlock />
        <SecondInfoBlock />
        <InfoThirdBlock />
        
      </section>
      <ReviewCarousel />
    </div>
  )
}
