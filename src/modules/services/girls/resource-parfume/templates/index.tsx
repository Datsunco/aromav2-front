"use client"
import Header from "@modules/default/header"
import Banner from "@modules/default/service-banner"
import ReviewCarousel from "@modules/default/reviews"
import MultiAccordion from "@modules/default/service-program"
import InfoBlock from "@modules/default/info-first-block"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"

export const aromaSections = [
  {
    id: "process",
    badge: "Как проходит сеанс",
    items: [
      {
        id: "step-1",
        title: "1. Погружение в мир ароматов",
        content: (
          <p>
            Мы будем вдыхать различные эфирные масла, прислушиваясь к своим
            ощущениям. Ваше обоняние подскажет, какие ароматы вам нужны для
            восстановления энергии.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Ароматерапевтический эффект",
        content: (
          <p>
            Взаимодействие с эфирными маслами сразу запустит в вашем организме
            процесс самовосстановления и наполнения энергией.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Создание ресурсного аромата",
        content: (
          <p>
            Вы составите индивидуальную композицию из выбранных масел, которая
            будет поддерживать ваше состояние в течение дня.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Оформление аромата",
        content: (
          <p>
            Ваш ресурсный аромат будет помещен в элегантный флакон, который вы
            заберете с собой.
          </p>
        ),
      },
    ],
  },
  {
    id: "results",
    badge: "Что вы получите",
    items: [
      {
        id: "result-1",
        title: "Личный ресурсный аромат",
        content: (
          <p>
            Уникальная композиция эфирных масел, созданная специально для вашего
            энергетического состояния.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "result-2",
        title: "Эффект через неделю",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Повышение бодрости и энергии</li>
            <li>Увеличение продуктивности</li>
            <li>Комплименты от окружающих</li>
          </ul>
        ),
      },
      {
        id: "result-3",
        title: "Готовые материалы",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Флакон с вашим ароматом</li>
            <li>Рекомендации по использованию</li>
          </ul>
        ),
      },
      {
        id: "result-4",
        title: "Оздоровление организма",
        content: (
          <p>
            Ароматерапевтический эффект от взаимодействия с натуральными
            эфирными маслами.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Натуральные эфирные масла",
    description: "Только качественные компоненты для вашего здоровья",
  },
  {
    title: "Быстрый эффект",
    description: "Результаты заметны уже через неделю применения",
  },
  {
    title: "Индивидуальный подход",
    description: "Аромат создается именно под ваши потребности",
  },
  {
    title: "Готовый результат",
    description: "Вы унесете с собой флакон с вашим ресурсным ароматом",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/event/resource-aroma/aroma-dress.jpg",
    title: "Исцеляющая сила ароматов",
    description:
      "Откройте для себя терапевтический эффект эфирных масел и создайте аромат, который будет поддерживать вашу энергию.",
  },
  {
    img: "/images/event/resource-aroma/1.jpg",
    title: "Натуральные компоненты",
    description:
      "Мы используем только натуральные эфирные масла высшего качества, которые благотворно влияют на организм.",
  },
  {
    img: "/images/event/resource-aroma/aroma-process.jpg",
    title: "Процесс создания",
    description:
      "Создайте аромат, который будет наполнять вас энергией и радостью каждый день.",
  },
]

const factsBlockData = [
  {
    title: "Для кого это?",
    description:
      "Для тех, кто чувствует упадок сил, хочет повысить свою энергию и продуктивность, или просто любит натуральные ароматы.",
  },
  {
    title: "Формат мероприятия",
    description:
      "Сеанс продолжительностью 1,5 часа в группе от 3 до 5 человек для максимального терапевтического эффекта.",
  },
  {
    title: "Почему стоит попробовать?",
    description:
      "Это простой и приятный способ наполнить себя энергией и создать персональный инструмент для поддержания ресурсного состояния.",
  },
]

export default function ResourceAromaTemplate() {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto">
        <Header />
      </div>

      {/* Главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/aroma-workshop.jpg"
            title={"Создание ресурсного аромата"}
            bgColor="#F0E8FF"
            features={bannerFeatures}
          />
        </div>

        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Создайте аромат, <br className="sm:hidden" />
            который наполнит вас энергией
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>

        <InfoBlock
          imgSrc={[
            "/images/event/resource-aroma/aroma-dress.jpg",
            "/images/event/resource-aroma/aroma-dress.jpg",
          ]}
        >
          <>
            <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
              <span className="font-literature text-3xl text-purple-500">
                Ароматический сеанс -
              </span>{" "}
              ваш путь к энергии и бодрости
            </h1>
            <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
              За 1,5 часа вы создадите авторский ресурсный аромат из натуральных
              эфирных масел, который будет поддерживать ваше состояние в течение
              дня.
            </p>
          </>
        </InfoBlock>

        <FactsBlock title="Кратко про сеанс" features={factsBlockData} />
      </section>

      <div className="px-4">
        <MultiAccordion
          title="Процесс создания ресурсного аромата"
          blocks={aromaSections}
          className="mt-40"
        />
      </div>

      {/* Блок с ценами */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Групповой сеанс */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Групповой сеанс</h3>
            <p className="mb-6">
              От 3 до 5 человек. 1,5 часа погружения в мир ароматов. Идеально
              для восстановления энергии в приятной компании.
            </p>
            <div className="text-3xl font-bold mb-6">1 500 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Ближайшие встречи
            </button>
          </div>

          {/* Вдвоем с подругой */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Вдвоём с подругой</h3>
            <p className="mb-6">
              Камерный формат для вас и подруги. Более индивидуальный подход и
              внимание к вашим потребностям.
            </p>
            <div className="text-3xl font-bold mb-6">2 000 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Записаться
            </button>
          </div>

          {/* Индивидуально */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Индивидуальный сеанс</h3>
            <p className="mb-6">
              Эксклюзивное внимание только для вас. Глубокое погружение в ваши
              потребности и создание идеального аромата.
            </p>
            <div className="text-3xl font-bold mb-6">3 000 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Записаться
            </button>
          </div>
        </div>

        {/* Подарочный сертификат */}
        <div className="mt-8 bg-[#F5F5F5] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Подарочный сертификат</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Подарите близкому человеку заряд энергии и хорошего настроения с
            помощью персонального ресурсного аромата.
          </p>
          <button className="py-3 px-6 rounded-xl bg-black text-white font-medium">
            Подарить впечатление
          </button>
        </div>
      </section>

      <ReviewCarousel />

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-purple-600 text-white font-acrom font-medium text-lg">
          Записаться на сеанс
        </button>
      </div>
    </div>
  )
}
