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
    <div className="max-w-5xl   mt-14 xl:mt-24 mx-4 xl:mx-auto">
      <h1 className="text-3xl/tight md:text-5xl font-medium font-acrom max-w-xl mb-5 md:mb-10 text-center mx-auto">
        <span className="font-literature text-[#2E4F6C]  md:text-4xl font-bold">
          Мероприятия
        </span>{" "}
        <br></br> и анонсы событий
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
                  className={clx("pl-1 basis-1 sm:basis-2/3 lg:basis-5/6")}
                >
                  <Link href={`/events/${item.id}`}>
                    <div
                      className={clx(
                        "rounded-3xl  flex items-center bg-cover justify-center p-6 aspect-square sm:aspect-[20/9] ",
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
                      <div className="w-full mt-auto mb-4 sm:mx-10 flex flex-col sm:flex-row sm:justify-between sm:items-end">
                        <div className="flex flex-col">
                          <span className="font-acrom text-3xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                            {item.title}
                          </span>
                          <span className="text-lg text-white drop-shadow-md">
                            {item.subtitle}
                          </span>
                        </div>
                        <button className="bg-[#B4C3D2] hover:outline outline-1 px-4 py-3 text-base text-white uppercase font-literature font-semibold rounded-3xl group-hover:shadow-md ">
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
                  className={clx("pl-1 basis-2/4 md:basis-1/2 lg:basis-5/6")}
                >
                  <div
                    className={clx(
                      "rounded-3xl object-cover flex items-center bg-contain justify-center p-6 aspect-[20/9]",
                      "cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md"
                    )}
                    style={{
                      backgroundImage:
                        "url(" + (item.image_urls.urls[0] ?? "") + ")",
                    }}
                  >
                    <div className="w-full mt-auto mb-4 mx-10 flex justify-between items-end">
                      <div className="flex flex-col">
                        <span className="font-acrom text-3xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                          Нейростатус
                        </span>
                        <span className="text-lg text-white drop-shadow-md">
                          Описание мастер-класса по аромочетотам
                        </span>
                      </div>
                      <button className="bg-[#B4C3D2] hover:outline outline-1 px-4 py-3 text-base text-white uppercase font-literature font-semibold rounded-3xl group-hover:shadow-md ">
                        <span className="drop-shadow-lg"> Подробнее</span>
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <button
          onClick={scrollPrev}
          className="hidden md:block w-12 h-12 absolute pl-1 -left-2 top-1/2  -translate-x-1/2 group mx-2 p-2 rounded-full bg-black hover:scale-105 transition-all"
        >
          <ChevronLeftIcon className="w-full h-full text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:block w-12 h-12 absolute pr-1 -right-12 top-1/2  -translate-x-1/2 group mx-2 p-2 rounded-full bg-black hover:scale-105 transition-all"
        >
          <ChevronRightIcon className="w-full h-full text-white" />
        </button>
        <div className="flex md:hidden justify-center gap-4 mt-2 md:mt-8">
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

export default EventsScroll
