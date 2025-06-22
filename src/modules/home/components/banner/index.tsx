"use client"
import { Button, clx, IconBadge } from "@medusajs/ui"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogContentNoOverlay,
  DialogTrigger,
} from "@modules/layout/components/dialog"

import { NavigationMenuDemo } from "../navigation-menu"
import Comma from "icons/comma"
import { DesktopCatalog } from "../desktop-catalog"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { sections } from "@modules/default/banner/data"
import { useEffect, useState } from "react"
import ListIcon from "icons/list"
import X from "@modules/common/icons/x"
import ChevronDown from "@modules/common/icons/chevron-down"
import { Banner as BannerType } from "types/banner"
import Link from "next/link"
import Logo from "@modules/default/header/logo"

const Banner = ({ banner }: { banner: BannerType | null }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  useEffect(() => {
    console.log(banner)
  }, [banner])

  return (
    <div className="relative h-[600px] lg:h-[700px] mx-1 mt-1 bg-blue-600 bg-opacity-20 rounded-[30px] ">
      {/* Основной контейнер */}
      <div className="max-w-5xl flex flex-col mx-auto ">
        <header className="relative flex  duration-200  items-center">
          {/* <Image src="/logo.png" alt="Вдохновение" width={180} height={130} /> */}
          <Logo className="w-[190px] h-[130px] p-2" />
          <div className="hidden md:flex">
            <DesktopCatalog isOpen={isOpen} setIsOpen={setIsOpen}>
              <Button
                className={clx(
                  "ml-16 rounded-3xl h-10 w-32 bg-transparent border-[1px] border-white shadow-none font-acrom hover:bg-blue-600 active:bg-blue-600 hover:border-blue-600 text-white text-[16px] hover:text-white",
                  isOpen && "z-50 bg-blue-600 text-white border-blue-600"
                )}
              >
                <span>
                  <ListIcon size={22} className="mr-1" />
                </span>
                <span>Каталог</span>
              </Button>
            </DesktopCatalog>
          </div>

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
                  <div className="h-14 bg-[#d9ff79] py-2 flex justify-between items-center px-6  z-30">
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
                  </div>
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

          <NavigationMenuDemo className="ml-auto hidden lg:block" />
        </header>
        <div className="flex px-4 py-6 lg:py-16  justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl/[42px] lg:text-5xl/[54px] font-bold font-acrom text-white mb-10 lg:mb-16 ">
              <span className="text-blue-600 font-literature">Вдох ,</span>{" "}
              <br />
              чтобы выдыхать
              <br />
              <span className="text-blue-600 font-literature">Любовь</span>{" "}
              <br />{" "}
            </h1>
            <div className="flex flex-wrap gap-3 ">
              {sections.map((category) => (
                <LocalizedClientLink
                  href={category.link}
                  className=""
                  data-testid="back-to-cart-link"
                >
                  <button className="px-4 py-2 font-acrom text-[14px] bg-white rounded-full text-gray-800 hover:bg-gray-100">
                    {category.title}
                  </button>
                </LocalizedClientLink>
              ))}
            </div>
          </div>
          <div className="hidden lg:block mt-8 lg:mt-0 p-6 rounded-3xl max-w-[260px] backdrop-blur-md bg-white/10 border border-white/20">
            <Comma className="mb-4" />
            <blockquote className="text-gray-700">
              "Из любопытства пошёл на собеседование, но в итоге получил оффер
              на SQL-разработчика"
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">Кирилл Быков</p>
              <p className="text-gray-500">Менеджер → Разработчик</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
