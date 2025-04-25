"use client"

import InfoBlock from "../components/info-first-block"
import SecondInfoBlock from "../components/info-second-block"
import InfoThirdBlock from "../components/info-third-block"

import Header from "@modules/default/header"
import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"

const data: ServiceCardType[] = [
  {
    type: "Услуга",
    title: "Индивидуальный прием ароматерапевта",
    link: "/services/individual-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#FFEFC8]",
  },
  {
    type: "Услуга",
    title: "Ароматерапевтическое свидание для пары ",
    link: "/services/family-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Услуга",
    title: "Прием ароматерапевта для детей",
    link: "/services/child-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#E9E9F5]",
  },
]

export default function AromatherapyTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-2 md:mt-8 lg:mt-16">
        {/* Банер */}
        <Banner title="Ароматерапия" img="/images/test.png" />
        <div className="flex min-h-[800px] mt-10 flex-col lg:flex-row px-2">
          <div className="">Сортировка</div>
          <ServiceList serviceList={data} />
        </div>
        {/* <InfoBlock />
        <SecondInfoBlock />
        <InfoThirdBlock /> */}
      </section>
    </div>
  )
}
