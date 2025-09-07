import React from "react"

const Benefits = () => {
  return (
    <div className="relative ">
      <section className=" flex flex-col mt-14 xl:mt-24 max-w-5xl mx-auto items-center justify-center">
        <h2 className="text-[30px] md:text-[35px]/none xl:text-[45px]/none font-bold font-acrom max-w-xl text-center">
          <span className="font-literature text-[#2E4F6C]">Преимущества</span>{" "}
          работы с нами
          <br />
        </h2>
        <img
          src="/images/home/benefits/pip.png"
          alt="пипетка"
          className="absolute w-32 h-52 md:w-40 md:h-64 xl:w-72 xl:h-[469px] left-0 top-60 xl:top-10 md:top-20  z-0"
        />

        <img
          src="/images/home/benefits/lavanda.png"
          alt="Лаванда"
          className="absolute flex md:hidden w-[90px]  h-[134px] top-24 right-0 z-10"
        />
        <div className="flex gap-4 items-center mt-14">
          <article className="mx-8 md:mx-0 relative flex h-fit flex-col gap-6 rounded-[60px] md:max-w-[220px] xl:max-w-[300px] md:rounded-[33px] bg-gradient-to-b from-white/50 to-white/10 p-8 md:px-5 md:py-3 xl:py-6 md:pb-10  pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] z-10 overflow-hidden">
            <p className="font-jost text-xl/tight font-medium md:text-base">
              Специалист в области ароматерапии
            </p>
            <p className="font-jost font-light md:text-sm">
              Жанна Доценко - выпускница и наставник международной Академии
              ароматерапии Арома-Код Н.Ю.Бобковой.
            </p>

            {/* Этот div я убрал, так как он не использовался */}
          </article>
          {/* </div> */}
          <article className="hidden md:flex flex-col gap-4 py-12 px-8 md:px-5 md:py-3 xl:py-6 md:pb-10  rounded-[60px]  md:rounded-[40px] md:max-w-[220px] xl:max-w-[300px] bg-[#B3C3D2]/[34] bg-gradient-to-b from-white/50 to-white/10 shadow-[inset_9px_9px_26.4px_0_#2437E21A]">
            <p className="font-medium text-xl/tight font-jost">
              Индивидуальный подход
            </p>
            <p className="font-jost font-light">
              Владею методом диагностики состояния с помощью обонятельного
              ароматестирования.
            </p>
          </article>

          <div className="hidden md:flex relative w-full max-w-sm">
            <img
              src="/images/home/benefits/lavanda.png"
              alt="Лаванда"
              className="absolute md:w-24 md:h-40 xl:w-48 xl:h-72 xl:-top-[80px] xl:-right-24 md:-right-6  md:-top-[80px] z-0"
            />

            <article className="relative flex h-fit flex-col gap-6 rounded-[60px] md:max-w-[220px] xl:max-w-[300px] md:rounded-[33px] bg-gradient-to-b from-white/50 to-white/10 p-8  md:px-5 md:py-3 xl:py-6 md:pb-10 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] z-10 overflow-hidden">
              <p className="font-jost text-xl/tight font-medium md:text-base">
                Натуральная <br /> косметика
              </p>
              <p className="font-jost font-light md:text-sm">
                Создаю индивидуальные ароматерапевтические композиции и варю
                крем для молодости кожи лица.
              </p>
              {/* Этот div я убрал, так как он не использовался */}
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
