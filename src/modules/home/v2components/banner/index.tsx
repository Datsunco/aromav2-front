"use client"

import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogContentNoOverlay,
  DialogTrigger,
} from "@modules/layout/components/dialog"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

import ServicesBadges from "./service-list"

import Logo from "@modules/default/header/logo"
import ChevronDown from "@modules/common/icons/chevron-down"

import Comma from "icons/comma"
import ListIcon from "icons/list"
import X from "@modules/common/icons/x"

import { sections } from "@modules/default/banner/data"

const Home = () => {
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  return (
    <section className="relative bg-blue-origin/[77] py-4 md:py-6 mx-[22px] md:mx-[25px] mt-[18px] md:mt-[40px] rounded-[30px] md:rounded-[40px] shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:shadow-[inset_6.1px_6.1px_17.89px_0_#2437E21A]">
      {/* Tablet & Desktop nav */}
      <nav className="hidden  items-center gap-8 md:flex justify-between px-6 md:px-16">
        <Logo className="w-24 xl:w-44 xl:h-28" />
        <div className="flex xl:gap-8 gap-5 font-acrom text-sm xl:text-base">
          <a
            href="#"
            className="text-[#2e4f6c] hover:opacity-70 transition-opacity"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] hover:opacity-70 transition-opacity"
          >
            Расписание
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] hover:opacity-70 transition-opacity"
          >
            Функции
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] hover:opacity-70 transition-opacity"
          >
            О студии
          </a>
        </div>
        <button className="bg-[#2E4F6C] font-acrom rounded-xl px-2.5 py-1  text-white">
          Позвонить
        </button>
      </nav>
      {/* Mobile navbar */}
      <nav className="flex items-center gap-8 md:hidden px-6">
        <Logo className="w-20" />
        {/* Мобильный хедер */}
        <div className="block md:hidden ml-auto mr-0">
          <Dialog open={mobileIsOpen} onOpenChange={setMobileIsopen}>
            <DialogTrigger className="mr-4">
              {/* {!isOpen && } */}
              <ListIcon className="h-6 w-6" />
            </DialogTrigger>
            <DialogContent
              className="max-w-full p-0 m-0 h-[100dvh] rounded-none border-none  data-[state=open]:duration-0 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0 data-[state=closed]:duration-100 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              // onInteractOutside={(e) => e.preventDefault()}
            >
              <div className="bg-white h-full flex flex-col overflow-y-auto">
                {/* <div className="h-14 bg-[#d9ff79] py-2 flex justify-between items-center px-6  z-30">
                  <span className="text-base md:text-2xl font-medium font-acrom">
                    {banner?.content ?? ""}
                  </span>
                  <Link href={banner?.link ?? ""}>
                    <Button
                      variant="secondary"
                      className="px-4 py-2 rounded-lg"
                    >
                      <p className="text-sm font-acrom font-medium outline-none border-none shadow-none">
                        Смотреть
                      </p>
                    </Button>
                  </Link>
                </div> */}
                {/* Modal Header - Mimics the main header */}
                <div className="mt-[5px] bg-white pl-1 pr-5 flex items-center justify-between border-b">
                  {/* <Image
                              src="/logo.png"
                              className=""
                              alt="Вдохновение"
                              width={180}
                              height={130}
                            /> */}
                  <Logo className="w-[190px] h-[130px] p-2" />
                  <div className="flex items-center gap-4">
                    <X
                      className="w-7 h-7"
                      onClick={() => setMobileIsopen(false)}
                    />
                  </div>
                </div>

                {/* Modal Content */}
                <div className=" h-full overflow-y-auto pt-2">
                  <div className="flex gap-2 overflow-x-auto py-2 mb-4 h-14 px-2">
                    <LocalizedClientLink
                      href="/"
                      className="whitespace-nowrap rounded-full bg-[#3d3bff] text-white text-base flex items-center gap-1 min-w-[90px] font-medium justify-center"
                    >
                      <span>Главная</span>
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/about-us"
                      className="whitespace-nowrap rounded-full bg-[#EBEBEB] text-black text-base flex items-center gap-1 min-w-32 font-medium justify-center"
                    >
                      <span>О студии</span>
                      <ChevronDown className="-rotate-90" />
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/events"
                      className="whitespace-nowrap rounded-full bg-[#EBEBEB] text-black text-base flex items-center gap-1 min-w-36 font-medium justify-center"
                    >
                      <span>Мероприятия</span>
                      <ChevronDown className="-rotate-90" />
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/about-us"
                      className="whitespace-nowrap rounded-full bg-[#EBEBEB] text-black text-base flex items-center gap-1 min-w-32 font-medium justify-center"
                    >
                      <span>О студии</span>
                      <ChevronDown className="-rotate-90" />
                    </LocalizedClientLink>
                  </div>

                  <div className="space-y-4 px-4">
                    {sections.map((item, index) => (
                      <LocalizedClientLink
                        href={item.link}
                        key={index}
                        className="flex items-center w-full text-left py-2 text-black hover:text-blue-600"
                      >
                        <span>{item.title}</span>
                      </LocalizedClientLink>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>

      {/* slogan and review */}
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-[30px]/[36px] md:text-4xl/[42px] lg:text-5xl/[54px] px-6 md:px-16 font-bold font-acrom text-white mb-10 md:mt-5 lg:mb-16 z-10">
          <span className="text-[#2E4F6C] font-literature">Вдох ,</span> <br />
          чтобы выдыхать
          <br />
          <span className="text-[#2E4F6C] font-literature">
            Любовь
          </span> <br />{" "}
        </h1>
        {/* review */}
        <article className="hidden xl:block mt-8 lg:mt-0 p-6 rounded-3xl max-w-[320px] backdrop-blur-md bg-white/10 border border-white/20 mr-24">
          <Comma className="mb-4" />
          <blockquote className="text-gray-700">
            "После нумерологического разбора все встало на свои места! Мою жизнь
            наполняют новые ароматы"
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold">Алена Павлова</p>
            <p className="text-gray-500">Художница</p>
          </div>
        </article>
      </div>

      {/* services badges list */}

      <div className="mb-11">
        <ServicesBadges sections={sections} />
      </div>

      <Image
        src="/images/home/banner.png"
        width={160}
        height={160}
        className="absolute bottom-0 right-0 z-0 xl:w-64 xl:h-64 xl:right-20 xl:bottom-2"
        alt="banner logo image"
      />
    </section>
  )
}

export default Home
