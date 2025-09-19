import Image from "next/image"
import React from "react"

const Info = () => {
  return (
    <div className="mx-auto md:max-w-3xl xl:max-w-5xl">
      <h2 className="mx-auto mb-5 mt-10 max-w-xl text-center font-kurale text-[37px]/none font-medium text-[#2E4F6C] md:mb-10 xl:mt-20 xl:text-5xl/none">
        Сеанс ароматерапии для пары
        <br />
      </h2>

      <div className="mx-8 flex flex-col gap-9 xl:gap-20">
        {/* <article className="mt-6 flex items-center rounded-[20px] bg-white md:gap-10 md:bg-transparent xl:mt-10">
          <ul className="space-y-6 font-jost md:list-disc">
            <p className="hidden text-xl/none font-medium text-[#2E4F6C] md:block xl:text-3xl/none">
              В чём отличие индивидуальной ароматерапии от ароматерапии для
              пары?
            </p>
            <li className="ml-4 text-[13px] font-light md:ml-10 md:text-base xl:text-xl">
              В индивидуальной ароматерапии мы работаем над ресурсностью
              человека и раскрытием его возможностей.
            </li>
            <li className="hidden text-[13px] font-light md:ml-10 md:block md:text-base xl:text-xl">
              В парной ароматерапии упор делается на раскрытие и взращивание
              нужных каждому архетипов для гармоничного взаимодействия.
            </li>
          </ul>
          <Image
            src="/images/aroma-date/pair.png"
            alt=""
            width={140}
            height={126}
            className="h-full rounded-[20px] md:min-h-[240px] md:min-w-[300px] md:rounded-[60px] xl:min-h-[358px] xl:min-w-[461px]"
          />
        </article> */}
        <article className="flex flex-col items-center gap-10 md:flex-row">
          <Image
            src="/images/aroma-date/pair.png"
            alt=""
            width={140}
            height={126}
            className="max-h-[126px] w-full rounded-[20px] object-cover md:min-h-[240px] md:min-w-[300px] md:rounded-[60px] xl:min-h-[358px] xl:min-w-[461px]"
          />
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              В чём отличие индивидуальной ароматерапии от ароматерапии для
              пары?
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              В индивидуальной ароматерапии мы работаем над ресурсностью
              человека и раскрытием его возможностей.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              В парной ароматерапии упор делается на раскрытие и взращивание
              нужных каждому архетипов для гармоничного взаимодействия.
            </li>
          </ul>
        </article>

        <article className="flex flex-col items-center gap-10 md:flex-row">
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Что такое ароматестирование?
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              На ароматестировании выявляется текущая ситуация и с помощью
              гармонизирующих эфирных масел постепенно шаг за шагов сглаживаем
              острые углы.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Так каждый взрослеет, осознаёт свою роль в семье и жизни, начинает
              жить более осознанно, и отношения становятся более гармоничными.
            </li>
          </ul>
          <Image
            src="/images/aroma-date/bottles.png"
            alt=""
            width={140}
            height={126}
            className="max-h-[126px] w-full rounded-[20px] object-cover md:min-h-[240px] md:min-w-[300px] md:rounded-[60px] xl:min-h-[358px] xl:min-w-[461px]"
          />
        </article>
      </div>
    </div>
  )
}

export default Info
