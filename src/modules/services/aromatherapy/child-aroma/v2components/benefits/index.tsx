import React from "react"
import CheckIcon from "./CheckIcon"

const Benefits = () => {
  return (
    <div className="relative">
      <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center xl:mt-24">
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-kurale font-normal text-[#2E4F6C]">
            Преимущества ароматерапии для детей
          </span>{" "}
          <br />
        </h2>
        <p className="tex-xs/none mt-4 max-w-[350px] text-center font-jost font-light md:max-w-none md:text-xl/none">
          В современном мире обоняние человека притуплено,
          <br className="hidden md:flex" /> а ведь оно важный компонент
          здорового человека
        </p>
        {/* <img
          src="/images/home/benefits/pip.png"
          alt="пипетка"
          className="absolute left-0 top-60 z-0 h-52 w-32 md:top-20 md:h-64 md:w-40 xl:top-10 xl:h-[469px] xl:w-72"
        /> */}

        <div className="relative mt-14 flex flex-col items-center gap-6 md:h-[250px] md:flex-row">
          <img
            src="/images/lavanda2.png"
            alt="Лаванда"
            className="absolute -left-28 -top-36 z-0 flex h-[420px] w-[280px] -rotate-[20deg] opacity-[63] md:-top-48"
          />
          <article className="z-10 mx-8 flex h-full flex-row gap-6 rounded-[30px] bg-white p-4 shadow-lg md:mx-0 md:max-w-[220px] md:flex-col md:rounded-[33px] md:p-8 md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
            <CheckIcon className="min-h-6 min-w-6 md:min-h-9 md:min-w-9" />
            <div className="flex h-full font-jost font-light text-[#2E4F6C] md:text-lg/tight">
              У ребенка улучшится иммунитет, нормализуется сон, уйдут
              аллергические реакции. Ваш ребенок станет более уверенным в себе,
              его самооценка придет в норму
            </div>
          </article>

          <article className="relative z-10 mx-8 flex h-full flex-row gap-6 rounded-[30px] bg-white p-4 shadow-lg md:mx-0 md:max-w-[220px] md:flex-col md:rounded-[33px] md:p-8 md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
            <CheckIcon className="min-h-6 min-w-6 md:min-h-9 md:min-w-9" />
            <div className="flex h-full font-jost font-light text-[#2E4F6C] md:text-lg/tight">
              Школьники будут спокойнее справляться с нагрузкой в школе. Так же
              детям ароматерапия поможет понять себя и выбрать профессию
            </div>
          </article>
          <article className="relative z-10 mx-8 flex h-full flex-row gap-6 rounded-[30px] bg-white p-4 shadow-lg md:mx-0 md:max-w-[220px] md:flex-col md:rounded-[33px] md:p-8 md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
            <CheckIcon className="min-h-6 min-w-6 md:min-h-9 md:min-w-9" />
            <div className="flex h-full font-jost font-light text-[#2E4F6C] md:text-lg/tight">
              Ароматерапия взращивает человека, помогает своевременно
              повзрослеть. Для девочки ароматерапия особенно ценна, учит
              ухаживать за своим телом
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Benefits
