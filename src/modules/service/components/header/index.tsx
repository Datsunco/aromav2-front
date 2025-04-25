import { Button, clx, IconBadge } from "@medusajs/ui"
import Image from "next/image"

import { NavigationMenuDemo } from "../../../home/components/navigation-menu"
import { DesktopCatalog } from "../../../home/components/desktop-catalog"
import ListIcon from "icons/list"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="relative flex  duration-200  items-center">
      <Image src="/logo.png" alt="Вдохновение" width={180} height={130} />
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
      gbcmr

      <NavigationMenuDemo className="ml-auto hidden md:flex" />
    </header>
  )
}

export default Header
