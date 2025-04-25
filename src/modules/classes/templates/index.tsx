"use client"

import Header from "@modules/default/header"

import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"

const data: ServiceCardType[] = [
  {
    type: "Мероприятие",
    title: "Создание ресурсного аромата",
    link: "/",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
  {
    type: "Мероприятие",
    title: "Создание индивидуального парфюма",
    link: "/",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Мероприятие",
    title: "Создание ресурсного аромата по дате рождения",
    link: "/",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#E9E9F5]",
  },
  {
    type: "Мероприятие",
    title: "Пятничные посиделки",
    link: "/",
    img: "",
    time: "3 часа",
    classname: "bg-[#F8F8F8]",
  },
  {
    type: "Мероприятие",
    title: "День Рождения Большой ДЕВОЧКИ",
    link: "/",
    img: "",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
]

export default function ClassesTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <Banner img="" title={"Мастер-классы"} />
        <div className="mt-20 mx-4  lg:mx-20">
          <h2 className="font-acrom text-4xl font-semibold">Афиша событий</h2>
          {/* <div className="">Сортировка</div>
          <ServiceList serviceList={data} /> */}
          <div className="flex flex-col mt-10 gap-6">
            <div className="group flex rounded-[30px] h-52 lg:h-80 bg-[url(/images/aromotherapy.png)] bg-contain cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md">
              <div className="w-full mt-auto mb-4 mx-6 lg:mx-10 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="bg-[#B4C3D2] hover:outline outline-1 px-4 py-3 text-base text-white uppercase font-literature font-semibold rounded-3xl group-hover:shadow-md ">
                  <span className="drop-shadow-lg"> Подробнее</span>
                </button>
              </div>
            </div>

            <div className="group flex rounded-[30px] h-52 lg:h-80 bg-[url(/images/aromotherapy.png)] bg-contain cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md">
              <div className="w-full mt-auto mb-4 mx-6 lg:mx-10 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="bg-[#B4C3D2] hover:outline outline-1 px-4 py-3 text-base text-white uppercase font-literature font-semibold rounded-3xl group-hover:shadow-md ">
                  <span className="drop-shadow-lg"> Подробнее</span>
                </button>
              </div>
            </div>

            <div className="group flex rounded-[30px] h-52 lg:h-80 bg-[url(/images/aromotherapy.png)] bg-contain cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md">
              <div className="w-full mt-auto mb-4 mx-6 lg:mx-10 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="bg-[#B4C3D2] hover:outline outline-1 px-4 py-3 text-base text-white uppercase font-literature font-semibold rounded-3xl group-hover:shadow-md ">
                  <span className="drop-shadow-lg"> Подробнее</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
