import React from "react"

// Данные для компонента для легкой кастомизации
const birthdayData = {
  title: "Уже 4 года я отмечаю свой день рождения так как Я хочу!",
  paragraph:
    "Я собираю подружек на разные мероприятия. Придумываю программу, ищу варианты. День проходит всегда незабываемо. И все его уже ждут, предвкушая что-то интересное.",
  mainImage: {
    src: "/images/mom.jpg", // <- Замените на свой путь
    alt: "Женщина за столом с набором аромамасел",
  },
  lavenderImage: {
    src: "/images/lavanda2.png", // <- Замените на свой путь
    alt: "Ветка лаванды",
  },
}

const AboutSection = () => {
  return (
    <section className="bg-[#F8F5F2] py-16 sm:py-24">
      {/* Контейнер для ограничения ширины и центрирования контента */}
      <div className="relative mx-auto max-w-5xl px-4">
        {/* Декоративная ветка лаванды */}
        <img
          src={birthdayData.lavenderImage.src}
          alt={birthdayData.lavenderImage.alt}
          className="absolute -right-8 -top-8 z-10 w-24 sm:-right-4 sm:-top-12 sm:w-28 lg:-top-16 lg:right-0 lg:w-36"
        />

        {/* Заголовок */}
        <h2 className="relative z-0 text-center font-kurale text-4xl text-[#2E4F6C] sm:text-5xl lg:text-6xl">
          {birthdayData.title}
        </h2>

        {/* Основной контент: текст + фото */}
        <div className="mt-12 grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:mt-16 lg:gap-16">
          {/* Блок с текстом */}
          <div className="text-center md:text-left">
            <p className="font-jost text-lg leading-relaxed text-[#2E4F6C] sm:text-xl">
              {birthdayData.paragraph}
            </p>
          </div>

          {/* Блок с фотографией */}
          <div className="w-full">
            <div className="overflow-hidden rounded-[30px] shadow-lg">
              <img
                src={birthdayData.mainImage.src}
                alt={birthdayData.mainImage.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
