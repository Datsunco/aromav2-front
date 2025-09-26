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
    <div className="relative mx-1 mt-1 h-[600px] rounded-[30px] bg-blue-600 bg-opacity-20 lg:h-[700px]">
      {/* Основной контейнер */}
      <div className="mx-auto flex max-w-5xl flex-col">
        <header className="relative flex items-center duration-200">
          {/* <Image src="/logo.png" alt="Вдохновение" width={180} height={130} /> */}
          <Link href="/">
            rerrere
            <Link href="/">
              <Logo className="z-50 h-[130px] w-[190px] p-2" />
            </Link>
          </Link>
          <div className="hidden md:flex">
            <DesktopCatalog isOpen={isOpen} setIsOpen={setIsOpen}>
              <Button
                className={clx(
                  "ml-16 h-10 w-32 rounded-3xl border-[1px] border-white bg-transparent font-acrom text-[16px] text-white shadow-none hover:border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-600",
                  isOpen && "z-50 border-blue-600 bg-blue-600 text-white"
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
                  <div className="z-30 flex h-14 items-center justify-between bg-[#d9ff79] px-6 py-2">
                    <span className="font-acrom text-base font-medium md:text-2xl">
                      {banner?.content ?? ""}
                    </span>
                    <Link href={banner?.link ?? ""}>
                      <Button
                        variant="secondary"
                        className="rounded-lg px-4 py-2"
                      >
                        <p className="border-none font-acrom text-sm font-medium shadow-none outline-none">
                          Смотреть
                        </p>
                      </Button>
                    </Link>
                  </div>
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

          <NavigationMenuDemo className="ml-auto hidden lg:block" />
        </header>
        <div className="flex justify-between px-4 py-6 lg:py-16">
          <div className="max-w-2xl">
            <h1 className="mb-10 font-acrom text-4xl/[42px] font-bold text-white lg:mb-16 lg:text-5xl/[54px]">
              <span className="font-literature text-blue-600">Вдох ,</span>{" "}
              <br />
              чтобы выдыхать
              <br />
              <span className="font-literature text-blue-600">Любовь</span>{" "}
              <br />{" "}
            </h1>
            <div className="flex flex-wrap gap-3">
              {sections.map((category) => (
                <LocalizedClientLink
                  href={category.link}
                  className=""
                  data-testid="back-to-cart-link"
                >
                  <button className="rounded-full bg-white px-4 py-2 font-acrom text-[14px] text-gray-800 hover:bg-gray-100">
                    {category.title}
                  </button>
                </LocalizedClientLink>
              ))}
            </div>
          </div>
          <div className="mt-8 hidden max-w-[260px] rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md lg:mt-0 lg:block">
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
