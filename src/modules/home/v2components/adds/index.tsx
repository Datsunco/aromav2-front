import React from "react"

const Adds = () => {
  return (
    <section className="relative mt-14 xl:mt-24 bg-blue-origin/[77] py-4 md:py-6 md:pb-14 mx-[22px] md:mx-[25px]  md:mt-[40px] rounded-[30px] md:rounded-[40px] shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:shadow-[inset_6.1px_6.1px_17.89px_0_#2437E21A]">
      {/* Tablet & Desktop nav */}
      <nav className="flex flex-col justify-center items-center gap-8 md:gap-14 xl:gap-20 px-6 md:px-16">
        <h1 className="text-center text-[20px]/[24px] md:text-3xl/[42px] xl:text-5xl/[54px] px-6 md:px-16 font-bold font-acrom text-white md:mt-5 z-10">
          Студия ароматерапии <br />
          <span className="text-[#2E4F6C] font-literature">
            «ВДОХновение»
          </span>{" "}
          — ваш путь к <br /> гармонии и счастью
          {/* <span className="text-[#2E4F6C] font-literature">Любовь</span> <br />{" "} */}
        </h1>
        <button className="bg-[#2E4F6C] font-acrom rounded-[40px] px-16 py-1.5 md:px-32 md:py-3  text-white">
          Записаться
        </button>
      </nav>
      {/* Mobile navbar */}
    </section>
  )
}

export default Adds
