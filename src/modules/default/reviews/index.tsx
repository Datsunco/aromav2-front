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

    return () => api.off("select", onSelect)
  }, [api])

  return (
    <div className="mx-auto mt-20 overflow-x-clip">
      <Carousel
        plugins={[Autoplay({ delay: autoplayDelay, stopOnInteraction: true })]}
        setApi={setApi}
        className="mx-auto w-full"
        opts={{ align: "center", slidesToScroll: 1, loop: true }}
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
                  "relative transition-all duration-500  opacity-70",
                  index === current
                    ? "h-[500px] md:h-[480px] lg:h-[380px] scale-105"
                    : "h-[420px] md:h-[420px] lg:h-[320px] scale-95"
                )}
              >
                <Image
                  src="/images/home/benefits/lavanda.png"
                  alt="lavanda"
                  width={272}
                  height={404}
                  className="absolute bottom-0 -right-4 w-[200px] h-auto md:w-[272px] z-0 pointer-events-none"
                />

                {/* ✅ ИЗМЕНЕНИЕ ЗДЕСЬ: Заменяем сплошной цвет на градиент для правильной прозрачности */}
                <div
                  className={clx(
                    "absolute inset-0 z-10 flex flex-col rounded-[40px] border border-white/20 p-3 text-white shadow-[inset_8px_8px_20px_0_#2437E21A] backdrop-blur-lg cursor-pointer",
                    // Заменяем `bg-[#E3E7F3]/[43]` на градиент
                    "bg-gradient-to-b from-white/40 to-white/10"
                  )}
                >
                  <div className="flex flex-col items-center md:flex-row p-0 h-full py-4 px-4 overflow-hidden">
                    <div className="w-full mt-auto mx-auto md:mx-10 flex justify-between items-end">
                      <div className="flex flex-col overflow-hidden">
                        {/* Твоя верстка текста остается без изменений, но я поменял цвет для читаемости на новом фоне */}
                        <span className="font-acrom text-3xl font-semibold text-[#2E4F6C] drop-shadow-lg transition-all duration-300">
                          {item.name}
                        </span>
                        <span className="text-lg text-[#191919] drop-shadow-md">
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
