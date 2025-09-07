import React from "react"

const About = () => {
  return (
    <section className="mt-14 md:mt-20 bg-white px-3 py-9 md:px-14 md:py-10 xl:px-24 xl:py-[72px] mx-5 rounded-[30px] md:rounded-[60px]">
      <p className="md:text-[28px]/tight xl:text-[36px]/tight xl:font-semibold text-[#191919] font-acrom">
        <span className="font-literature text-[40px] md:text-[60px]/none text-[#2E4F6C]">
          6
        </span>{" "}
        лет доказываем свое мастерство <br className="hidden md:block" /> и
        качество нашей продукции
      </p>

      <div className="flex gap-5 md:gap-10 xl:gap-14 mt-4 md:mt-[72px]">
        <div className="w-auto h-full">
          <img
            src="/images/home/about/about.png"
            className="rounded-[20px] md:rounded-[60px] "
          />
        </div>
        <div className="flex flex-col gap-8 justify-between">
          <div className="relative  min-w-[103px] h-full  bg-[#EEEEEE] rounded-[28px] px-4 py-2 xl:px-10 xl:py-5  text-black">
            <p className="font-acrom text-base md:text-[20px] xl:text-[44px]/[44px]">
              C 2019
            </p>
            <p className="font-jost  text-[10px] md:text-[13px] xl:text-xl font-light">
              года помогаю людям жить в гармонии с собой и быть счастливее
            </p>
            <img
              className="absolute -top-6 -right-4 md:-top-6 md:-right-8 xl:-top-14 xl:-right-14 w-[57px] h-[70px] md:w-[72px] md:h-[88px] xl:w-[130px] xl:h-[160px]"
              src="/images/home/about/bottle.png"
            ></img>
          </div>
          <div className="hidden md:block h-full relative bg-[#2E4F6C] rounded-[28px] px-4 py-2 xl:px-10 xl:py-5  text-white">
            <p className="font-acrom md:text-[20px] xl:text-[44px]">100%</p>
            <p className="font-jost md:text-[13px] xl:text-xl font-light">
              натуральные компоненты в ароматерапевтических композициях
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden mt-4 h-full relative bg-[#2E4F6C] rounded-[20px] px-4 py-2 xl:px-10 xl:py-5  text-white">
        <p className="font-acrom md:text-[20px] xl:text-[44px]">100%</p>
        <p className="font-jost md:text-[13px] xl:text-xl font-light">
          натуральные компоненты в ароматерапевтических композициях
        </p>
      </div>
    </section>
  )
}

export default About
