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
        title: "1. Знакомство и диагностика",
        content: (
          <p>
            Мы обсуждаем состояние ребёнка, его привычки, режим дня и основные
            задачи, которые нужно решить с помощью ароматерапии.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Ароматестирование для ребёнка",
        content: (
          <p>
            Ребёнок в игровой форме знакомится с различными эфирными маслами,
            отмечая свои ощущения и предпочтения.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Составление детской программы",
        content: (
          <p>
            На основе тестирования составляется индивидуальная программа с
            простыми и безопасными методами применения ароматов.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Обучение родителей",
        content: (
          <p>
            Родители получают подробные инструкции по применению и помогают
            ребёнку с ежедневными процедурами.
          </p>
        ),
      },
    ],
  },
  {
    id: "methods",
    badge: "Методы применения",
    items: [
      {
        id: "method-1",
        title: "Ароматические ванны",
        content: (
          <p>
            Тёплые ванны с индивидуально подобранными эфирными маслами перед
            сном для расслабления и укрепления иммунитета.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "method-2",
        title: "Детский арома-роллер",
        content: (
          <p>
            Удобный роллер с личным ароматом, который можно носить с собой и
            использовать в течение дня для поддержки.
          </p>
        ),
      },
      {
        id: "method-3",
        title: "Аромадиффузор",
        content: (
          <p>
            Использование диффузора в детской комнате для создания благоприятной
            атмосферы и профилактики заболеваний.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Безопасность",
    description:
      "Используем только проверенные и разрешённые для детей эфирные масла.",
  },
  {
    title: "Игровой формат",
    description:
      "Сеанс проходит в лёгкой игровой форме, комфортной для ребёнка.",
  },
  {
    title: "Простота применения",
    description:
      "Программа разрабатывается с учётом удобства для детей и родителей.",
  },
  {
    title: "Комплексный подход",
    description:
      "Работаем не только с ребёнком, но и обучаем родителей для лучшего результата.",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/child-therapy-1.jpg",
    title: "Ароматерапия для школьников",
    description:
      "Помогает справляться с учебной нагрузкой и повышает концентрацию.",
  },
  {
    img: "/images/child-therapy-2.jpg",
    title: "Игровое тестирование",
    description:
      "Дети в увлекательной форме знакомятся с ароматами и выбирают свои.",
  },
  {
    img: "/images/child-therapy-3.jpg",
    title: "Семейный подход",
    description: "Родители активно участвуют в процессе и помогают ребёнку.",
  },
]

const factsBlockData = [
  {
    title: "Возрастные ограничения",
    description:
      "Работаю с детьми с 9 лет. Для младшего возраста требуется особый подход и консультация.",
  },
  {
    title: "Роль родителей",
    description:
      "Родители играют ключевую роль в успехе терапии, помогая ребёнку с ежедневными процедурами.",
  },
  {
    title: "Безопасность прежде всего",
    description:
      "Все используемые методы и масла абсолютно безопасны для детей при правильном применении.",
  },
]

export default function ChildrenAromaTherapy() {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto">
        <Header />
      </div>

      {/* главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/child-banner.jpg"
            title={"Сеанс ароматерапии для ребёнка"}
            bgColor="#E4CFB7"
            features={bannerFeatures}
          />
        </div>

        <div className="mt-40">
          <InfoBlock imgSrc={["/images/child-main.jpg"]}>
            <>
              <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
                <span className="font-literature text-3xl text-blue-400">
                  Детская ароматерапия
                </span>{" "}
                — мягкая поддержка растущего организма
              </h1>
              <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
                Ароматерапия помогает детям гармонично развиваться, укрепляет
                иммунитет и создаёт основу для здоровой взрослой жизни. Особенно
                важна работа с обонянием — ключевым чувством, которое в
                современном мире часто остаётся неразвитым.
              </p>
            </>
          </InfoBlock>
        </div>

        <FactsBlock
          title="Особенности детской ароматерапии"
          features={factsBlockData}
        />

        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Ароматерапия помогает детям
            <br className="sm:hidden" /> в разных ситуациях
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>
      </section>

      <ResultsSection />
      <HowItWorksSection />

      <div className="px-4">
        <MultiAccordion
          title="Как проходит детская ароматерапия"
          blocks={aromaSections}
          className="mt-40"
        />
      </div>

      <ReviewCarousel />

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Подготовка к сеансу
        </h2>
        <p className="text-lg text-gray-700 font-acrom">
          За день до сеанса желательно избегать сильных ароматов. Ребёнок должен
          быть отдохнувшим и в хорошем настроении. Родителям рекомендуется
          подготовить вопросы о состоянии ребёнка и его привычках.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">Стоимость сеанса</h2>
        <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4 max-w-2xl">
          <h3 className="text-2xl font-semibold font-acrom">
            Сеанс ароматерапии для ребёнка
          </h3>
          <p className="text-gray-700 font-acrom">
            Ароматестирование, составление индивидуальной программы и обучение
            родителей.
          </p>
          <div className="text-xl font-bold text-blue-600">
            Стоимость: 5000 ₽
          </div>
          <button className="py-3 w-full rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
            Записаться
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4 pb-20">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Связаться со мной
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://t.me/zhannadotsenkolife"
            className="py-3 px-6 rounded-xl bg-blue-500 text-white font-acrom font-medium text-lg text-center"
          >
            Написать в Telegram
          </a>
          <a
            href="https://wa.me/79000000000"
            className="py-3 px-6 rounded-xl bg-green-500 text-white font-acrom font-medium text-lg text-center"
          >
            Написать в WhatsApp
          </a>
        </div>
      </section>

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться на прием
        </button>
      </div>
    </div>
  )
}
