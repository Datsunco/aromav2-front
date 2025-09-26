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
import Image from "next/image"

export type Testimonial = {
  id: number
  name: string
  text: string
}

const myTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алена Павлова",
    text: "Я в восторге от нумерологического разбора! Мастер объяснила всё так четко и понятно, будто заглянула прямо в мою душу...",
  },
  {
    id: 2,
    name: "Екатерина С.",
    text: "Теперь я лучше понимаю свои сильные стороны и точки роста — это невероятно вдохновляет! Очень благодарна за тёплую атмосферу...",
  },
  {
    id: 3,
    name: "Мария Иванова",
    text: "Обязательно приду ещё и советую всем, кто хочет разобраться в себе через числа! Невероятный опыт.",
  },
  {
    id: 4,
    name: "Ольга В.",
    text: "Очень глубокий анализ, который помог мне взглянуть на многие вещи под другим углом. Спасибо за профессионализм!",
  },
]

interface ReviewCarouselProps {
  testimonials?: Testimonial[]
  title?: string
  autoplayDelay?: number
}

export default function ReviewCarousel({
  testimonials = myTestimonials,
  title = "Отзывы клиентов",
  autoplayDelay = 4000,
}: ReviewCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="mx-auto mt-20 overflow-x-clip">
      <Carousel
        plugins={[Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]}
        setApi={setApi}
        className="mx-auto w-full"
        opts={{ align: "center", slidesToScroll: 1, loop: true }}
      >
        <div className="mx-auto flex max-w-5xl">
          <h1 className="mx-auto max-w-xl text-center font-acrom text-5xl font-medium">
            {title}
          </h1>
          <div className="relative mb-8 mr-20 hidden w-[1px] md:flex">
            <CarouselPrevious className="flex h-10 w-10" />
            <CarouselNext className="flex h-10 w-10" />
          </div>
        </div>

        <CarouselContent className="-ml-2 mr-2 flex min-h-[550px] items-center py-16 pl-1 md:min-h-[530px] lg:min-h-[430px]">
          {testimonials.map((item, index) => (
            <CarouselItem key={item.id} className="custom-review pl-1">
              <div
                className={clx(
                  "relative opacity-90 transition-all duration-500",
                  index === current
                    ? "h-[500px] scale-105 md:h-[480px] lg:h-[380px]"
                    : "h-[420px] scale-95 md:h-[420px] lg:h-[320px]"
                )}
              >
                <Image
                  src="/images/home/benefits/lavanda.png"
                  alt="lavanda"
                  width={272}
                  height={404}
                  className="pointer-events-none absolute -right-14 -top-20 z-0 h-auto w-[200px] md:-right-14 md:-top-24 md:w-[272px]"
                />

                <Image
                  src="/images/home/benefits/lavanda.png"
                  alt="lavanda"
                  width={272}
                  height={404}
                  className="pointer-events-none absolute -bottom-20 -left-14 z-0 h-auto w-[200px] -rotate-12 -scale-x-100 transform md:-bottom-28 md:-left-28 md:w-[272px]"
                />

                {/* ✅ ИЗМЕНЕНИЕ ЗДЕСЬ: Заменяем сплошной цвет на градиент для правильной прозрачности */}
                <div
                  className={clx(
                    "absolute inset-0 z-10 flex cursor-pointer flex-col rounded-[40px] border border-white/20 p-3 text-white shadow-[inset_8px_8px_20px_0_#2437E21A] backdrop-blur-[2px]",
                    // Заменяем `bg-[#E3E7F3]/[43]` на градиент
                    "bg-gradient-to-b from-white/40 to-white/10"
                  )}
                >
                  <div className="flex h-full flex-col items-center overflow-hidden p-0 px-4 py-4 md:flex-row">
                    <div className="mx-auto mt-auto flex w-full items-end justify-between md:mx-10">
                      <div className="flex flex-col overflow-hidden">
                        {/* Твоя верстка текста остается без изменений, но я поменял цвет для читаемости на новом фоне */}
                        <span className="font-acrom text-3xl font-semibold text-[#2E4F6C] drop-shadow-lg transition-all duration-300">
                          {item.name}
                        </span>
                        <span className="text-sm text-[#191919] drop-shadow-md md:text-base">
                          {item.text}
                        </span>
                      </div>
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
