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

const AromaBanner = () => {
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  return (
    <section className="relative mx-[22px] mt-[18px] rounded-[30px] bg-blue-origin/[77] py-4 shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:mx-[25px] md:mt-[40px] md:rounded-[40px] md:py-6 md:shadow-[inset_6.1px_6.1px_17.89px_0_#2437E21A]">
      {/* Tablet & Desktop nav */}
      <nav className="hidden items-center justify-between gap-8 px-6 md:flex md:px-16">
        <Logo className="w-24 xl:h-28 xl:w-44" />
        <div className="flex gap-5 font-acrom text-sm xl:gap-8 xl:text-base">
          <a
            href="#"
            className="text-[#2e4f6c] transition-opacity hover:opacity-70"
          >
            Каталог
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] transition-opacity hover:opacity-70"
          >
            Расписание
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] transition-opacity hover:opacity-70"
          >
            Функции
          </a>
          <a
            href="#"
            className="text-[#2e4f6c] transition-opacity hover:opacity-70"
          >
            О студии
          </a>
        </div>
        <button className="rounded-xl bg-[#2E4F6C] px-2.5 py-1 font-acrom text-white">
          Позвонить
        </button>
      </nav>
      {/* Mobile navbar */}
      <nav className="flex items-center gap-8 px-6 md:hidden">
        <Logo className="w-20" />
        {/* Мобильный хедер */}
        <div className="ml-auto mr-0 block md:hidden">
          <Dialog open={mobileIsOpen} onOpenChange={setMobileIsopen}>
            <DialogTrigger className="mr-4">
              {/* {!isOpen && } */}
              <ListIcon className="h-6 w-6" />
            </DialogTrigger>
            <DialogContent
              className="m-0 h-[100dvh] max-w-full rounded-none border-none p-0 data-[state=closed]:duration-100 data-[state=open]:duration-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0"
              // onInteractOutside={(e) => e.preventDefault()}
            >
              <div className="flex h-full flex-col overflow-y-auto bg-white">
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
                <div className="mt-[5px] flex items-center justify-between border-b bg-white pl-1 pr-5">
                  {/* <Image
                              src="/logo.png"
                              className=""
                              alt="Вдохновение"
                              width={180}
                              height={130}
                            /> */}
                  <Logo className="h-[130px] w-[190px] p-2" />
                  <div className="flex items-center gap-4">
                    <X
                      className="h-7 w-7"
                      onClick={() => setMobileIsopen(false)}
                    />
                  </div>
                </div>

                {/* Modal Content */}
                <div className="h-full overflow-y-auto pt-2">
                  <div className="mb-4 flex h-14 gap-2 overflow-x-auto px-2 py-2">
                    <LocalizedClientLink
                      href="/"
                      className="flex min-w-[90px] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#3d3bff] text-base font-medium text-white"
                    >
                      <span>Главная</span>
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/about-us"
                      className="flex min-w-32 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#EBEBEB] text-base font-medium text-black"
                    >
                      <span>О студии</span>
                      <ChevronDown className="-rotate-90" />
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/events"
                      className="flex min-w-36 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#EBEBEB] text-base font-medium text-black"
                    >
                      <span>Мероприятия</span>
                      <ChevronDown className="-rotate-90" />
                    </LocalizedClientLink>
                    <LocalizedClientLink
                      href="/about-us"
                      className="flex min-w-32 items-center justify-center gap-1 whitespace-nowrap rounded-full bg-[#EBEBEB] text-base font-medium text-black"
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
                        className="flex w-full items-center py-2 text-left text-black hover:text-blue-600"
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
      <div className="flex w-full flex-row justify-between">
        <h1 className="z-50 mb-10 px-6 text-center font-acrom text-[40px]/[36px] font-bold text-white md:mt-5 md:px-16 md:text-start md:text-4xl/[42px] lg:mb-16 xl:text-6xl/[54px]">
          <br />
          <br className="md:hidden" />
          <span className="font-kurale font-medium text-[#2E4F6C]">
            Ароматерапия
          </span>{" "}
          <br className="hidden md:block" />
          <span className="font-literature text-[#2E4F6C]"></span> <br />{" "}
        </h1>
        {/* review */}
      </div>

      {/* services badges list */}

      <div className="relative z-50 mb-11">
        <ServicesBadges sections={sections} />
      </div>

      <Image
        src="/images/aromotherapy/v2/aroma-banner.png"
        width={160}
        height={160}
        className="absolute bottom-8 left-1/2 z-10 aspect-square w-[90%] -translate-x-1/2 rotate-[18deg] p-6 opacity-50 blur-[1px] md:bottom-14 md:left-auto md:right-8 md:h-64 md:w-64 md:translate-x-0 md:p-0 md:opacity-100 md:blur-0 xl:bottom-10 xl:right-20 xl:h-[357px] xl:w-[357px]"
        alt="banner logo image"
      />
    </section>
  )
}

export default AromaBanner
