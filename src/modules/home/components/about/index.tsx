"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import X from "@modules/common/icons/x"
// import { Button } from "@/components/ui/button"
import { Button } from "@medusajs/ui"
import ChevronDown from "@modules/common/icons/chevron-down"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { cn } from "@lib/util/cn"
// import { Card } from "@/components/ui/card"

export default function AboutSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null)
    } else {
      setExpandedCard(id)
    }
  }

  return (
    <div className="px-2">
      <section className="w-full max-w-6xl mx-auto px-4 md:px-20 py-10 md:py-16 bg-[#F5F5F5] rounded-3xl">
        <div className="flex mb-10 md:mb-20  items-center gap-4 justify-between">
          <div className="font-acrom block items-center text-2xl md:text-4xl font-bold max-w-xl md:max-w-2xl ">
            Ароматстудия {""}
            <span className="font-literature text-[#2563EB] w-fit">
              «Вдохновение»
            </span>
            {""} — ваш путь к гармонии и счастью
          </div>

          <LocalizedClientLink
            href="/about-us"
            asChild
            className="hidden md:flex bg-[#3d3bff] text-white px-4 justify-between items-center py-2 text-lg rounded-full"
          >
            <span className="font-acrom">Подробнее</span>
            <ChevronDown className="-rotate-90" />
          </LocalizedClientLink>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/images/photo.png"
                alt="Ароматстудия Вдохновение"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <X className="w-6 h-6 ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                Как мы создаём индивидуальные ароматерапевтические композиции
              </div> */}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-xl bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-bold">С 2019</h3>
                  <p className="text-gray-600 mt-2">
                    помогаем людям жить в гармонии с собой и быть счастливее
                  </p>
                </div>
                <button
                  onClick={() => toggleCard("experience")}
                  className="p-2 rounded-full bg-gray-100 flex items-center justify-center"
                >
                  <X
                    className={cn(
                      "w-5 h-5 rotate-45 duration-150 transition-all",
                      expandedCard === "experience" && "rotate-0"
                    )}
                  />
                </button>
              </div>

              {expandedCard === "experience" && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p>
                    Более 5 лет опыта в области ароматерапии и создании
                    индивидуальных композиций для улучшения качества жизни наших
                    клиентов.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-4xl font-bold">100%</h3>
                  <p className="mt-2">
                    натуральные компоненты в наших ароматерапевтических
                    композициях
                  </p>
                </div>
                <button
                  onClick={() => toggleCard("natural")}
                  className="p-2 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <X
                    className={cn(
                      "w-5 h-5 rotate-45 duration-150 transition-all",
                      expandedCard === "natural" && "rotate-0"
                    )}
                  />
                </button>
              </div>

              {expandedCard === "natural" && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p>
                    Мы используем только натуральные эфирные масла высшего
                    качества, чтобы обеспечить максимальную эффективность и
                    безопасность наших продуктов.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl shadow-sm">
            <h3 className=" text-xl mb-2 font-acrom font-semibold md:min-h-[60px]">
              Специалист в области ароматерапии
            </h3>
            <p className=" text-[#666666] mt-auto mb-0">
              Выпускница и наставник международной Академии ароматерапии
              Арома-Код Н.Ю.Бобковой.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-sm">
            <h3 className=" text-xl mb-2 font-acrom font-semibold md:min-h-[60px]">
              Индивидуальный подход
            </h3>
            <p className=" text-[#666666] mt-auto mb-0">
              Владею методом диагностики состояния с помощью обонятельного
              ароматестирования.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl shadow-sm">
            <h3 className=" text-xl mb-2 font-acrom font-semibold md:min-h-[60px]">
              Натуральная косметика
            </h3>
            <p className=" text-[#666666] mt-auto mb-0">
              Создаю индивидуальные ароматерапевтические композиции и варю крем
              для молодости кожи лица.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
