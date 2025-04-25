"use client"
import Image from "next/image"

import { Button, clx, IconBadge } from "@medusajs/ui"

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
          <DialogTrigger className="">
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
                <div className="text-xl font-semibold text-black">Skillbox</div>
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

      <NavigationMenuDemo className="ml-auto hidden md:flex" />
    </header>
  )
}

export default Header
