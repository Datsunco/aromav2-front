import Header from "@modules/default/header"

import Banner from "@modules/default/banner"

import { ServiceCardType } from "types/service"

export default function ClassesTemplate({}: {}) {
  return (
    <div className="">
      <div className="mx-auto flex max-w-5xl flex-col">
        <Header />
      </div>

      {/* главная секция */}
      <section className="mx-auto mt-8 flex max-w-6xl flex-col">
        <Banner img="" title={"Мастер-классы"} />
        <div className="mx-4 mt-20 lg:mx-20">
          <h2 className="font-acrom text-4xl font-semibold">Афиша событий</h2>
          {/* <div className="">Сортировка</div>
          <ServiceList serviceList={data} /> */}
          {/* ЯЯ НЕ ДОДЕЛААНААЯ ТУПАЯ ПИЗДА ЭТО ВСЕ МОКОВЫЕ ДАННЫЕ */}
          <div className="mt-10 flex flex-col gap-6">
            <div className="group flex h-52 cursor-pointer rounded-[30px] bg-[url(/images/aromotherapy.png)] bg-contain transition-all duration-200 hover:scale-[101%] hover:shadow-md lg:h-80">
              <div className="mx-6 mb-4 mt-auto flex w-full items-end justify-between lg:mx-10">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:underline">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="rounded-3xl bg-[#B4C3D2] px-4 py-3 font-literature text-base font-semibold uppercase text-white outline-1 hover:outline group-hover:shadow-md">
                  <span className="drop-shadow-lg"> Подробнее</span>
                </button>
              </div>
            </div>

            <div className="group flex h-52 cursor-pointer rounded-[30px] bg-[url(/images/aromotherapy.png)] bg-contain transition-all duration-200 hover:scale-[101%] hover:shadow-md lg:h-80">
              <div className="mx-6 mb-4 mt-auto flex w-full items-end justify-between lg:mx-10">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:underline">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="rounded-3xl bg-[#B4C3D2] px-4 py-3 font-literature text-base font-semibold uppercase text-white outline-1 hover:outline group-hover:shadow-md">
                  <span className="drop-shadow-lg"> Подробнее</span>
                </button>
              </div>
            </div>

            <div className="group flex h-52 cursor-pointer rounded-[30px] bg-[url(/images/aromotherapy.png)] bg-contain transition-all duration-200 hover:scale-[101%] hover:shadow-md lg:h-80">
              <div className="mx-6 mb-4 mt-auto flex w-full items-end justify-between lg:mx-10">
                <div className="flex flex-col">
                  <span className="font-acrom text-2xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:underline">
                    Нейростатус
                  </span>
                  <span className="text-lg text-white drop-shadow-md">
                    Описание мастер-класса по аромочетотам
                  </span>
                </div>
                <button className="rounded-3xl bg-[#B4C3D2] px-4 py-3 font-literature text-base font-semibold uppercase text-white outline-1 hover:outline group-hover:shadow-md">
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
