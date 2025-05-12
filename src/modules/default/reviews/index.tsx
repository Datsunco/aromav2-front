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
import { type CarouselApi } from "components/carousel"
import { clx } from "@medusajs/ui"

type Testimonial = {
  id: number
  name: string
  role: string
  previousRole?: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алексей",
    role: "Помощник бухгалтера",
    previousRole: "Управляющий в салоне",
    text: "Я всегда тяготел к цифрам. Как-то ко мне обратилась подруга за помощью: она начала вести бизнес и искала человека, который бы вёл хоть какую-то бухгалтерию. Мне нужна была первоначальная практика, и я согласился. Потом пошёл учиться в Skillbox и параллельно — работать помощником бухгалтера.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Михаил",
    role: "Бухгалтер",
    previousRole: "Студент",
    text: "Чтобы закрепить теорию и подкрепить её практикой, примерно в середине курса я решил устроиться на работу. Я, видимо, счастливчик, потому что на работу меня взяли уже после первого собеседования.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Елена",
    role: "Главный бухгалтер",
    text: "Я начала проверять базы данных, хорошо разбираться в системе налогообложения и работать в программе «1С:Бухгалтерия 8». Благодаря этому я добилась повышения и стала главным бухгалтером.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Елена",
    role: "Главный бухгалтер",
    text: "Я начала проверять базы данных, хорошо разбираться в системе налогообложения и работать в программе «1С:Бухгалтерия 8». Благодаря этому я добилась повышения и стала главным бухгалтером.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Елена",
    role: "Главный бухгалтер",
    text: "Я начала проверять базы данных, хорошо разбираться в системе налогообложения и работать в программе «1С:Бухгалтерия 8». Благодаря этому я добилась повышения и стала главным бухгалтером.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ReviewCarousel() {
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

  return (
    <div className="mx-auto mt-20">
      <Carousel
        plugins={
          [
            //   Autoplay({
            //     delay: 3000,
            //   }),
          ]
        }
        setApi={setApi}
        className="mx-auto w-full"
        opts={{
          align: "center", // Выравнивание по началу
          slidesToScroll: 1,
          loop: true,
          skipSnaps: true,
        }}
      >
        <div className="max-w-5xl flex mx-auto">
          <h1 className="text-5xl font-medium font-acrom max-w-xl mb-10 text-center mx-auto">
            Отзывы клиентов
          </h1>
          <div className="hidden md:flex relative w-[1px] mr-20 mb-8">
            <CarouselPrevious className="w-10 h-10 flex" />
            <CarouselNext className="w-10 h-10 flex" />
          </div>
        </div>
        <CarouselContent className="-ml-2 mr-2 flex items-center pl-1 py-4 min-h-[550px] md:min-h-[530px] lg:min-h-[430px]">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className=" custom-review pl-1"
              // style={{ flexBasis: "65.333333%" }}
            >
              <div
                className={clx(
                  "rounded-3xl bg-[#666666]/60 flex items-center bg-contain justify-center  px-0",
                  "cursor-pointer transition-all duration-500",
                  index === current
                    ? "h-[500px] md:h-[480px] lg:h-[380px] scale-105 z-10"
                    : "h-[420px] md:h-[420px] lg:h-[320px] scale-95 opacity-80"
                )}
                // style={{ backgroundImage: item.img }}
              >
                <div className="flex flex-col items-center md:flex-row p-0 h-full py-4 px-4 overflow-hidden">
                  <img
                    src="/images/creationaromo.png"
                    className="rounded-3xl max-h-52"
                  />
                  <div className="w-full mt-auto mx-auto mb-4 md:mx-10 flex justify-between items-end">
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-acrom text-3xl mb-4 font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                        Чей-то отзыв
                      </span>
                      <span className="text-lg text-white drop-shadow-md ">
                        Очень долгая история о том как комуто очень понравилось.
                        Очень долгая история о том как комуто очень понравилось.
                        Очень долгая история о том как комуто очень понравилось.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="w-10 h-10 absolute -left-5" />
        <CarouselNext className="w-10 h-10 absolute -right-5" /> */}
      </Carousel>
    </div>
  )
}
