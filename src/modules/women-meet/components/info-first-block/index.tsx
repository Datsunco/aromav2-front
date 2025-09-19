import Image from "next/image"
import React from "react"

const InfoBlock = () => {
  return (
    <section className="w-full  bg-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left column - Text content */}
        <div className="w-full md:w-1/3 space-y-6">
          <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
            <span className="font-literature text-3xl text-blue-400">
            Ароматерапия
            </span>{" "}
            — метод оздоровления человека
          </h1>
          <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
            Вы удивитесь, насколько точно Ваш нос расскажет о Вашем состоянии,
            об истинных желаниях, целях, потребностях, и укажет Вам путь для
            поддержки и помощи. Через диагностику Вы выберете те ароматы, а
            значит и биохимические молекулы, которые нужны именно Вам и именно
            сейчас для решения задач.
          </p>
        </div>

        {/* Right column - Image */}
        <div className="w-full md:w-2/3 h-full">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[400px] rounded-[25px] overflow-hidden">
            <Image
              src="/images/photo.png"
              alt="Data scientist presenting to an audience"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
