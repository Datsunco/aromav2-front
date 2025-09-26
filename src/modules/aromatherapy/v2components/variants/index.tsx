"use client"

import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react"
import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"
import { flushSync } from "react-dom"

type AromaVariantCardProps = {
  category: string
  title: string
  description: string
  duration: string
  src: string
  image?: {
    src: string
    alt: string
    className: string
  }
}

// Выносим данные в массив для следования принципу DRY
const AROMA_VARIANTS_DATA: AromaVariantCardProps[] = [
  {
    category: "Для себя",
    title: "Индивидуальный прием ароматолога",
    description:
      "Вас ждёт аромасеанс, который окажет терапевтическое действие на организм. Вы выдохните скопившееся напряжение и расслабитесь. Завершением сеанса станет создание своего ресурсного аромата.",
    src: "/services/individual-aroma",
    duration: "2 часа",
  },
  {
    category: "Для пары",
    title: "Гармонизация отношений и ароматерапия",
    description:
      "На совместном аромасеансе вы подберёте гармонизирующие эфирные масла, которые помогут снять напряжение и создать атмосферу доверия в ваших отношениях. Завершением сеанса станет создание ресурсного аромата для каждого.",
    src: "/services/family-aroma",
    duration: "2 часа",
    image: {
      src: "/images/lavanda2.png",
      alt: "Лаванда",
      className:
        "absolute z-0 rotate-[20deg] md:-right-6 md:-top-[80px] md:h-40 md:w-24 xl:-right-24 xl:-top-[80px] xl:h-72 xl:w-48",
    },
  },
  {
    category: "Для семьи",
    title: "Аромасеанс “Вместе с мамой”",
    src: "/services/mom-aroma",
    description:
      "Совместный аромасеанс станет интересным и полезным времяпровождением. Специально подобранные эфирные масла помогут маме и ребёнку открыть сердце друг для друга, смягчить возможные конфликты и наполнить общение нежностью. Завершением сеанса станет создание ресурсного аромата для каждого.",
    duration: "2 часа",
    image: {
      src: "/images/lavanda2.png",
      alt: "Лаванда",
      className:
        "absolute z-0 -rotate-12 -scale-x-100 md:-left-6 md:-top-[80px] md:h-40 md:w-24 xl:-left-24 xl:-top-[80px] xl:h-72 xl:w-48",
    },
  },
  {
    category: "Для ребенка",
    title: "Прием ароматолога для ребенка",
    src: "/services/child-aroma",
    description:
      "С помощью индивидуального ароматестирования ароматолог подберёт детские ароматы, которые успокоят, поднимут настроение и поддержат иммунитет вашего ребёнка. Завершением сеанса станет создание своего ресурсного аромата, что очень интересно детям.",
    duration: "2 часа",
  },
]

// Переиспользуемый компонент карточки для чистоты кода
const AromaVariantCard: React.FC<AromaVariantCardProps> = ({
  category,
  title,
  description,
  duration,
  image,
  src,
}) => (
  <div className="relative h-full w-full md:h-auto md:max-w-[300px] xl:max-w-[550px]">
    {image && (
      <img src={image.src} alt={image.alt} className={image.className} />
    )}
    <Link href={src}>
      <article className="relative z-10 flex h-full flex-col overflow-hidden rounded-[33px] bg-[#B3C3D269] p-5 pb-3 shadow-[inset_9px_9px_26.4px_0_#2E4F6C36] backdrop-blur-[2px] xl:px-12 xl:py-6">
        <div className="mb-2 flex items-center justify-between xl:mb-4">
          <span className="font-jost text-sm font-light xl:text-lg/none">
            {category}
          </span>
          <button className="rounded-[14px] bg-[#2E4F6C] px-2.5 py-1 font-acrom text-xs font-light text-white xl:rounded-[20px] xl:px-4 xl:text-base/relaxed">
            Подробнее
          </button>
        </div>
        <p className="mb-2.5 font-jost text-xl/tight font-medium text-[#2E4F6C] xl:mb-6 xl:text-[30px]/none">
          {title}
        </p>
        <p className="mb-6 font-jost text-sm font-light xl:text-xl/none">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="font-jost text-sm font-light xl:text-lg/none">
            {duration}
          </span>
        </div>
      </article>
    </Link>
  </div>
)

const AromaVariants = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return
      // flushSync используется для немедленного обновления DOM,
      // что иногда помогает избежать рассинхронизации анимаций
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
    emblaApi.on("select", onSelect)
    // Переинициализация при изменении размера окна
    emblaApi.on("reInit", onSelect)

    // Очистка подписчиков при размонтировании компонента
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])
  return (
    <div className="relative">
      <section className="mx-auto mt-14 flex flex-col items-center justify-center px-4 md:max-w-3xl xl:mt-24 xl:max-w-5xl">
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-kurale font-normal text-[#2E4F6C]">
            Ароматерапия подходит для каждого
          </span>
        </h2>

        {/* --- ДЕСКТОПНАЯ ВЕРСИЯ (GRID) --- */}
        <div className="mt-14 hidden w-full justify-center gap-4 md:grid md:grid-cols-2">
          {AROMA_VARIANTS_DATA.map((variant, index) => (
            <AromaVariantCard key={index} {...variant} />
          ))}
        </div>

        {/* --- МОБИЛЬНАЯ ВЕРСИЯ (КАРУСЕЛЬ) --- */}
        <div className="mt-10 w-full md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {AROMA_VARIANTS_DATA.map((variant, index) => (
                // Каждый слайд
                <div
                  key={index}
                  className="relative min-w-0 flex-[0_0_85%] pl-4" // 85% ширины для эффекта "подглядывания" следующего слайда
                >
                  <AromaVariantCard {...variant} />
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

export default AromaVariants
