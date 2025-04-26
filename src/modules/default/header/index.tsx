"use client"
import Image from "next/image"

import { Button, clx, IconBadge } from "@medusajs/ui"

import { sections } from "@modules/default/banner/data"

import { NavigationMenuDemo } from "@modules/home/components/navigation-menu"
import { DesktopCatalog } from "@modules/home/components/desktop-catalog"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"
import ListIcon from "icons/list"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@modules/layout/components/dialog"
import X from "@modules/common/icons/x"
import ChevronDown from "@modules/common/icons/chevron-down"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  const menuItems = [
    { icon: <></>, label: "Программирование" },
    { icon: <></>, label: "Дизайн" },
    { icon: <></>, label: "Аналитика" },
    { icon: <></>, label: "Маркетинг" },
    { icon: <></>, label: "Управление" },
    { icon: <></>, label: "Финансы" },
    { icon: <></>, label: "Игры" },
    { icon: <></>, label: "Кино и Музыка" },
    { icon: <></>, label: "Маркетплейсы" },
    { icon: <></>, label: "Инженерия" },
    { icon: <></>, label: "Психология" },
    { icon: <></>, label: "Здоровье" },
    { icon: <></>, label: "Английский язык" },
  ]

  return (
    <header className="relative flex  duration-200 items-center pr-4 lg:px-0">
      <LocalizedClientLink
        href="/"
        className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
        data-testid="nav-store-link"
      >
        <Image
          src="/logo.png"
          alt="Вдохновение"
          width={180}
          height={130}
          className="h-[102px] w-[140px] lg:w-[180px] lg:h-[130px]"
        />
      </LocalizedClientLink>

      <div className="hidden md:flex">
        <DesktopCatalog isOpen={isOpen} setIsOpen={setIsOpen}>
          <Button
            className={clx(
              "ml-16 rounded-3xl h-10 w-32 bg-transparent border-[1px] border-black shadow-none font-acrom hover:bg-blue-600 hover:border-blue-600 text-black hover:text-white",
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

      {/* <Button
        // variant="ghost"
        // size="icon"
        className="text-white hover:bg-blue-600"
        onClick={() => setMobileIsopen(true)}
      >
        {!isOpen && <ListIcon className="h-5 w-5" />}
      </Button> */}

      {/* Мобильный хедер */}
      <div className="block md:hidden ml-auto mr-0">
        <Dialog open={mobileIsOpen} onOpenChange={setMobileIsopen}>
          <DialogTrigger className="mr-4">
            {/* {!isOpen && } */}
            <ListIcon className="h-6 w-6" />
          </DialogTrigger>
          <DialogContent
            className="max-w-full font-acrom  p-0 m-0 h-[100dvh] rounded-none border-none  data-[state=open]:duration-0 data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0 data-[state=closed]:duration-100 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            // onInteractOutside={(e) => e.preventDefault()}
          >
            <div className="bg-white h-full flex flex-col overflow-y-auto">
              <div className="h-14 bg-[#d9ff79] py-2 flex justify-between items-center px-6  z-30">
                <span className="text-base md:text-2xl font-medium font-acrom">
                  Тут будет какой-то рекламный текст
                </span>
                <Button variant="secondary" className="px-4 py-2 rounded-lg">
                  <p className="text-sm font-acrom font-medium outline-none border-none shadow-none">
                    Смотреть
                  </p>
                </Button>
              </div>
              {/* Modal Header - Mimics the main header */}
              <div className="mt-[5px] bg-white pr-5 flex items-center justify-between border-b">
                <Image
                  src="/logo.png"
                  className=""
                  alt="Вдохновение"
                  width={140}
                  height={102}
                />
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
                    href="/about-us"
                    className="whitespace-nowrap rounded-full bg-[#EBEBEB] text-black text-base flex items-center gap-1 min-w-36 font-medium justify-center"
                  >
                    <span>Записаться</span>
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

      <NavigationMenuDemo className="ml-auto hidden md:flex" />
    </header>
  )
}

export default Header
