import React from "react"

const Benefits = () => {
  return (
    <div className="relative">
      <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center xl:mt-24">
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-literature text-[#2E4F6C]">Преимущества</span>{" "}
          работы с нами
          <br />
        </h2>
        <img
          src="/images/home/benefits/pip.png"
          alt="пипетка"
          className="absolute left-0 top-60 z-0 h-52 w-32 md:top-20 md:h-64 md:w-40 xl:top-10 xl:h-[469px] xl:w-72"
        />

        <img
          src="/images/home/benefits/lavanda.png"
          alt="Лаванда"
          className="absolute right-0 top-24 z-10 flex h-[134px] w-[90px] md:hidden"
        />
        <div className="mt-14 flex items-center gap-4">
          <article className="relative z-10 mx-8 flex h-fit flex-col gap-6 overflow-hidden rounded-[60px] bg-gradient-to-b from-white/50 to-white/10 p-8 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:mx-0 md:max-w-[220px] md:rounded-[33px] md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
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
          <article className="hidden flex-col gap-4 rounded-[60px] bg-[#B3C3D2]/[34] bg-gradient-to-b from-white/50 to-white/10 px-8 py-12 shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:flex md:max-w-[220px] md:rounded-[40px] md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
            <p className="font-jost text-xl/tight font-medium">
              Индивидуальный подход
            </p>
            <p className="font-jost font-light">
              Владею методом диагностики состояния с помощью обонятельного
              ароматестирования.
            </p>
          </article>

          <div className="relative hidden w-full max-w-sm md:flex">
            <img
              src="/images/home/benefits/lavanda.png"
              alt="Лаванда"
              className="absolute z-0 md:-right-6 md:-top-[80px] md:h-40 md:w-24 xl:-right-24 xl:-top-[80px] xl:h-72 xl:w-48"
            />

            <article className="relative z-10 flex h-fit flex-col gap-6 overflow-hidden rounded-[60px] bg-gradient-to-b from-white/50 to-white/10 p-8 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:max-w-[220px] md:rounded-[33px] md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
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
