"use client"

import Image from "next/image"
import React, { useState } from "react"

import clsx from "clsx"

const data = [
  {
    title: "Постепенно погрузитесь в профессию",
    description:
      "Изучите основы математики и статистики, а затем на продвинутом уровне изучите машинное обучение или анализ данных на выбор.",
  },
  {
    title: "Постепенно погрузитесь профессию",
    description:
      "Изучите основы математики и статистики, а затем на продвинутом уровне изучите машинное обучение или анализ данных на выбор.",
  },
  {
    title: "Постепенно профессию",
    description:
      "Изучите основы математики и статистики, а затем на продвинутом уровне изучите машинное обучение или анализ данных на выбор.",
  },
]

const InfoThirdBlock = () => {
  const [selected, setSelected] = useState<number>(0)

  return (
    <section className="w-full  bg-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Right column - Image */}
        <div className="w-full md:w-2/3 h-full">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-[25px] overflow-hidden">
            <Image
              src="/images/photo.png"
              alt="Data scientist presenting to an audience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Left column - Text content */}
        <div className="w-full md:w-1/3 space-y-6">
          {data.map((el, index) => (
            <div
              className={clsx(
                "rounded-[32px] px-8 py-2 flex gap-3 md:block transition-all duration-500",
                selected === index && "bg-[#F5F5F5] px-8 py-8"
              )}
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className="">
                <h2
                  className={clsx(
                    "text-2xl/6 font-bold mb-4 cursor-pointer ",
                    selected === index
                      ? "text-black"
                      : "text-[#949494] hover:text-black"
                  )}
                >
                  {el.title}
                </h2>
                <p
                  className={clsx(
                    "text-base/4 font-medium text-gray-600 font-acrom",
                    selected !== index && "hidden"
                  )}
                >
                  {el.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfoThirdBlock
