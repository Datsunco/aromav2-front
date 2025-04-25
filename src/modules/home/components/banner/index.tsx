"use client"
import { Button, clx, IconBadge } from "@medusajs/ui"
import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@modules/layout/components/dialog"

import { NavigationMenuDemo } from "../navigation-menu"
import Comma from "icons/comma"
import { DesktopCatalog } from "../desktop-catalog"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Cart from "app/[countryCode]/(main)/cart/page"
import { sections } from "@modules/default/banner/data"
import { useState } from "react"
import ListIcon from "icons/list"

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

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileIsOpen, setMobileIsopen] = useState(false)

  return (
    <div className="relative h-[600px] lg:h-[700px] mx-1 mt-1 bg-blue-600 bg-opacity-20 rounded-[30px] ">
      {/* Основной контейнер */}
      <div className="max-w-5xl flex flex-col mx-auto ">
        <header className="relative flex  duration-200  items-center">
          <Image src="/logo.png" alt="Вдохновение" width={180} height={130} />
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
                <div className="bg-white h-full flex flex-col">
                  {/* Modal Header - Mimics the main header */}
                  <div className="bg-white p-4 flex items-center justify-between border-b">
                    <div className="text-xl font-semibold text-black">
                      Skillbox
                    </div>
                    <div className="flex items-center gap-4">
                      <Button className="text-black hover:bg-gray-100">
                        Войти
                      </Button>
                      <Button
                        className="text-black hover:bg-gray-100"
                        onClick={() => setMobileIsopen(false)}
                      >
                        {/* <X className="h-5 w-5" /> */}
                      </Button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-4 overflow-y-auto">
                    <div className="flex gap-2 overflow-x-auto py-2 mb-4">
                      <Button
                        variant="secondary"
                        className="whitespace-nowrap rounded-full"
                      >
                        Каталог
                      </Button>
                      <Button className="whitespace-nowrap rounded-full flex items-center gap-2">
                        <span>Для детей</span>
                        <span>›</span>
                      </Button>
                      <Button className="whitespace-nowrap rounded-full flex items-center gap-2">
                        <span>Онлайн-колледж</span>
                        <span>›</span>
                      </Button>
                    </div>

                    <div className="relative mb-6">
                      {/* <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Профессия или навык"
                  className="pl-10 py-6 bg-gray-100 border-none"
                /> */}
                    </div>

                    <div className="space-y-6">
                      {menuItems.map((item, index) => (
                        <button
                          key={index}
                          className="flex items-center w-full text-left py-2 text-black hover:text-blue-600"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </button>
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
            <h1 className="text-4xl lg:text-5xl font-bold font-acrom text-white mb-10 lg:mb-16 ">
              Найди себя и свое новое{" "}
              <span className="text-blue-600 font-literature">Вдохновение</span>
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
