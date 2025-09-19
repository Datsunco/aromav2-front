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
    <section className="w-full">
      <div className="mx-auto flex flex-col items-center gap-8 px-8 pb-12 md:flex-row md:items-start md:gap-16 md:pb-12">
        {/* Left column - Text content */}
        <div className="my-auto w-full space-y-6 px-4 md:w-1/3 md:px-0">
          {children}
        </div>

        {/* Right column - Image or Carousel */}
        <div className="h-full w-full md:w-2/3">
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
                    <div className="relative h-[400px] w-full overflow-hidden rounded-[30px] md:h-[500px] md:rounded-[60px] lg:h-[400px]">
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
              <div className="mt-4 flex justify-end gap-4">
                <CarouselPrevious className="absolute -left-2 h-10 w-10" />
                <CarouselNext className="absolute -right-2 h-10 w-10" />
              </div>
            </Carousel>
          ) : (
            <div className="relative h-[400px] w-full overflow-hidden rounded-[25px] md:h-[500px] lg:h-[400px]">
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
