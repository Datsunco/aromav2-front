"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/carousel"
import { type CarouselApi } from "components/carousel"

interface InfoBlockProps {
  children: React.ReactNode
  imgSrc: StaticImageData | string | (StaticImageData | string)[]
}

const InfoBlock: React.FC<InfoBlockProps> = ({ children, imgSrc }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const isCarousel = Array.isArray(imgSrc) && imgSrc.length > 1

  React.useEffect(() => {
    if (!api || !isCarousel) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api, isCarousel])

  return (
    <section className="w-full bg-white">
      <div className="px-4 mx-auto pb-12 md:pb-24 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left column - Text content */}
        <div className="w-full px-4 md:px-0 md:w-1/3 space-y-6">{children}</div>

        {/* Right column - Image or Carousel */}
        <div className="w-full md:w-2/3 h-full">
          {isCarousel ? (
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                slidesToScroll: 1,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {imgSrc.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-[25px] overflow-hidden">
                      <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-4 mt-4">
                <CarouselPrevious className="w-10 h-10 absolute -left-2" />
                <CarouselNext className="w-10 h-10 absolute -right-2" />
              </div>
            </Carousel>
          ) : (
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-[25px] overflow-hidden">
              <Image
                src={Array.isArray(imgSrc) ? imgSrc[0] : imgSrc}
                alt="Content image"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
