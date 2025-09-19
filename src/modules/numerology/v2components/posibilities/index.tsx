import React from "react"

// Типизация для данных карточки для надежности
type Capability = {
  title: string
  imageUrl: string
}

// Данные для карточек вынесены в массив для чистоты кода
const capabilitiesData: Capability[] = [
  {
    title: "Матрица совместимости",
    imageUrl: "/images/aroma-date/pair.png", // <- Укажите свой путь
  },
  {
    title: "Матрица судьбы",
    imageUrl: "/images/numerology/matrix.jpg", // <- Укажите свой путь
  },
  {
    title: "Прогноз на год",
    imageUrl: "/images/numerology/year.jpg", // <- Укажите свой путь
  },
  {
    title: "Профориентация",
    imageUrl: "/images/numerology/prof.png", // <- Укажите свой путь
  },
]

const CapabilityCard: React.FC<Capability> = ({ title, imageUrl }) => {
  return (
    <a
      href="#"
      className="group relative block overflow-hidden rounded-[30px] shadow-lg"
    >
      {/* Контейнер для соотношения сторон 1:1 (квадрат) */}
      <div className="aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Градиент для читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Текст */}
      <h3 className="absolute bottom-4 left-4 font-jost text-base font-medium text-white md:bottom-6 md:left-6 md:text-2xl">
        {title}
      </h3>
    </a>
  )
}

// Основной компонент секции
const CapabilitiesSection = () => {
  return (
    <section className="bg-[#F8F5F2] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-kurale text-4xl text-[#2E4F6C] md:text-5xl xl:text-6xl">
          Узнайте свои возможности
        </h2>

        {/* Адаптивная сетка для карточек */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-8">
          {capabilitiesData.map((capability) => (
            <CapabilityCard
              key={capability.title}
              title={capability.title}
              imageUrl={capability.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
