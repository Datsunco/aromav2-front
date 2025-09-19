import React from "react"

// Для удобства можно вынести данные в объект, если они будут меняться
const holidayData = {
  title: "Подарите себе и подругам уникальный праздник",
  description:
    "Мы создали уютное пространство, где каждая девушка может отдохнуть от городской суеты, погрузиться в атмосферу творчества и гармонии",
  mainImage: {
    src: "/images/girls/girlsinfield.png", // Укажите свой путь к фото
    alt: "Девушки в подсолнухах",
  },
  decorativeImage: {
    src: "/images/lavanda2.png", // Укажите свой путь к лаванде
    alt: "Ветка лаванды",
  },
}

const HolidaySection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <h2 className="font-noemal text-center font-kurale text-3xl text-[#2E4F6C] md:text-4xl xl:text-5xl">
          {holidayData.title}
        </h2>

        {/* Основной контент */}
        <div className="mt-12 flex items-center gap-12 lg:mt-20 lg:gap-16">
          {/* Левый блок: Текст и декорация */}
          <div className="relative order-2 lg:order-1">
            <img
              src={holidayData.decorativeImage.src}
              alt={holidayData.decorativeImage.alt}
              className="absolute -left-8 -top-12 z-0 w-24 -rotate-[28deg] -scale-x-100 transform md:-left-20 md:-top-28 md:h-[340px] md:w-[225px] xl:-left-20 xl:-top-28 xl:h-[450px] xl:w-[300px]"
            />
            <div className="relative flex flex-col rounded-[30px] bg-gradient-to-b from-white/50 to-white/10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:flex-row md:gap-14 xl:gap-20">
              <p className="py-8 pl-6 font-jost text-lg leading-relaxed text-[#2E4F6C] sm:text-xl md:py-10 md:pl-6 xl:py-20 xl:pl-14 xl:text-[28px]">
                Мы создали уютное пространство, где{" "}
                <strong className="font-semibold">каждая девушка</strong> может
                отдохнуть от городской суеты, погрузиться в атмосферу творчества
                и гармонии
              </p>

              {/* Правый блок: Изображение */}
              <div className="relative order-1 min-h-full w-full lg:order-2">
                {/* Рамка с отступом */}
                {/* <div className="rounded-[30px] "> */}
                {/* Контейнер для изображения с синим оттенком */}
                <div className="relative h-full overflow-hidden rounded-[22px] xl:min-w-[450px]">
                  <img
                    src={holidayData.mainImage.src}
                    alt={holidayData.mainImage.alt}
                    className="h-full w-full object-cover"
                  />
                  {/* Синий оверлей для стилизации */}
                  <div className="absolute inset-0 bg-blue-300/30 mix-blend-multiply"></div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HolidaySection
