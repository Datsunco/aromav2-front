"use client"
import React from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

import { SectionTitle } from "types/banner"

import { sections } from "./data"

import { clsx } from "clsx"

interface BannerProps {
  title: SectionTitle
  img: string
}

const Banner = ({ title, img }: BannerProps) => {
  return (
    <div className="px-2 flex flex-col">
      <div className="flex w-full bg-[#F3F3F5] rounded-2xl p-6 py-10 md:p-14 md:py-14">
        <div className="flex flex-col gap-14">
          <h1 className="text-3xl lg:text-6xl font-medium font-literature">
            {title}
          </h1>

          <div className=" flex-wrap gap-2 md:gap-3 max-w-2xl hidden md:flex">
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
          </div>
        </div>
        <img
          src={img}
          className="w-[300px] h-[300px] rounded-3xl hidden lg:flex"
        />
      </div>
    </div>
  )
}

export default Banner
