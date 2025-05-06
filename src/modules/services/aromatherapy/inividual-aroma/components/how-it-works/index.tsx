"use client"

import { useState } from "react"
import Image from "next/image"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function HowItWorksSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    "/images/photo.png",
    "/images/photo.png",
    "/images/photo.png",
    "/images/photo.png",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h1 className="text-5xl font-bold font-acrom mb-8">Как проходит сеанс</h1>
      <div className="flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 space-y-4 mb-0 mt-auto">
          <p className="text-lg text-gray-700 font-acrom">
            Сеанс ароматерапии начинается с короткого знакомства и обсуждения
            ваших целей и самочувствия. Затем проводится ароматестирование — вы
            вдыхаете различные эфирные масла и отмечаете свои ощущения. На
            основе ваших реакций я подбираю индивидуальные ароматы и составляю
            персональную программу. В завершение вы получаете рекомендации по
            использованию масел дома.
          </p>
        </div>
        <div className="relative w-full md:w-1/2">
          <div className="relative aspect-square md:aspect-[5/3] rounded-xl overflow-hidden">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt="Процесс ароматерапии"
              fill
              className="object-cover transition-opacity duration-300 rounded-3xl"
            />
          </div>

          <div className="absolute w-full md:w-1/2 aspect-[5/3] left-1/2 -translate-x-1/2 - translate-y-3 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentImage === index ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Перейти к изображению ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
            aria-label="Предыдущее изображение"
          >
            <ChevronDown className="w-6 h-6 rotate-90" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-md"
            aria-label="Следующее изображение"
          >
            <ChevronDown className="w-6 h-6 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  )
}
