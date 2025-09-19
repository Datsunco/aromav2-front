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
  users?: string
  time?: string
  points: string[]
  link: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "Рукоделие",
    image: "/images/girls/types/vyaz.png",
    courses: 42,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/potential",
  },
  {
    id: 2,
    title: "Ароматерапия вдвоём с подругой",
    image: "/images/girls/types/coffee.png",
    courses: 36,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/name-energy",
  },
  {
    id: 3,
    title: "Создание ресурсного аромата",
    image: "/images/girls/types/resource.png",
    courses: 55,
    users: "3-5 чел",
    time: "1.5 час",
    points: [
      //   "Мы создадим ваш личный аромат, который будет помогать вам быть в ресурсе",
      //   "Будем вдыхать ароматы, погружаться в свои ощущения",
      "Взаимодействие с эфирными маслами запустит в организме процесс самовосстановления",
      "Каждый создаст свой личный аромат, с собой вы унесёте красивый флакончик",
    ],
    link: "/name-energy",
  },
  {
    id: 4,
    title: "Создание аромата по дате рождения",
    image: "/images/girls/types/birth.png",
    courses: 39,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/name-energy",
  },
  {
    id: 5,
    title: "Создание автопарфюма",
    image: "/images/girls/types/car.png",
    courses: 42,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/potential",
  },
  {
    id: 6,
    title: "Рукоделие",
    image: "/images/girls/types/vyaz.png",
    courses: 42,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/potential",
  },
  {
    id: 7,
    title: "Ароматерапия вдвоём с подругой",
    image: "/images/girls/types/coffee.png",
    courses: 36,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/name-energy",
  },
  {
    id: 8,
    title: "Создание ресурсного аромата",
    image: "/images/girls/types/resource.png",
    courses: 55,
    users: "3-5 чел",
    time: "1.5 час",
    points: [
      //   "Мы создадим ваш личный аромат, который будет помогать вам быть в ресурсе",
      "Будем вдыхать ароматы, погружаться в свои ощущения",
      "Взаимодействие с эфирными маслами запустит в организме процесс самовосстановления",
      "Каждый создаст свой личный аромат, с собой вы унесёте красивый флакончик",
    ],
    link: "/name-energy",
  },
  {
    id: 9,
    title: "Создание аромата по дате рождения",
    image: "/images/girls/types/birth.png",
    courses: 39,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/name-energy",
  },
  {
    id: 10,
    title: "Создание автопарфюма",
    image: "/images/girls/types/car.png",
    courses: 42,
    users: "3-5 чел",
    time: "1.5 час",
    points: ["", ""],
    link: "/potential",
  },
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

const CourseCard = React.memo(
  ({ course, isCenter }: { course: Course; isCenter: boolean }) => {
    return (
      // Контейнер карточки остается без изменений
      <div
        className={cn(
          "group relative transform-gpu cursor-pointer overflow-hidden rounded-[40px] shadow-lg transition-all duration-300",
          isCenter
            ? "z-10 h-[400px] scale-105 md:h-[480px]"
            : "h-[360px] scale-95 opacity-80 md:h-[420px]"
        )}
      >
        {/* ✅ Шаг 1: Создаем контейнер-обертку для изображения */}
        <div
          className={cn(
            "relative w-full overflow-hidden transition-all duration-300",
            // ✅ Шаг 2: Переносим классы высоты СЮДА
            isCenter ? "h-[190px] md:h-[250px]" : "h-full" // Например, 180px в обычном состоянии
          )}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            // ✅ Шаг 3: Упрощаем классы для самого изображения
            className="z-10 rounded-[40px] object-cover"
            priority={course.id <= 4}
          />

          <div
            className={cn(
              "absolute left-4 top-4 z-20 -translate-y-20 rounded-full bg-white px-4 py-1 font-jost text-sm font-light text-[#191919] transition-all duration-300 md:text-lg",
              isCenter && "-translate-y-0"
            )}
          >
            {course.users}
          </div>

          <div
            className={cn(
              "absolute right-4 top-4 z-20 -translate-y-20 rounded-full bg-white px-4 py-1 font-jost text-sm font-light text-[#191919] transition-all duration-300 md:text-lg",
              isCenter && "-translate-y-0"
            )}
          >
            {course.time}
          </div>
          <h3
            className={cn(
              "absolute bottom-6 left-1/2 z-20 w-[80%] -translate-x-1/2 font-jost text-xl font-medium leading-tight text-white transition-all duration-300 md:text-[30px]",
              isCenter ? "" : ""
            )}
          >
            {course.title}
          </h3>
        </div>

        {/* Оверлей с текстом */}
        <div
          className={cn(
            "absolute inset-0 z-0 mb-0 mt-auto flex flex-col justify-end bg-gradient-to-t from-white to-white pb-4 pl-10 pr-4 transition-all duration-300",
            isCenter && ""
          )}
        >
          <ul className="flex list-disc flex-col gap-3">
            {course.points.map((item) => (
              <li className="font-jost text-sm font-light text-[#191919] md:text-base xl:text-[15px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
)
CourseCard.displayName = "CourseCard"

const Types = () => {
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
        <h2 className="mx-auto max-w-3xl font-kurale text-3xl text-[#2E4F6C] md:text-5xl">
          Выбери свой формат
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

export default Types
