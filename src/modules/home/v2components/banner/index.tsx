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
import Link from "next/link"

const Home = () => {
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  return (
    <section className="relative mx-[22px] mt-[18px] rounded-[30px] bg-blue-origin/[77] py-4 shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:mx-[25px] md:mt-[40px] md:rounded-[40px] md:py-6 md:shadow-[inset_6.1px_6.1px_17.89px_0_#2437E21A]">
      {/* Tablet & Desktop nav */}
      <nav className="hidden items-center justify-between gap-8 px-6 md:flex md:px-16">
        <Link href="/">
          <Link className="z-50" href="/">
            <Logo className="w-24 xl:h-28 xl:w-44" />
          </Link>
        </Link>
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
        <Link href="/">
          <Link href="/" className="z-50">
            <Logo className="w-20" />
          </Link>
        </Link>
        {/* Мобильный хедер */}
        <div className="z-50 ml-auto mr-0 block md:hidden">
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
                  <Link href="/">
                    <Link href="/">
                      <Logo className="z-50 h-[130px] w-[190px] p-2" />
                    </Link>
                  </Link>
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
        <h1 className="z-10 mb-10 px-6 font-acrom text-[30px]/[36px] font-bold text-white md:mt-5 md:px-16 md:text-4xl/[42px] lg:mb-16 lg:text-5xl/[54px]">
          <span className="font-literature text-[#2E4F6C]">Вдох ,</span> <br />
          чтобы выдыхать
          <br />
          <span className="font-literature text-[#2E4F6C]">Любовь</span>{" "}
          <br />{" "}
        </h1>
        {/* review */}
        <article className="mr-24 mt-8 hidden max-w-[320px] rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:mt-0 xl:block">
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

      <div className="z-40 mb-11">
        <ServicesBadges sections={sections} />
      </div>

      <Image
        src="/images/home/banner.png"
        width={160}
        height={160}
        className="absolute bottom-0 right-0 z-0 xl:bottom-2 xl:right-20 xl:h-64 xl:w-64"
        alt="banner logo image"
      />
    </section>
  )
}

export default Home
