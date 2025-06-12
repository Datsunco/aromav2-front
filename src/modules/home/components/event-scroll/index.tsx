"use client"

import React from "react"
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

  React.useEffect(() => {
    console.log(events)
  }, [events])

  return (
    <div className="max-w-5xl mx-auto mt-40">
      <h1 className="text-5xl font-medium font-acrom max-w-xl mb-10 text-center mx-auto">
        <span className="font-literature text-4xl font-bold">Мероприятия</span>{" "}
        <br></br> и анонсы событий
      </h1>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
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
                  className={clx("pl-1  md:basis-1/2 lg:basis-5/6")}
                >
                  <Link href={`/events/${item.id}`}>
                    <div
                      className={clx(
                        "rounded-3xl  flex items-center bg-contain justify-center p-6 aspect-[20/9]",
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
                      <div className="w-full mt-auto mb-4 mx-10 flex justify-between items-end">
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
                  className={clx("pl-1  md:basis-1/2 lg:basis-5/6")}
                >
                  <div
                    className={clx(
                      "rounded-3xl  flex items-center bg-contain justify-center p-6 aspect-[20/9]",
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
        <CarouselPrevious className="hidden md:block w-10 h-10 absolute  -left-5" />
        <CarouselNext className="hidden md:block w-10 h-10 absolute -right-5" />
      </Carousel>
    </div>
  )
}

export default EventsScroll
