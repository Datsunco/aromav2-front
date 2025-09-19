import { Button } from "@medusajs/ui"
import React from "react"

const BigGirlBirthday = () => {
  return (
    <div className="relative mx-auto mt-24 overflow-hidden pb-40">
      {/* <img
        src="/images/big-lavanda.png"
        alt="Лаванда"
        className="absolute bottom-20 z-0 h-[217px] w-[146px] -rotate-[26deg] opacity-[40%] md:-left-20 md:bottom-28 md:h-[450px] md:w-[300px] xl:-left-32 xl:top-32 xl:h-[700px] xl:w-[470px]"
      /> */}

      {/* <img
        src="/images/big-lavanda.png"
        alt="Лаванда"
        className="absolute bottom-20 right-0 z-0 h-[217px] w-[146px] rotate-[20deg] -scale-x-100 opacity-[40%] md:-right-6 md:bottom-40 md:h-[450px] md:w-[300px] xl:-right-0 xl:-top-0 xl:h-[700px] xl:w-[470px]"
      /> */}

      {/* ✅ Возвращена верстка заголовка */}
      <div className="z-10 mb-4 text-center md:mb-12">
        <h2 className="mx-auto max-w-3xl font-kurale text-3xl/tight text-[#2E4F6C] md:text-5xl/tight">
          Вот бы сейчас вместо <br /> этого оказаться в ....
        </h2>
        <p className="tex-xs/none mx-auto mt-4 max-w-[350px] text-center font-jost font-light md:max-w-none md:text-xl/none">
          У каждой есть то, о чём она давно
          <br className="hidden md:flex" /> мечтает и никак не исполнит.
        </p>
      </div>
      {/* <div className="z-0 mx-auto -mb-10 flex max-w-[350px] flex-col md:hidden">
        <div className="space-y-4">
          <p className="z-10 text-center font-jost text-sm/tight text-[#2E4F6C]">
            В каждой из нас живёт ДЕВОЧКА, которая тоже хочет веселья,
            восторгов, радости от исполнившейся мечты{" "}
          </p>
          <p className="z-10 text-center font-jost text-sm/tight text-[#2E4F6C]">
            Собирайте подружек и приходите за прекрасным праздником в
            аромастудию “ВДОХновение”!
          </p>
        </div>
        <div className="flex gap-6">
          <Button className="z-0 mt-10 h-auto w-full rounded-full bg-[#2e4f6c] px-4 py-2 text-xs font-medium text-white shadow-none hover:bg-white hover:text-[#2e4f6c] md:py-3 md:text-base xl:text-lg">
            Отметить день рождения
          </Button>
          <Button className="z-0 mt-10 h-auto w-full rounded-full border-none bg-white px-10 py-2 text-xs font-medium text-[#2e4f6c] shadow-none hover:bg-[#2e4f6c]/90 hover:text-white md:px-16 md:py-3 md:text-base xl:text-lg">
            Узнать подробнее
          </Button>
        </div>
      </div> */}
      <div className="0 z-50 flex w-full items-center justify-center overflow-hidden">
        {/* <div className="hidden max-w-[350px] flex-col md:flex">
          <p className="z-10 font-jost text-xl/tight text-[#2E4F6C]">
            В каждой из нас живёт ДЕВОЧКА, которая тоже хочет веселья,
            восторгов, радости от исполнившейся мечты{" "}
          </p>
          <Button className="mt-10 h-auto w-full rounded-full bg-[#2e4f6c] px-4 py-2 text-sm font-medium text-white shadow-none hover:bg-white hover:text-[#2e4f6c] md:py-3 md:text-base xl:text-lg">
            Отметить день рождения
          </Button>
        </div> */}
        <div className="relative h-[259px] w-[205px] md:h-[482px] md:w-[390px]">
          <p className="absolute -left-8 bottom-52 font-jost text-base font-normal text-[#2E4F6C] md:-left-20 md:bottom-96 md:text-2xl md:font-medium">
            Экскурсия?
          </p>
          <p className="absolute -left-20 bottom-28 font-jost text-base font-normal text-[#2E4F6C] md:-left-32 md:bottom-56 md:text-2xl md:font-medium">
            Мастер-класс <br /> по живописи?
          </p>
          <p className="absolute -left-20 bottom-10 font-jost text-base font-normal text-[#2E4F6C] md:-left-32 md:bottom-20 md:text-2xl md:font-medium">
            Караоке-клуб?
          </p>

          <p className="absolute -right-8 bottom-52 font-jost text-base font-normal text-[#2E4F6C] md:-right-16 md:bottom-96 md:text-2xl md:font-medium">
            Концерт?
          </p>
          <p className="absolute -right-20 bottom-28 font-jost text-base font-normal text-[#2E4F6C] md:-right-32 md:bottom-56 md:text-2xl md:font-medium">
            Мастер-класс
            <br /> по керамике?
          </p>
          <p className="absolute -right-20 bottom-10 font-jost text-base font-normal text-[#2E4F6C] md:-right-32 md:bottom-20 md:text-2xl md:font-medium">
            Путешествие?
          </p>
          <img
            className="h-full w-full"
            src="/images/girls/big-girl/thinks.png"
          />
        </div>
        {/* <div className="hidden max-w-[350px] flex-col md:flex">
          <p className="font-jost text-xl/tight text-[#2E4F6C]">
            Собирайте подружек и приходите за прекрасным праздником в
            аромастудию “ВДОХновение”!
          </p>
          <Button className="mt-10 h-auto w-full rounded-full border-none bg-white px-10 py-2 text-sm font-medium text-[#2e4f6c] shadow-none hover:bg-[#2e4f6c]/90 hover:text-white md:px-16 md:py-3 md:text-base xl:text-lg">
            Узнать подробнее
          </Button>
        </div> */}
      </div>
    </div>
  )
}

export default BigGirlBirthday
