"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/carousel"
import { type CarouselApi } from "components/carousel"

import Image from "next/image"
import { cn } from "@lib/util/cn"

// Course data
const courses = [
  {
    id: 1,
    title: "Узнать потенциал по дате рождения",
    image: "/images/course1.jpg",
    courses: 42,
    color: "bg-orange-800/80",
  },
  {
    id: 2,
    title: "Энергия твоего имени",
    image: "/images/course2.jpg",
    courses: 36,
    color: "bg-stone-500/80",
  },
  {
    id: 3,
    title: "Прогноз на месяц",
    image: "/images/course3.jpg",
    courses: 55,
    color: "bg-slate-800/80",
  },
  {
    id: 4,
    title: "Подобрать эфирные масла по дате рождения",
    image: "/images/course4.jpg",
    courses: 39,
    color: "bg-fuchsia-500",
  },
  {
    id: 5,
    title: "Энергия твоего города",
    image: "/images/course5.jpg",
    courses: 5,
    color: "bg-gray-700/80",
  },
  {
    id: 6,
    title: "Получить аффирмацию на день",
    image: "/images/course6.jpg",
    courses: 27,
    color: "bg-sky-500/80",
  },
  {
    id: 7,
    title: "Профориентация по дате рождения",
    image: "/images/course7.jpg",
    courses: 48,
    color: "bg-emerald-800/80",
  },
  {
    id: 8,
    title: "Узнать потенциал по дате рождения",
    image: "/images/course1.jpg",
    courses: 42,
    color: "bg-orange-800/80",
  },
  {
    id: 9,
    title: "Энергия твоего имени",
    image: "/images/course2.jpg",
    courses: 36,
    color: "bg-stone-500/80",
  },
  {
    id: 10,
    title: "Прогноз на месяц",
    image: "/images/course3.jpg",
    courses: 55,
    color: "bg-slate-800/80",
  },
  {
    id: 11,
    title: "Подобрать эфирные масла по дате рождения",
    image: "/images/course4.jpg",
    courses: 39,
    color: "bg-fuchsia-500",
  },
  {
    id: 12,
    title: "Энергия твоего города",
    image: "/images/course5.jpg",
    courses: 5,
    color: "bg-gray-700/80",
  },
  {
    id: 13,
    title: "Получить аффирмацию на день",
    image: "/images/course6.jpg",
    courses: 27,
    color: "bg-sky-500/80",
  },
  {
    id: 14,
    title: "Профориентация по дате рождения",
    image: "/images/course7.jpg",
    courses: 48,
    color: "bg-emerald-800/80",
  },
]

export default function FunctionsList() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    setCurrentIndex(api.selectedScrollSnap())

    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className=" mx-auto mt-24">
      <div className="text-center mb-4 md:mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto font-acrom">
          Исследуйте свои возможности
          {/* <br /> */}
          {/* на пути к     своей цели */}
        </h2>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "center",
          loop: true,
          skipSnaps: true,
        }}
      >
        <CarouselContent className="-ml-4 py-4 min-h-[460px] md:min-h-[530px]">
          {courses.map((course, index) => (
            <CarouselItem
              key={course.id}
              className="custom-basis pl-4 transition-all ease-in-out"
            >
              <div className="py-2">
                <CourseCard course={course} isCenter={index === currentIndex} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-2 md:mt-8">
          <div className="bg-gray-200 rounded-full py-2">
            <button
              onClick={scrollPrev}
              className="group static transform-none mx-2 p-2 rounded-full bg-white hover:bg-black transition-colors"
            >
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
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="group static transform-none mx-2 p-2 rounded-full bg-white hover:bg-black transition-colors"
            >
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

interface CourseCardProps {
  course: {
    id: number
    title: string
    image: string
    courses: number
    color: string
  }
  isCenter?: boolean
}

function CourseCard({ course, isCenter = false }: CourseCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[40px] overflow-hidden group cursor-pointer transition-all duration-300",
        isCenter
          ? "h-[400px] md:h-[480px] scale-105 z-10"
          : "h-[360px] md:h-[420px] scale-95 opacity-80"
      )}
    >
      <Image
        src={course.image || "/placeholder.svg?height=450&width=320"}
        alt={course.title}
        fill
        className="object-cover"
        priority={course.id <= 4}
      />

      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6",
          course.color,
          isCenter ? "bg-opacity-90" : "bg-opacity-70"
        )}
      >
        <div className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium py-1 px-3 rounded-full w-fit mb-4">
          {course.courses} курсов
        </div>
        <h3
          className={cn(
            "text-white font-medium leading-tight transition-all duration-300",
            isCenter ? "text-2xl" : "text-xl"
          )}
        >
          {course.title}
        </h3>
      </div>
    </div>
  )
}
