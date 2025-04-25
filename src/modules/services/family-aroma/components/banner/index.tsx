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
          <h1 className="text-[28px] md:text-5xl font-semibold font-literature text-center md:text-start">{title}</h1>
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
        <div className="rounded-2xl w-full bg-white h-28 px-6 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center">
            <h2 className="text-[20px] font-acrom font-semibold">
              Индивидуально
            </h2>
          </div>
          <span className="font-medium text-sm text-[#666666]">
            описание индивидуальных
          </span>
        </div>
        <div className="rounded-2xl w-full bg-white h-28 px-6 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center">
            <h2 className="text-[20px] font-acrom font-semibold">
              Индивидуально
            </h2>
          </div>
          <span className="font-medium text-sm text-[#666666]">
            описание индивидуальных
          </span>
        </div>
        <div className="rounded-2xl w-full bg-white h-28 px-6 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center">
            <h2 className="text-[20px] font-acrom font-semibold">
              Индивидуально
            </h2>
          </div>
          <span className="font-medium text-sm text-[#666666]">
            описание индивидуальных
          </span>
        </div>
        <div className="rounded-2xl w-full bg-white h-28 px-6 py-4 transition-all duration-200 hover:scale-105 cursor-pointer">
          <div className="flex items-center">
            <h2 className="text-[20px] font-acrom font-semibold">
              Индивидуально
            </h2>
          </div>
          <span className="font-medium text-sm text-[#666666]">
            описание индивидуальных
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner
