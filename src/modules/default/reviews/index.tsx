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

export type Testimonial = {
  id: number
  name: string
  role: string
  previousRole?: string
  text: string
  image: string
}

const myTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Клиент",
    role: "",
    text: `Для меня встреча по женским архетипам была очень информативна. Даже более того, она оказала на меня влияние в обход сознания - достучалась до Души. Это интересно как информация в совокупности с работой масел глубже проникает внутрь. Это выглядит как волшебство.
Я мысленно проводила архетипы через свою жизнь - как я действовала в разных ситуациях, какая женщина во мне "говорила". В некоторые моменты подступали слезы - настолько проникновенно это было.
Считаю, что данный мастер-класс будет полезен всем женщинам, которые хотят лучше себя узнать и гармонично проявляться в этом мире.
Жанна, благодарю!❤️`,
    image: "/images/women-meets/archytype/girls.jpg",
  },
  {
    id: 2,
    name: "Клиент",
    role: "",
    text: "Мне очень понравилась как прошла встреча. Это прекрасная возможность получше узнать себя, отключить мозг, почувствовать и увидеть всю правду. Очень интересно, информативно, позитивно. Настраивает на работу с собой, помогает понять как  лучше взаимодействовать с архетипами.",
    image: "/images/women-meets/archytype/girls.jpg",
  },
  {
    id: 3,
    name: "Клиент",
    role: "",
    text: "Жанна, благодарю за встречу! Время пролетело незаметно, но при этом очень продуктивно! Было тепло и хорошо. Много новых знаний и понимания пришло. Ушла наполненной, безмерно этому счастлива❤️",
    image: "/images/women-meets/archytype/girls.jpg",
  },
  {
    id: 4,
    name: "Клиент",
    role: "",
    text: "Жанна, благодарю за встречу! Время пролетело незаметно, но при этом очень продуктивно! Было тепло и хорошо. Много новых знаний и понимания пришло. Ушла наполненной, безмерно этому счастлива❤️",
    image: "/images/women-meets/archytype/girls.jpg",
  },
  // ... другие отзывы
]

interface ReviewCarouselProps {
  testimonials?: Testimonial[]
  title?: string
  autoplayDelay?: number
}

export default function ReviewCarousel({
  testimonials = myTestimonials,
  title = "Отзывы клиентов",
  autoplayDelay = 3000,
}: ReviewCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="mx-auto mt-20">
      <Carousel
        plugins={[
          Autoplay({
            delay: autoplayDelay,
          }),
        ]}
        setApi={setApi}
        className="mx-auto w-full"
        opts={{
          align: "center",
          slidesToScroll: 1,
          loop: true,
          skipSnaps: true,
        }}
      >
        <div className="max-w-5xl flex mx-auto">
          <h1 className="text-5xl font-medium font-acrom max-w-xl mb-10 text-center mx-auto">
            {title}
          </h1>
          <div className="hidden md:flex relative w-[1px] mr-20 mb-8">
            <CarouselPrevious className="w-10 h-10 flex" />
            <CarouselNext className="w-10 h-10 flex" />
          </div>
        </div>
        <CarouselContent className="-ml-2 mr-2 flex items-center pl-1 py-4 min-h-[550px] md:min-h-[530px] lg:min-h-[430px]">
          {testimonials.map((item, index) => (
            <CarouselItem key={item.id} className="custom-review pl-1">
              <div
                className={clx(
                  "rounded-3xl bg-[#666666]/60 flex items-center bg-contain justify-center px-0",
                  "cursor-pointer transition-all duration-500",
                  index === current
                    ? "h-[500px] md:h-[480px] lg:h-[380px] scale-105 z-10"
                    : "h-[420px] md:h-[420px] lg:h-[320px] scale-95 opacity-80"
                )}
              >
                <div className="flex flex-col items-center md:flex-row p-0 h-full py-4 px-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-3xl max-h-52"
                  />
                  <div className="w-full mt-auto mx-auto md:mx-10 flex justify-between items-end">
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-acrom text-3xl font-semibold text-white drop-shadow-lg group-hover:underline transition-all duration-300">
                        {item.name}
                      </span>
                      <div className="">
                        <p className="text-lg text-white drop-shadow-md">
                          {item.role}
                        </p>
                        {item.previousRole && (
                          <p className="text-sm text-white/80 drop-shadow-md">
                            Бывший: {item.previousRole}
                          </p>
                        )}
                      </div>
                      <span className="text-lg text-white drop-shadow-md">
                        {item.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
