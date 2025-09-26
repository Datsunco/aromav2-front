import { cn } from "@lib/util/cn"
import Image from "next/image"
import React from "react"

// Типизацию лучше выносить для переиспользования
type Course = {
  id: number
  title: string
  image: string
  courses: number
  users?: string
  time?: string
  points: string[]
  link: string
  style?: string
  coast: string
}

// Моковые данные лучше держать отдельно или получать извне
const courses: Course[] = [
  {
    id: 3,
    title: "Ароматестирование: Арома-код",
    image: "/images/aromotherapy/list.jpg",
    courses: 55,
    // users: "3-5 чел",
    // time: "1.5 час",
    points: [
      "Индивидуальный аромасеанс",
      "Подробный анализ вашеоо физического и психологического состояния ",
      "Создание ресурсного аромата",
      "Создание индивидуального набора кремов для тела",
    ],
    link: "/name-energy",
    style: "pb-16",
    coast: "6000",
  },
  {
    id: 4,
    title: "Знакомство с методом Арома-код",
    image: "/images/aromotherapy/aroma2.jpg",
    courses: 55,
    // users: "3-5 чел",
    // time: "1.5 час",
    points: [
      "Индивидуальный аромасеанс",
      "Создание ресурсного аромата",
      "Гармонизация состояния",
    ],
    link: "/name-energy",
    style: "pb-28",
    coast: "3000",
  },
]

// --- Компонент Карточки ---
// Я убрал закомментированный код и лишние cn, чтобы сделать его чище.
const CourseCard = React.memo(({ course }: { course: Course }) => {
  return (
    <div
      className={cn(
        "group relative h-[400px] w-full transform-gpu cursor-pointer overflow-hidden rounded-[40px] shadow-lg transition-all duration-300 md:h-[500px]",
        // Так как isCenter больше нет, я убрал тернарные операторы и оставил только нужные стили
        "z-10 scale-100 md:scale-105" // Немного скорректировал scale для статичного отображения
      )}
    >
      {/* Контейнер для изображения */}
      <div className="relative h-[190px] w-full overflow-hidden transition-all duration-300 md:h-[250px]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="z-10 rounded-[40px] object-cover object-[25%_75%]"
          priority={course.id <= 4}
        />

        {/* Информационные плашки */}
        {course.users && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-white px-4 py-1 font-jost text-sm font-light text-[#191919] transition-all duration-300 md:text-lg">
            {course.users}
          </div>
        )}

        {course.time && (
          <div className="absolute right-4 top-4 z-20 rounded-full bg-white px-4 py-1 font-jost text-sm font-light text-[#191919] transition-all duration-300 md:text-lg">
            {course.time}
          </div>
        )}

        <h3 className="absolute bottom-6 left-1/2 z-20 w-[80%] -translate-x-1/2 font-jost text-xl font-medium leading-tight text-white transition-all duration-300 md:text-[30px]">
          {course.title}
        </h3>
      </div>

      {/* Оверлей с текстом */}
      <div
        className={cn(
          "absolute inset-0 z-0 flex flex-col justify-end bg-gradient-to-t from-white to-white pb-4 pl-10 pr-4 pt-4 transition-all duration-300",
          course.style
        )}
      >
        <ul className="flex list-disc flex-col gap-3">
          {course.points.map((item, index) => (
            <li
              key={index} // ✅ Не забываем про key для списков
              className="font-jost text-sm font-light text-[#191919] md:text-base xl:text-[15px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="absolute bottom-5 font-kurale text-2xl font-medium text-[#2E4F6C]">
          Стоимость {course.coast} руб.
        </p>
      </div>
    </div>
  )
})
CourseCard.displayName = "CourseCard"

// --- Основной компонент ---
const Prices = () => {
  return (
    <div className="relative">
      <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center px-4 xl:mt-24">
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-kurale font-normal text-[#2E4F6C]">
            Варианты
          </span>
        </h2>

        {/* Контейнер для карточек */}
        <div className="mt-14 flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
          {courses.map((course) => (
            // ✅ РЕШЕНИЕ: Добавляем классы для управления шириной
            // w-full -> на мобильных устройствах карточка займет всю ширину
            // max-w-sm -> ограничиваем макс. ширину на мобильных для эстетики
            // md:w-1/2 -> на средних экранах и больше каждая карточка займет половину
            <div key={course.id} className="w-full max-w-sm md:w-1/2">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Prices
