"use client"

import Header from "@modules/default/header"

import Banner from "../components/banner"
import InfoBlock from "../components/info-first-block"
import SecondInfoBlock from "../components/info-second-block"
import InfoThirdBlock from "../components/info-third-block"
import ReviewCarousel from "@modules/default/reviews"

export default function IndividualAromaTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner img="/images/wonem-meet.png" title={"Прием ароматерапевта"} />
        </div>
        <InfoBlock />
        <SecondInfoBlock />
        <InfoThirdBlock />
      </section>
      <ReviewCarousel />

      <div className="md:hidden fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться на прием
        </button>
      </div>
    </div>
  )
}
