"use client"

import Header from "@modules/default/header"

import Banner from "@modules/default/service-banner"
import InfoBlock from "@modules/default/info-first-block"
import ReviewCarousel from "@modules/default/reviews"
import HowItWorksSection from "../components/how-it-works"
import ResultsSection from "../components/result-section"
import MultiAccordion from "@modules/default/service-program"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"

export const aromaSections = [
  {
    id: "process",
    badge: "Как проходит сеанс",
    items: [
      {
        id: "step-1",
        title: "1. Знакомство и адаптация",
        content: (
          <p>
            Мы знакомимся с ребёнком в присутствии мамы, создаём комфортную
            атмосферу. Обсуждаем цели сеанса и ожидания.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Совместное ароматестирование",
        content: (
          <p>
            Мама и ребёнок вместе вдыхают различные эфирные масла, отмечают свои
            ощущения. Это превращается в увлекательную игру с ароматами.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Индивидуальные рекомендации",
        content: (
          <p>
            Я составляю индивидуальные рекомендации для ребёнка и мамы, учитывая
            их реакции на ароматы и текущее состояние.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Создание ресурсных ароматов",
        content: (
          <p>
            Вместе создаём индивидуальные ароматы для мамы и ребёнка, которые
            они забирают с собой для домашнего использования.
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
        title: "Комфортная адаптация ребёнка",
        content: (
          <p>
            Ребёнок чувствует себя безопасно в присутствии мамы, что позволяет
            получить максимальный эффект от сеанса.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "result-2",
        title: "Полезный совместный опыт",
        content: (
          <p>
            Мама и ребёнок получают новый опыт взаимодействия через ароматы,
            который укрепляет их связь.
          </p>
        ),
      },
      {
        id: "result-3",
        title: "Набор натуральных средств",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Индивидуальный аромат для ребёнка</li>
            <li>Индивидуальный аромат для мамы</li>
            <li>Рекомендации по использованию</li>
          </ul>
        ),
      },
      {
        id: "result-4",
        title: "Поддержка в важные периоды",
        content: (
          <p>
            Особенно полезно перед и после важных событий: начало/конец учебного
            года, экзамены, сезонные периоды.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Совместный сеанс",
    description:
      "Мама и ребёнок проходят ароматестирование вместе, что создаёт атмосферу доверия.",
  },
  {
    title: "Адаптация для ребёнка",
    description:
      "Присутствие мамы помогает ребёнку расслабиться и получить максимальную пользу.",
  },
  {
    title: "Ресурсные ароматы",
    description:
      "В конце сеанса создаём индивидуальные ароматы для мамы и ребёнка.",
  },
  {
    title: "Поддержка в стрессовые периоды",
    description:
      "Особенно полезно перед важными событиями и в сезонные периоды.",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/aromotherapy/mom/girl&mom.jpg",
    title: "Совместное ароматестирование",
    description:
      "Мама и ребёнок вместе исследуют ароматы, создавая атмосферу доверия и комфорта.",
  },
  {
    img: "/images/aromotherapy/child/boy2.jpg",
    title: "Ресурсное состояние",
    description:
      "Ароматы помогают ребёнку расслабиться и восстановить эмоциональный баланс.",
  },
  {
    img: "/images/aromotherapy/aroma1.jpg",
    title: "Создание индивидуальных ароматов",
    description:
      "В конце сеанса каждый участник получает свой уникальный ресурсный аромат.",
  },
]

const factsBlockData = [
  {
    title: "Безопасность и комфорт",
    description:
      "Присутствие мамы помогает ребёнку чувствовать себя в безопасности и полностью расслабиться во время сеанса.",
  },
  {
    title: "Совместный опыт",
    description:
      "Аромасеанс становится особым временем для мамы и ребёнка, укрепляя их связь через общие впечатления.",
  },
  {
    title: "Поддержка в важные периоды",
    description:
      "Сеансы особенно полезны перед и после важных событий: начало/конец учебного года, экзамены, сезонные периоды повышенной заболеваемости.",
  },
]

export default function MomAromaTemplate({}: {}) {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/wonem-meet.png"
            title={"Аромасеанс Вместе с мамой"}
            bgColor="#E4CFB7"
            features={bannerFeatures}
          />
        </div>
        <div className="mt-40">
          <InfoBlock imgSrc={["/images/aromotherapy/mom/girl&mom.jpg"]}>
            <>
              <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
                <span className="font-literature text-3xl text-blue-400">
                  Аромасеанс с мамой
                </span>{" "}
                — комфортная адаптация для ребёнка
              </h1>
              <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
                Для того, чтобы ребёнку было спокойно, первый аромасеанс хорошо
                пройти вместе с мамой. Так ребёнку будет легче расслабиться с
                новым человеком. Мама получит новый опыт полезного
                времяпровождения с ребёнком. Изготовление в конце встречи
                ресурсного аромата для каждого и обмен эмоциями зарядит хорошим
                настроением.
              </p>
            </>
          </InfoBlock>
        </div>
        <FactsBlock title="Кратко про терапию" features={factsBlockData} />
        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Особенно рекомендую
            <br className="sm:hidden" /> в важные периоды
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>

        <ResultsSection />

        <div className="mt-40">
          <InfoBlock
            imgSrc={[
              "/images/mom.jpg",
              "/images/aromotherapy/child/girl1.jpg",
              "/images/aromotherapy/child/boy.jpg",
            ]}
          >
            <>
              <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
                <span className="font-literature text-3xl text-blue-400">
                  Как проходит сеанс?
                </span>{" "}
              </h1>
              <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
                Сеанс начинается с мягкого знакомства, где я помогаю ребёнку
                почувствовать себя комфортно. Мама активно участвует в процессе,
                создавая атмосферу доверия. В игровой форме мы исследуем
                ароматы, наблюдая за реакцией ребёнка. В завершение создаём
                индивидуальные ароматы для мамы и ребёнка, которые они забирают
                с собой.
              </p>
            </>
          </InfoBlock>
        </div>
      </section>

      {/* <HowItWorksSection /> */}
      <div className="px-4">
        <MultiAccordion
          title="Из чего состоит аромасеанс вместе с мамой"
          blocks={aromaSections}
          className="mt-40"
        />
      </div>

      <ReviewCarousel />

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Когда особенно полезен сеанс
        </h2>
        <p className="text-lg text-gray-700 font-acrom">
          Особенно рекомендую проходить детям в следующие периоды:
        </p>
        <ul className="list-disc pl-5 mt-4 space-y-2 text-lg text-gray-700 font-acrom">
          <li>
            В конце мая по окончании учебного года - продышать, выдохнуть страхи
            и эмоции от учебного года
          </li>
          <li>
            В конце августа - перед новым учебным годом, особенно идущим в 1, 5,
            9 классы
          </li>
          <li>Перед и после выпускных экзаменов в 9 и 11 классах</li>
          <li>
            В осенне-весенний сезон подъёма вирусных заболеваний и отсутствия
            солнца
          </li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Выберите формат сеанса
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-acrom">
              Совместный сеанс (мама + ребёнок)
            </h3>
            <p className="text-gray-700 font-acrom">
              Ароматестирование для мамы и ребёнка, создание индивидуальных
              ароматов.
            </p>
            <div className="text-xl font-bold text-blue-600">
              Стоимость: 8000 ₽
            </div>
            <button className="py-3 w-full rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
              Записаться
            </button>
          </div>

          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-acrom">
              Индивидуальный сеанс для ребёнка
            </h3>
            <p className="text-gray-700 font-acrom">
              Ароматестирование и создание индивидуального аромата для ребёнка.
            </p>
            <div className="text-xl font-bold text-blue-600">
              Стоимость: 5000 ₽
            </div>
            <button className="py-3 w-full rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
              Записаться
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Групповые встречи
        </h2>
        <p className="text-lg text-gray-700 font-acrom mb-4">
          Групповые сеансы — это возможность познакомиться с ароматерапией в
          компании единомышленников, получить новые знания и обменяться опытом.
        </p>
        <div className="text-xl font-bold text-blue-600 mb-4">
          Стоимость: 2000 ₽
        </div>
        <button className="py-3 w-full md:w-auto rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Ближайшие групповые встречи
        </button>
      </section>

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться на прием
        </button>
      </div>
    </div>
  )
}
