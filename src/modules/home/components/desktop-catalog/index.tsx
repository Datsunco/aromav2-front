"use client"

import { useEffect, useRef, useState } from "react"
import {
  CatalogMenu,
  CatalogMenuContent,
  CatalogMenuDescription,
  CatalogMenuHeader,
  CatalogMenuTitle,
  CatalogMenuTrigger,
  CatalogMenuOverlay,
} from "@modules/layout/components/catalog-menu"
import Image from "next/image"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Можно вынести в отдельный файл с данными
const categories = [
  { icon: "</>" as const, label: "Аромотерапия", link: "/aromatherapy" },
  { icon: "📊" as const, label: "Девичник", link: "/girls" },
  { icon: "📈" as const, label: "Нумерология", link: "/numerology" },
  { icon: "🎮" as const, label: "Женские встречи", link: "/women-meet" },
  { icon: "🛍️" as const, label: "Психология", link: "/aromatherapy" },
  { icon: "🧠" as const, label: "Мастер-классы", link: "/classes" },
]

// "/aromatherapy"
// | "/girls"
// | "/numerology"
// | "/women-meet"
// | "/classes"
// | "/store"

const popularCourses = [
  {
    title: "Python-разработчик",
    image: "/python-dev.png",
  },
  {
    title: "Инженер по тестированию",
    image: "/qa-engineer.png",
  },
  {
    title: "Веб-дизайнер",
    image: "/web-designer.png",
  },
  {
    title: "Бизнес-аналитик",
    image: "/business-analyst.png",
  },
]

export function DesktopCatalog({
  children,
  setIsOpen,
  isOpen,
}: {
  children: React.ReactNode
  setIsOpen: (k: boolean) => void
  isOpen: boolean
}) {
  // const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <CatalogMenu open={isOpen} onOpenChange={setIsOpen}>
      {/* className={clx(triggerRef.current.)} */}
      <CatalogMenuTrigger
        ref={triggerRef}
        asChild
        className={clx(
          "relative" // Добавляем relative для корректного позиционирования z-index
        )}
      >
        {children}
      </CatalogMenuTrigger>
      <CatalogMenuOverlay className="bg-black/50 z-40" />
      <CatalogMenuContent
        containerRef={triggerRef}
        className="bg-white p-8 rounded-[40px] shadow-none h-[500px]"
      >
        <div className="flex gap-8">
          {/* Левая колонка с категориями */}
          <div className="space-y-2">
            <div className="relative">
              <input
                type="search"
                placeholder="Профессия или навык"
                className="w-full px-4 py-3 pl-10 bg-gray-50 rounded-lg text-sm"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <ul className="space-y-1 grid grid-cols-2 gap-2 w-[400px]">
              {categories.map((category) => (
                <LocalizedClientLink
                  href={category.link}
                  className=""
                  data-testid="back-to-cart-link"
                >
                  <li key={category.label} className="">
                    <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                      <span className="text-xl">{category.icon}</span>
                      <span className="text-sm">{category.label}</span>
                    </button>
                  </li>
                </LocalizedClientLink>
              ))}
              <li>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <span className="text-xl">📚</span>
                  <span className="text-sm">Все курсы</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Правая колонка с популярными курсами */}
          <div className="w-[400px]">
            <h2 className="text-xl font-semibold mb-6">Популярное</h2>
            <div className="grid grid-cols-2 gap-4">
              {popularCourses.map((course) => (
                <button
                  key={course.title}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-100 overflow-hidden relative">
                    {/* <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <span className="text-sm font-medium">{course.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </CatalogMenuContent>
    </CatalogMenu>
  )
}
