"use client"

import React, { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { type CarouselApi } from "components/carousel"
import { Carousel, CarouselContent, CarouselItem } from "components/carousel"
import { cn } from "@lib/util/cn"

// ✅ Возвращаем поле 'courses' в данные
type Course = {
  id: number
  title: string
  image: string
  courses: number // Поле возвращено
  link: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Узнать потенциал по дате рождения",
    image: "/images/home/funcs/potential.png",
    courses: 42,
    link: "/potential",
  },
  {
    id: 2,
    title: "Энергия твоего имени",
    image: "/images/home/funcs/energy.png",
    courses: 36,
    link: "/name-energy",
  },
  {
    id: 3,
    title: "Прогноз на месяц",
    image: "/images/home/funcs/month.png",
    courses: 55,
    link: "/name-energy",
  },
  {
    id: 4,
    title: "Подобрать эфирные масла по дате рождения",
    image: "/images/home/funcs/oilspng.png",
    courses: 39,
    link: "/name-energy",
  },
  {
    id: 5,
    title: "Узнать потенциал по дате рождения",
    image: "/images/home/funcs/potential.png",
    courses: 42,
    link: "/potential",
  },
  {
    id: 6,
    title: "Энергия твоего имени",
    image: "/images/home/funcs/energy.png",
    courses: 36,
    link: "/name-energy",
  },
  {
    id: 7,
    title: "Прогноз на месяц",
    image: "/images/home/funcs/month.png",
    courses: 55,
    link: "/name-energy",
  },
  {
    id: 8,
    title: "Подобрать эфирные масла по дате рождения",
    image: "/images/home/funcs/oilspng.png",
    courses: 39,
    link: "/name-energy",
  },
  // ...остальные данные...
]

// Вспомогательная функция для правильного склонения слов
const pluralizeCourses = (count: number): string => {
  const cases = [2, 0, 1, 1, 1, 2]
  const titles = ["курс", "курса", "курсов"]
  const word =
    titles[
      count % 100 > 4 && count % 100 < 20
        ? 2
        : cases[count % 10 < 5 ? count % 10 : 5]
    ]
  return `${count} ${word}`
}

// Локальный компонент для иконки стрелки, чтобы не дублировать SVG
const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="group-hover:text-white"
  >
    <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
)

// ✅ Используем React.memo для высокой производительности
const CourseCard = React.memo(
  ({ course, isCenter }: { course: Course; isCenter: boolean }) => {
    return (
      // ✅ Возвращена вся оригинальная логика классов для высоты, масштаба и прозрачности
      <div
        className={cn(
          "group relative transform-gpu cursor-pointer overflow-hidden rounded-[40px] transition-all duration-300",
          isCenter
            ? "z-10 h-[400px] scale-105 md:h-[480px]"
            : "h-[360px] scale-95 opacity-80 md:h-[420px]"
        )}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover object-fill"
          sizes="(max-width: 768px) 80vw, 33vw"
          priority={course.id <= 4}
        />
        {/* ✅ Возвращена верстка оверлея, но без цветовой маски */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6">
          {/* ✅ Возвращен блок с количеством курсов */}
          {/* <div className="mb-4 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {pluralizeCourses(course.courses)}
          </div> */}
          {/* ✅ Возвращена логика изменения размера текста */}
          <h3
            className={cn(
              "font-medium leading-tight text-white transition-all duration-300",
              isCenter ? "text-2xl" : "text-xl"
            )}
          >
            {course.title}
          </h3>
        </div>
      </div>
    )
  }
)
CourseCard.displayName = "CourseCard"

export default function FunctionsList() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Оптимизированная логика для отслеживания активного слайда остается без изменений
  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  return (
    <div className="mx-auto mt-24">
      {/* ✅ Возвращена верстка заголовка */}
      <div className="mb-4 text-center md:mb-12">
        <h2 className="mx-auto max-w-3xl font-acrom text-3xl font-bold md:text-4xl lg:text-5xl">
          Исследуйте свои возможности
        </h2>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true, skipSnaps: true }}
      >
        {/* ✅ Возвращена верстка контейнера слайдов */}
        <CarouselContent className="-ml-4 min-h-[460px] py-4 md:min-h-[530px]">
          {courses.map((course, index) => (
            <CarouselItem key={course.id} className="custom-basis pl-4">
              <Link href={`/functions${course.link}`}>
                {/* ✅ Возвращен div-обертка */}
                <div className="py-2">
                  <CourseCard
                    course={course}
                    isCenter={index === selectedIndex}
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* ✅ Возвращена верстка кастомных кнопок навигации */}
        <div className="mt-2 flex justify-center gap-4 md:mt-8">
          <div className="rounded-full bg-gray-200 py-2">
            <button
              onClick={scrollPrev}
              className="group static mx-2 transform-none rounded-full bg-white p-2 transition-colors hover:bg-black"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={scrollNext}
              className="group static mx-2 transform-none rounded-full bg-white p-2 transition-colors hover:bg-black"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
