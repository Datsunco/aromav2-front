import Image from "next/image"
import React from "react"

const Info = () => {
  return (
    <div className="mx-auto md:max-w-3xl xl:max-w-5xl">
      <h2 className="mx-auto mb-5 mt-10 max-w-xl text-center font-kurale text-[37px]/none font-medium text-[#2E4F6C] md:mb-10 xl:mt-20 xl:text-5xl/none">
        Сеанс ароматерапии для детей
        <br />
      </h2>

      <div className="mx-8 flex flex-col gap-9 xl:gap-20">
        <article className="flex flex-col items-center gap-10 md:flex-row">
          <Image
            src="/images/aromotherapy/child/girl&mom.jpg"
            alt=""
            width={140}
            height={126}
            className="max-h-[126px] w-full rounded-[20px] object-cover md:min-h-[240px] md:min-w-[300px] md:rounded-[60px] xl:min-h-[358px] xl:min-w-[461px]"
          />
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Рекомендую проходить детям:
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              В конце мая по окончании учебного года - выдохнуть страхи и эмоции
              от учебного года.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              В конце августа - перед новым учебным годом, особенно идущим в 1,
              5, 9 классы.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Перед и после выпускных экзаменов в 9 и 11 классах.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              В осенне-весенний сезон подъёма вирусных заболеваний и отсутствия
              солнца.
            </li>
          </ul>
        </article>

        <article className="flex flex-col items-center gap-10 md:flex-row">
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Для того, чтобы ребёнку было спокойно, первый аромасеанс хорошо
              пройти вместе с мамой
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              Мама получит новый опыт полезного общения с ребёнком.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Изготовление в конце встречи ресурсного аромата для каждого и
              обмен эмоциями зарядит хорошим настроением
            </li>
          </ul>
          <Image
            src="/images/aromotherapy/child/girl1.jpg"
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
