"use client"

import React, { useCallback } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/carousel"
import Link from "next/link"
import { type CarouselApi } from "components/carousel"
import { clx } from "@medusajs/ui"
import { Event } from "types/event"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const data: Event[] = [
  {
    id: "TEST",
    title: "Нейростатус",
    link: "https://example.com",
    subtitle: "Подзаголовок",
    description: "Ntcn",
    location: "Офис",
    start_date: "2025-12-06T16:00:00.000Z",
    is_published: true,
    image_urls: {
      urls: [
        "https://testaroma.hb.ru-msk.vkcloud-storage.ru/photo_2025-05-30_23-35-55.jpg",
      ],
    },
  },
  {
    id: "TEST",
    title: "Нейростатус",
    description: "Ntcn",
    link: "https://example.com",
    subtitle: "Подзаголовок",
    location: "Офис",
    start_date: "2025-12-06T16:00:00.000Z",
    is_published: true,
    image_urls: {
      urls: [
        "https://testaroma.hb.ru-msk.vkcloud-storage.ru/photo_2025-05-30_23-35-55.jpg",
      ],
    },
  },
  {
    id: "TEST",
    title: "Нейростатус",
    description: "Ntcn",
    link: "https://example.com",
    subtitle: "Подзаголовок",
    location: "Офис",
    start_date: "2025-12-06T16:00:00.000Z",
    is_published: true,
    image_urls: {
      urls: [
        "https://testaroma.hb.ru-msk.vkcloud-storage.ru/photo_2025-05-30_23-35-55.jpg",
      ],
    },
  },
  {
    id: "TEST",
    title: "Нейростатус",
    description: "Ntcn",
    link: "https://example.com",
    subtitle: "Подзаголовок",
    location: "Офис",
    start_date: "2025-12-06T16:00:00.000Z",
    is_published: true,
    image_urls: {
      urls: [
        "https://testaroma.hb.ru-msk.vkcloud-storage.ru/photo_2025-05-30_23-35-55.jpg",
      ],
    },
  },
]

const EventsScroll = ({ events }: { events: Event[] | null }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(2)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollPrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className="mx-4 mt-14 max-w-5xl xl:mx-auto xl:mt-24">
      <h1 className="mx-auto mb-5 max-w-xl text-center font-acrom text-3xl/tight font-medium md:mb-10 md:text-5xl">
        <span className="font-kurale font-normal text-[#2E4F6C]">
          Ближайшие встречи
        </span>{" "}
      </h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 9000,
          }),
        ]}
        setApi={setApi}
        className="mx-auto w-full max-w-6xl"
        opts={{
          align: "start", // Выравнивание по началу
          slidesToScroll: 1,
        }}
      >
        <CarouselContent className="-ml-2 mr-2 flex items-center py-4">
          {events
            ? events.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={clx("basis-1 pl-1 sm:basis-2/3 lg:basis-5/6")}
                >
                  <Link href={`/events/${item.id}`}>
                    <div
                      className={clx(
                        "flex aspect-square items-center justify-center rounded-3xl bg-cover p-6 sm:aspect-[20/9]",
                        "cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md"
                      )}
                      style={{
                        backgroundImage:
                          "url(" +
                          (item.image_urls.urls[0] ??
                            "/images/creationaromo.png") +
                          ")",
                      }}
                    >
                      <div className="mb-4 mt-auto flex w-full flex-col sm:mx-10 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex flex-col">
                          <span className="font-acrom text-3xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:underline">
                            {item.title}
                          </span>
                          <span className="text-lg text-white drop-shadow-md">
                            {item.subtitle}
                          </span>
                        </div>
                        <button className="rounded-3xl bg-[#B4C3D2] px-4 py-3 font-literature text-base font-semibold uppercase text-white outline-1 hover:outline group-hover:shadow-md">
                          <span className="drop-shadow-lg"> Подробнее</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))
            : data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={clx("basis-2/4 pl-1 md:basis-1/2 lg:basis-5/6")}
                >
                  <div
                    className={clx(
                      "flex aspect-[20/9] items-center justify-center rounded-3xl bg-contain object-cover p-6",
                      "cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md"
                    )}
                    style={{
                      backgroundImage:
                        "url(" + (item.image_urls.urls[0] ?? "") + ")",
                    }}
                  >
                    <div className="mx-10 mb-4 mt-auto flex w-full items-end justify-between">
                      <div className="flex flex-col">
                        <span className="font-acrom text-3xl font-semibold text-white drop-shadow-lg transition-all duration-300 group-hover:underline">
                          Нейростатус
                        </span>
                        <span className="text-lg text-white drop-shadow-md">
                          Описание мастер-класса по аромочетотам
                        </span>
                      </div>
                      <button className="rounded-3xl bg-[#B4C3D2] px-4 py-3 font-literature text-base font-semibold uppercase text-white outline-1 hover:outline group-hover:shadow-md">
                        <span className="drop-shadow-lg"> Подробнее</span>
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <button
          onClick={scrollPrev}
          className="group absolute -left-2 top-1/2 mx-2 hidden h-12 w-12 -translate-x-1/2 rounded-full bg-black p-2 pl-1 transition-all hover:scale-105 md:block"
        >
          <ChevronLeftIcon className="h-full w-full text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="group absolute -right-12 top-1/2 mx-2 hidden h-12 w-12 -translate-x-1/2 rounded-full bg-black p-2 pr-1 transition-all hover:scale-105 md:block"
        >
          <ChevronRightIcon className="h-full w-full text-white" />
        </button>
        <div className="mt-2 flex justify-center gap-4 md:mt-8 md:hidden">
          <div className="rounded-full bg-gray-200 py-2">
            <button
              onClick={scrollPrev}
              className="group static mx-2 transform-none rounded-full bg-white p-2 transition-colors hover:bg-black"
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
              className="group static mx-2 transform-none rounded-full bg-white p-2 transition-colors hover:bg-black"
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

export default EventsScroll
