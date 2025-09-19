// src/modules/default/banner/components/services-badges.tsx
"use client"

import React, { useMemo, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { cn } from "@lib/util/cn"
// import { useMediaQuery } from "@lib/hooks/use-media-query"

type Section = {
  link: string
  title: string
}

type ServicesBadgesProps = {
  sections: Section[]
}

const ServicesBadges: React.FC<ServicesBadgesProps> = ({ sections }) => {
  // ✨ Шаг 1: Разделяем массив на два: для верхнего и нижнего ряда
  const { topRow, bottomRow } = useMemo(() => {
    const top = sections.filter((_, i) => i % 2 === 0)
    const bottom = sections.filter((_, i) => i % 2 !== 0)
    return { topRow: top, bottomRow: bottom }
  }, [sections])

  const emblaOptions = {
    // active: isMobile,
    align: "start" as const,
    dragFree: true,
    containScroll: "trimSnaps" as const,
  }

  // ✨ Шаг 2: Инициализируем ДВЕ карусели
  const [emblaRefTop, emblaApiTop] = useEmblaCarousel(emblaOptions)
  const [emblaRefBottom, emblaApiBottom] = useEmblaCarousel(emblaOptions)

  return (
    // Общий контейнер. На десктопе он становится flex-wrap сеткой
    <div className="z-50 md:flex md:flex-wrap md:gap-3">
      {/*
        Вложенный контейнер для мобильной верстки.
        На десктопе он "растворяется" благодаря `md:contents`,
        и все кнопки становятся прямыми потомками сетки выше.
      */}
      <div className="flex flex-col gap-3">
        {/* Карусель для верхнего ряда */}
        <div className="overflow-hidden" ref={emblaRefTop}>
          <div className="-ml-3 flex px-6 md:px-16">
            {topRow.map((category) => (
              <div
                key={category.title}
                className="relative min-w-0 flex-shrink-0 pl-3"
              >
                <LocalizedClientLink href={category.link}>
                  <button
                    className={cn(
                      "whitespace-nowrap rounded-full bg-white px-4 py-2 font-acrom text-[14px] text-gray-800 transition-colors hover:bg-gray-100 xl:text-base",
                      category.title === "Нумерология" &&
                        "bg-[#2E4F6C] text-white"
                    )}
                  >
                    {category.title}
                  </button>
                </LocalizedClientLink>
              </div>
            ))}
          </div>
        </div>

        {/* Карусель для нижнего ряда */}
        {bottomRow.length > 0 && (
          <div className="overflow-hidden" ref={emblaRefBottom}>
            <div className="-ml-3 flex px-6 md:px-16">
              {bottomRow.map((category) => (
                <div
                  key={category.title}
                  className="relative min-w-0 flex-shrink-0 pl-3"
                >
                  <LocalizedClientLink href={category.link}>
                    <button
                      className={cn(
                        "whitespace-nowrap rounded-full bg-white px-4 py-2 font-acrom text-[14px] text-gray-800 transition-colors hover:bg-gray-100 xl:text-base",
                        category.title === "Нумерология" &&
                          "bg-[#2E4F6C] text-white"
                      )}
                    >
                      {category.title}
                    </button>
                  </LocalizedClientLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServicesBadges
