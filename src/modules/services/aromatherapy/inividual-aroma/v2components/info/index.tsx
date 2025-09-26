import Image from "next/image"
import React from "react"

const Info = () => {
  return (
    <div className="mx-auto md:max-w-3xl xl:max-w-5xl">
      <h2 className="mx-auto mb-5 mt-10 max-w-xl text-center font-kurale text-[37px]/none font-medium text-[#2E4F6C] md:mb-10 xl:mt-20 xl:text-5xl/none">
        Ароматестирование: Арома-код
        <br />
      </h2>

      <div className="mx-8 flex flex-col gap-9 xl:gap-20">
        <article className="flex flex-col items-center gap-10 md:flex-row">
          <Image
            src="/images/moms_photo_yellow.jpg"
            alt=""
            width={140}
            height={126}
            className="max-h-[126px] w-full rounded-[20px] object-cover object-left-top md:min-h-[240px] md:min-w-[300px] md:rounded-[60px] xl:min-h-[358px] xl:min-w-[461px]"
          />
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Как проходит сеанс?
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              На сеансе ароматерапии вы вдыхаете ароматы, погружаетесь в
              великолепные ощущения, расслабляетесь, и ваш организм говорит
              через ароматы, что ему нужно для счастья.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Я составляю вашу ароматограмму - информацию о состоянии вашего
              организма, а также индивидуальную программу ароматерапии.
            </li>
          </ul>
        </article>

        <article className="flex flex-col items-center gap-10 md:flex-row">
          <ul className="list-disc space-y-6 font-jost">
            <p className="text-xl/none font-medium text-[#2E4F6C] xl:text-3xl/none">
              Как работает индивидуальная программа?
            </p>
            <li className="ml-10 text-base font-light xl:text-xl">
              Мы вместе составим вам ресурсные духи, а я сделаю приятные крема
              для тела.
            </li>
            <li className="ml-10 text-base font-light xl:text-xl">
              Вдыхая ароматы, нанося их на тело в течение 21 дня, вы напитаете
              свой организм полезными веществами.
            </li>
          </ul>
          <Image
            src="/images/aromotherapy/aroma3.jpg"
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
