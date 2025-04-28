"use client"
import React from "react"

import { SectionTitle } from "types/banner"

import { clsx } from "clsx"

interface BannerProps {
  title: string
  img: string
}

const Banner = ({ title, img }: BannerProps) => {
  return (
    <div className="flex flex-col w-full bg-[#E4CFB7] rounded-[22px] lg:rounded-[40px] px-4 md:px-20 md:py-16 pb-8">
      <div className="flex gap-10 flex-col md:flex-row">
        <div className="flex flex-col gap-14 pt-8 lg:pt-14">
          <h1 className="text-[28px] md:text-5xl font-semibold font-literature text-center md:text-start">
            {title}
          </h1>
          <button className="hidden md:block py-4 w-[290px] rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
            Записаться на прием
          </button>
        </div>
        <img
          src={"/images/aroma.jpg"}
          className="w-full aspect-[1/1] md:w-[400px] md:h-[500px] bg-contain rounded-3xl mr-10"
        />
      </div>

      <div className="flex flex-col lg:flex-row relative -mt-20 w-full gap-2 lg:gap-4">
        <div className="rounded-2xl w-full bg-white px-4 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center mb-2">
            <h2 className="text-base/5 font-acrom font-semibold">
              Ароматестирование
            </h2>
          </div>
          <p className="font-bold text-xs/3 text-[#666666]">
            Обонятельная диагностика для подбора эфирных масел, которые подходят
            именно вам.
          </p>
        </div>
        <div className="rounded-2xl w-full bg-white px-4 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center mb-2">
            <h2 className="text-base/5 font-acrom font-semibold">
              Персональная программа
            </h2>
          </div>
          <p className="font-bold text-xs/3 text-[#666666]">
            Составление индивидуальной ароматограммы и рекомендаций для вашего
            состояния.
          </p>
        </div>
        <div className="rounded-2xl w-full bg-white px-4 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center mb-2">
            <h2 className="text-base/5 font-acrom font-semibold">
              Профессиональный подход
            </h2>
          </div>
          <p className="font-bold text-xs/3 text-[#666666]">
            Работа по авторской методике Арома-код, основанной на опыте ведущих
            специалистов.
          </p>
        </div>
        <div className="rounded-2xl w-full bg-white px-4 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center mb-2">
            <h2 className="text-base/5 font-acrom font-semibold">
              Гармонизация и поддержка
            </h2>
          </div>
          <p className="font-bold text-xs/3 text-[#666666]">
            Восстановление баланса, снятие стресса и повышение энергии с помощью
            эфирных масел.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
