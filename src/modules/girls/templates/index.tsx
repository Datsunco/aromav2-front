"use client"

import Header from "@modules/default/header"

import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"

const data: ServiceCardType[] = [
  {
    type: "Мероприятие",
    title: "Создание ресурсного аромата",
    link: "/services/resource-parfume",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
  {
    type: "Мероприятие",
    title: "Создание индивидуального парфюма",
    link: "/services/individual-parfume",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Мероприятие",
    title: "Архетипы и аромаплатье",
    link: "/services/aroma-dress",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
  // {
  //   type: "Мероприятие",
  //   title: "Создание ресурсного аромата по дате рождения",
  //   link: "/",
  //   img: "/images/creationaromo.png",
  //   time: "3 часа",
  //   classname: "bg-[#E9E9F5]",
  // },
  // {
  //   type: "Мероприятие",
  //   title: "Пятничные посиделки",
  //   link: "/",
  //   img: "",
  //   time: "3 часа",
  //   classname: "bg-[#F8F8F8]",
  // },
  // {
  //   type: "Мероприятие",
  //   title: "День Рождения Большой ДЕВОЧКИ",
  //   link: "/",
  //   img: "",
  //   time: "3 часа",
  //   classname: "bg-[#FFEFC8]",
  // },
]

export default function GirlsTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-2 md:mt-8 lg:mt-16">
        {/* Банер */}
        <Banner img="/images/wonem-meet.png" title={"Девичники"} />
        <div className="flex min-h-[800px] mt-10 flex-col lg:flex-row px-2">
          <div className="">Сортировка</div>
          <ServiceList serviceList={data} />
        </div>
      </section>
    </div>
  )
}
