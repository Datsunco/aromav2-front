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
        className="mx-auto w-full max-w-6xl"
        opts={{
          align: "center", // Выравнивание по началу
          slidesToScroll: 1,
        }}
      >
        <div className="flex ">
          <h1 className="text-5xl font-medium font-acrom max-w-xl mb-10 text-center mx-auto">
            Отзывы клиентов
          </h1>
          <div className="relative flex w-[1px] mr-20 mb-8">
            <CarouselPrevious className="w-10 h-10 flex" />
            <CarouselNext className="w-10 h-10 flex" />
          </div>
        </div>
        <CarouselContent className="-ml-2 mr-2 flex items-center py-4">
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className={clx("pl-1 basis-4/6")}>
              <div
                className={clx(
                  "rounded-3xl bg-[#666666]/60 flex items-center bg-contain justify-center aspect-[20/9]  px-0",
                  "cursor-pointer transition-all duration-200 hover:scale-[101%] hover:shadow-md"
                )}
                // style={{ backgroundImage: item.img }}
              >
                <div className="flex p-0 h-full py-4 px-4">
                  <img
                    src="/images/creationaromo.png"
                    className=" rounded-3xl aspect-square"
                  />
                  <div className="w-full mt-auto mb-4 mx-10 flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="font-acrom text-3xl mb-4 font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                        Чей-то отзыв
                      </span>
                      <span className="text-lg text-white drop-shadow-md">
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
