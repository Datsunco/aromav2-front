import Image from "next/image"
import React from "react"

const MatrixInfo = () => {
  return (
    <div className="mx-auto md:max-w-3xl xl:max-w-5xl">
      <h2 className="mx-auto mb-5 mt-10 max-w-xl text-center font-kurale text-[37px]/none font-medium text-[#2E4F6C] md:mb-10 xl:mt-20 xl:text-5xl/none">
        Матрица совместимости
        <br />
      </h2>
      <p className="tex-xs/none mt-4 max-w-[350px] text-center font-jost font-light md:max-w-none md:text-xl/none">
        Несовместимых партнёров нет - если вы
        <br className="hidden md:flex" /> встретились, это для чего-то было
        нужно.
      </p>

      <div className="mx-8 mt-10 flex flex-col gap-9 md:mt-20 xl:gap-20">
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
              Для чего нужен расчет совместимости
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              Я расскажу о ваших задачах в паре. Открою вам глаза. Отвечу на
              ваши вопросы, касающиеся взаимоотношений с партнёром.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Многие женщины, находящиеся в стадии принятия решения о разводе
              после консультации по Матрице совместимости начинают по-новому
              смотреть на вещи, их мысли меняются.
            </li>
          </ul>
        </article>

        <article className="flex flex-col items-center gap-10 md:flex-row">
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Какие ответы вы получите
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              Осознаете причины событий. Придёт понимание многих вопросов и
              событий в жизни, они перестанут мучать и забирать силы.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Тем, кто уже вместе, я рассказываю о ваших совместных задачах. И
              когда к разногласиям относишься, как к задаче, осознанно - жить
              легче.
            </li>
          </ul>
          <Image
            src="/images/numerology/hands.jpg"
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

export default MatrixInfo
