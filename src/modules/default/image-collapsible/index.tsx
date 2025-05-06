"use client"

import { cn } from "@lib/util/cn"
import X from "@modules/common/icons/x"
import Image from "next/image"
import React, { useState } from "react"

const data = [
  {
    title: "Погружение в себя через ароматы",
    description:
      "Ароматы помогают раскрыть истинные желания, цели и потребности, указывая путь к гармонии и балансу.",
  },
  {
    title: "Ресурсное состояние",
    description:
      "Когда тело получает необходимый ресурс через эфирные масла, появляется энергия, новые мысли и силы для перемен.",
  },
  {
    title: "Профессиональный подход",
    description:
      "Я работаю по методу Арома-код, основанному на опыте моего Учителя Бобковой Наталии Юрьевны, чтобы вы получили максимальный результат.",
  },
]

interface ImageCollapsibleProps {
  features: { img: string; title: string; description: string }[]
}

const ImageCollapsible = ({ features }: ImageCollapsibleProps) => {
  const [selected, setSelected] = useState<number>(0)

  return (
    <section className="w-full bg-white -mt-10">
      <div className="mx-auto px-4 py-12 md:py-24 md:flex md:items-start gap-8 md:gap-16">
        {/* Desktop Image - always visible on md+ screens */}
        <div className="hidden md:flex w-full md:w-2/3">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-[25px] overflow-hidden">
            <Image
              src={features[selected].img}
              alt="Data scientist presenting to an audience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Column with fixed height container */}
        <div className="w-full md:w-1/3">
          <div className="space-y-1 md:space-y-6 min-h-[600px] md:min-h-[500px]">
            {" "}
            {/* Фиксированная высота контейнера */}
            {features.map((el, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={cn(
                  "w-full rounded-[32px] p-6 md:px-8 md:py-2 flex gap-3 transition-all duration-300",
                  "hover:bg-gray-50 cursor-pointer",
                  selected === index ? "bg-[#f5f5f5] md:px-8 md:py-8" : ""
                )}
              >
                <div className="w-full">
                  <div className="flex gap-4 justify-between items-center mb-2 md:mb-4">
                    <h2
                      className={cn(
                        "text-xl md:text-2xl font-bold",
                        selected === index
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      )}
                    >
                      {el.title}
                    </h2>
                    {index !== selected && (
                      <X className="flex min-w-6 min-h-6 rotate-45 text-gray-500 md:hidden" />
                    )}
                  </div>

                  {/* Absolute positioned content that won't affect layout */}
                  <div className="relative">
                    <div
                      className={cn(
                        "overflow-hidden",
                        selected === index
                          ? "max-h-[500px] opacity-100 transition-all duration-500 ease-in-out"
                          : "max-h-0 opacity-0 transition-all duration-300 ease-out"
                      )}
                    >
                      <p className="text-base font-medium text-gray-600 pb-4">
                        {el.description}
                      </p>

                      {/* Mobile Image */}
                      <div className="relative w-full h-64 md:hidden rounded-2xl overflow-hidden">
                        <Image
                          src={el.img}
                          alt={el.title}
                          fill
                          className={cn(
                            "object-cover transition-all duration-500",
                            selected === index
                              ? "opacity-100 scale-y-100"
                              : "opacity-0 scale-y-0"
                          )}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageCollapsible
