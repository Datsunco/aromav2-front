import React from "react"

const Prices = () => {
  return (
    <div className="relative">
      <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center xl:mt-24">
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-kurale font-normal text-[#2E4F6C]">
            Матрица совместимости с любым человеком
          </span>{" "}
          <br />
        </h2>
        {/* <p className="tex-xs/none mt-4 max-w-[350px] text-center font-jost font-light md:max-w-none md:text-xl/none">
          Сеанс ароматерапии проходит также, как у взрослых
        </p> */}

        <div className="relative mt-14 flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <img
            src="/images/numerology/human.png"
            alt="Лаванда"
            className="absolute -top-20 right-4 z-0 flex h-[140px] w-[140px] md:-bottom-24 md:-right-32 md:h-[250px] md:w-[250px] xl:-bottom-36 xl:-right-52 xl:h-[350px] xl:w-[350px]"
          />
          <article className="relative z-10 mx-8 flex h-fit flex-col gap-6 overflow-hidden rounded-[20px] bg-gradient-to-b from-white/50 to-white/10 p-8 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:mx-0 md:max-w-[450px] md:rounded-[33px] md:px-16 md:py-10 md:pb-10 xl:max-w-[560px] xl:px-20 xl:py-10">
            <p className="font-jost text-xl/tight font-medium text-[#2E4F6C] md:text-xl xl:text-[30px]">
              Улучшите свои отношения
            </p>
            <ul className="list-disc space-y-1 pl-5 font-jost text-sm/tight font-light md:space-y-4 md:text-base xl:text-xl">
              <li className="">
                Помогу вам разрулить ваши проблемы и выйти на новый уровень
                взаимоотношений.
              </li>
              <li className="">
                Вам будет легче выстраивать отношения, и легче принимать
                решения.
              </li>
              <br />
              <br />
            </ul>
            <p className="font-jost text-xl/tight font-medium text-[#2E4F6C] md:text-xl xl:text-[30px]">
              6000 руб.
            </p>
            {/* <p className="-mt-6 font-jost text-sm/tight font-light">
              Для детей от 9 лет
            </p> */}

            {/* Этот div я убрал, так как он не использовался */}
          </article>
        </div>
      </section>
    </div>
  )
}

export default Prices
