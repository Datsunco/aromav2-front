import React from "react"

const Orientation = () => {
  return (
    <section className="mx-4 mt-14 rounded-[30px] bg-white px-3 py-9 md:mx-auto md:mt-20 md:max-w-5xl md:rounded-[60px] md:px-14 md:py-10 xl:px-24 xl:py-[72px]">
      <p className="font-acrom text-[#191919] md:text-[28px]/tight xl:text-[36px]/tight xl:font-semibold">
        <span className="font-kurale text-2xl text-[#2E4F6C] md:text-[60px]/none">
          {" "}
          Профориентация с помощью нумерологии
        </span>{" "}
        <br className="hidden md:block" />
      </p>

      <div className="mt-4 flex gap-5 md:mt-[72px] md:gap-10 xl:gap-14">
        <div className="h-full w-auto">
          <img
            src="/images/home/about/about.png"
            className="rounded-[20px] md:rounded-[60px]"
          />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="relative h-full min-w-[103px] rounded-[28px] bg-[#EEEEEE] px-4 py-2 text-black xl:px-10 xl:py-5">
            <p className="font-acrom text-base md:text-[20px] xl:text-[44px]/[44px]">
              2000 руб.
            </p>
            <p className="font-jost text-[10px] font-light md:text-[13px] xl:text-xl">
              Стоимость консультации
            </p>
            <img
              className="absolute -right-4 -top-6 h-[70px] w-[57px] md:-right-8 md:-top-6 md:h-[88px] md:w-[72px] xl:-right-14 xl:-top-14 xl:h-[160px] xl:w-[130px]"
              src="/images/home/about/bottle.png"
            ></img>
          </div>
          <div className="relative hidden h-full rounded-[28px] bg-[#2E4F6C] px-4 py-2 text-white md:block xl:px-10 xl:py-5">
            {/* <p className="font-acrom md:text-[20px] xl:text-[44px]">100%</p> */}
            <p className="font-jost font-light md:text-[13px] xl:text-xl">
              Вы получите информацию о сильных и слабых сторонах личности вашего
              ребёнка и список подходящих профессий на основании даты рождения,
              нумерологии и астрологии.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-4 block h-full rounded-[20px] bg-[#2E4F6C] px-4 py-2 text-white md:hidden xl:px-10 xl:py-5">
        {/* <p className="font-acrom md:text-[20px] xl:text-[44px]">100%</p> */}
        <p className="font-jost font-light md:text-[13px] xl:text-xl">
          Вы получите информацию о сильных и слабых сторонах личности вашего
          ребёнка и список подходящих профессий на основании даты рождения,
          нумерологии и астрологии.
        </p>
      </div>
    </section>
  )
}

export default Orientation
