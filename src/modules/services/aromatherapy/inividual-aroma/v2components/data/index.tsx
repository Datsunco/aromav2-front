"use client"

import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import React, { useCallback, useEffect, useState } from "react"
import { flushSync } from "react-dom"

// Определяем тип для наших новых информационных блоков
type InfoBlockProps = {
  title: string
  // Описание может быть как обычной строкой, так и массивом строк для списков
  description: string | string[]
  image?: {
    src: string
    alt: string
    className: string
  }
}

// Данные, взятые из изображения, для следования принципу DRY
const INFO_BLOCKS_DATA: InfoBlockProps[] = [
  {
    title: "Как подготовиться к индивидуальному сеансу",
    description: [
      "В день проведения сеанса не пользуйтесь парфюмом",
      "Перекусите перед сеансом, но не пейте кофе",
      "Предупредите о хронических заболеваниях и постоянном приёме медицинских препаратов",
    ],
    image: {
      src: "/images/lavanda2.png", // Укажите свой путь
      alt: "Лаванда",
      className:
        "absolute z-0 -rotate-12 -scale-x-100 md:-left-6 md:-top-[60px] md:h-32 md:w-20 xl:-left-16 xl:-top-[80px] xl:h-60 xl:w-40",
    },
  },
  {
    title: "Что вы получите сразу после сеанса",
    description: [
      "гармонизацию эмоционального состояния",
      "флакончик ресурсных духов",
      "комплект индивидуальных кремов для тела",
    ],

    image: {
      src: "/images/aromotherapy/v2/bottles-and-leaves.png", // Укажите свой путь
      alt: "Пипетка с маслом",
      className:
        "absolute z-0  md:-right-6 md:-top-[20px] md:h-32 md:w-32 xl:-right-12 xl:-top-[40px] xl:h-60 xl:w-60",
    },
  },
  {
    title: "Ваше состояние после",
    description:
      "Уже после первого курса индивидуальной ароматерапии вы почувствуете положительные изменения своего состояния. Пройдя три курса, ваш организм почувствует себя в ресурсе. Теперь вы легче сможете раскрывать ваши таланты, вашу уникальность.",
  },
  {
    title: "Полное погружение в себя с помощью ароматеапии",
    description:
      "Пройдя девять ароматестирований ваш организм расскажет о вашем личном генетическом аромакоде - коде здоровья, знание которого позволяет быть в ресурсе всегда",
    image: {
      src: "/images/lavanda2.png", // Укажите свой путь
      alt: "Флакон с маслом",
      className:
        "absolute z-0 md:-right-2 md:bottom-2 md:h-32 md:w-20 xl:-right-4 xl:bottom-4 xl:h-60 xl:w-40",
    },
  },
]

// Переиспользуемый компонент информационного блока
const InfoBlock: React.FC<InfoBlockProps> = ({ title, description, image }) => (
  <div className="relative h-full w-full">
    {image && (
      <img src={image.src} alt={image.alt} className={image.className} />
    )}
    <article className="relative z-10 flex h-full flex-col overflow-hidden rounded-[33px] bg-[#B3C3D269] p-6 shadow-[inset_9px_9px_26.4px_0_#2E4F6C36] backdrop-blur-[2px] xl:p-10">
      <h3 className="mb-4 font-jost text-xl/tight font-medium text-[#2E4F6C] xl:text-2xl/tight">
        {title}
      </h3>
      {Array.isArray(description) ? (
        <ul className="flex flex-col gap-y-2 font-jost text-sm font-light xl:text-lg/snug">
          {description.map((item, index) => (
            <li
              key={index}
              className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#2E4F6C]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-jost text-sm font-light xl:text-lg/snug">
          {description}
        </p>
      )}
    </article>
  </div>
)

// Основной компонент секции
const AromaIndividInfoSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      flushSync(() => {
        emblaApi.scrollTo(index)
      })
    },
    [emblaApi]
  )

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect).on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative py-14 xl:py-24">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4">
        {/* --- ДЕСКТОПНАЯ ВЕРСИЯ (GRID) --- */}
        <div className="hidden w-full justify-center gap-6 md:grid md:max-w-4xl md:grid-cols-2 xl:max-w-5xl">
          {INFO_BLOCKS_DATA.map((block, index) => (
            <InfoBlock key={index} {...block} />
          ))}
        </div>

        {/* --- МОБИЛЬНАЯ ВЕРСИЯ (КАРУСЕЛЬ) --- */}
        <div className="w-full md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {INFO_BLOCKS_DATA.map((block, index) => (
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_85%] pl-4"
                >
                  <InfoBlock {...block} />
                </div>
              ))}
            </div>
          </div>

          {/* Навигация для карусели */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  index === selectedIndex ? "bg-[#2E4F6C]" : "bg-gray-300"
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AromaIndividInfoSection
