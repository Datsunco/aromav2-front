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
    <div className="flex flex-col w-full bg-[#E4CFB7] rounded-[40px] px-20 py-16">
      <div className="flex gap-10">
        <div className="flex flex-col gap-14 pt-14">
          <h1 className="text-5xl font-semibold font-literature ">{title}</h1>
          <button className="py-4 w-[290px] rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
            Записаться на прием
          </button>

          {/* <div className="flex flex-wrap gap-3 max-w-2xl">
            {sections.map((category) => (
              <LocalizedClientLink
                href={category.link}
                className=""
                data-testid="back-to-cart-link"
              >
                <button
                  key={category.title}
                  className={clsx(
                    "px-4 py-2 font-acrom text-[14px] bg-white rounded-full text-gray-800 border-[1px] hover:border-gray-800",
                    category.title === title && "bg-[#333333] text-blue-500"
                  )}
                >
                  {category.title}
                </button>
              </LocalizedClientLink>
            ))}
          </div> */}
        </div>
        <img
          src={"/images/aroma.jpg"}
          className="w-[400px] h-[500px] bg-contain rounded-3xl mr-10"
        />
      </div>

      <div className="relative -mt-20 w-full gap-4 flex">
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
