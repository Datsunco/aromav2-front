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
        title: "1. Знакомство и определение целей",
        content: (
          <p>
            Мы обсуждаем ваши задачи, самочувствие и ожидания от сеанса. Это
            помогает подобрать индивидуальный подход.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Ароматестирование",
        content: (
          <p>
            Вы вдыхаете различные эфирные масла, расслабляетесь и отмечаете свои
            ощущения. Ваш организм сам подсказывает, что ему нужно для гармонии
            и счастья.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Анализ и рекомендации",
        content: (
          <p>
            Я составляю вашу индивидуальную ароматограмму и отправляю подробный
            анализ состояния, а также персональные рекомендации.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Создание средств для вас",
        content: (
          <p>
            Мы вместе создаём ресурсные духи, а я подбираю для вас натуральные
            кремы для тела. Вы получаете набор средств для домашнего
            использования.
          </p>
        ),
      },
      {
        id: "step-5",
        title: "5. Погружение в ресурс",
        content: (
          <p>
            В течение 21 дня вы используете ароматы и кремы, наполняя организм
            энергией и полезными веществами. Ваше тело словно пересажено в
            свежий грунт — появляется энергия для жизни, творчества и счастья.
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
        title: "Глубокое расслабление и восстановление",
        content: (
          <p>
            Уже после первого сеанса вы почувствуете расслабление, снижение
            стресса и прилив энергии.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "result-2",
        title: "Индивидуальная программа",
        content: (
          <p>
            Вы получите подробный анализ вашего состояния и персональные
            рекомендации по использованию эфирных масел.
          </p>
        ),
      },
      {
        id: "result-3",
        title: "Набор натуральных средств",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Флакончик ресурсных духов</li>
            <li>Комплект натуральных кремов для тела</li>
            <li>Памятка по применению</li>
          </ul>
        ),
      },
      {
        id: "result-4",
        title: "Долгосрочный эффект",
        content: (
          <p>
            После курса ароматерапии вы научитесь быстро возвращать себе
            ресурсное состояние, поддерживать гармонию и раскрывать свои
            таланты.
          </p>
        ),
      },
      {
        id: "result-5",
        title: "Эксклюзивный бонус",
        content: (
          <p>
            После 9 сеансов вы узнаете свой личный генетический аромакод — ключ
            к постоянному ресурсу и гармонии.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Ароматестирование",
    description:
      "Обонятельная диагностика для подбора эфирных масел, которые подходят именно вам.",
  },
  {
    title: "Персональная программа",
    description:
      "Составление индивидуальной ароматограммы и рекомендаций для вашего состояния.",
  },
  {
    title: "Профессиональный подход",
    description:
      "Работа по авторской методике Арома-код, основанной на опыте ведущих специалистов.",
  },
  {
    title: "Гармонизация и поддержка",
    description:
      "Восстановление баланса, снятие стресса и повышение энергии с помощью эфирных масел.",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/photo.png",
    title: "Погружение в себя через ароматы",
    description: "Ароматы помогают раскрыть истинные желания...",
  },
  {
    img: "/images/aromotherapy.png",
    title: "Ресурсное состояние",
    description: "Когда тело получает необходимый ресурс...",
  },
  {
    img: "/images/photo.png",
    title: "Ресурсное состояние",
    description: "Когда тело получает необходимый ресурс...",
  },
]

const factsBlockData = [
  {
    title: "Ароматестирование",
    description:
      "На сеансе вы проходите обонятельное тестирование, чтобы определить, какие эфирные масла наиболее подходят именно вам для поддержки и восстановления.",
  },
  {
    title: "Индивидуальная программа",
    description:
      "После тестирования я составляю для вас персональную ароматограмму и разрабатываю индивидуальную программу ароматерапии, учитывая ваши цели и состояние.",
  },
  {
    title: "Путь к гармонии и ресурсному состоянию",
    description:
      "Уже через несколько месяцев индивидуальной работы по методу Арома-код вы почувствуете новые силы, ясность мыслей и внутренний баланс. Это красивое познание себя для тех, кому важно понимать и чувствовать себя.",
  },
]

export default function IndividualAromaTemplate({}: {}) {
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
            title={"Индивидуальный прием ароматерапевта"}
            bgColor="#E4CFB7"
            features={bannerFeatures}
          />
        </div>
        <div className="mt-40">
          <InfoBlock imgSrc={["/images/photo.png"]}>
            <>
              <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
                <span className="font-literature text-3xl text-blue-400">
                  Ароматерапия
                </span>{" "}
                — метод оздоровления человека
              </h1>
              <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
                Вы удивитесь, насколько точно Ваш нос расскажет о Вашем
                состоянии, об истинных желаниях, целях, потребностях, и укажет
                Вам путь для поддержки и помощи. Через диагностику Вы выберете
                те ароматы, а значит и биохимические молекулы, которые нужны
                именно Вам и именно сейчас для решения задач.
              </p>
            </>
          </InfoBlock>
        </div>
        <FactsBlock title="Кратко про терапию" features={factsBlockData} />
        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Ароматерапия
            <br className="sm:hidden" /> - для каждого
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>
      </section>
      <ResultsSection />
      <HowItWorksSection />
      <div className="px-4">
        <MultiAccordion
          title="Из чего состоит прием Ароматерапевта"
          blocks={aromaSections}
          className="mt-40"
        />
      </div>

      <ReviewCarousel />

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Перед сеансом ароматерапии
        </h2>
        <p className="text-lg text-gray-700 font-acrom">
          За день до сеанса постарайтесь выспаться и не использовать парфюм или
          другие сильные ароматы. Это поможет максимально точно провести
          ароматестирование и подобрать подходящие масла.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Выберите формат сеанса
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Индивидуальный сеанс */}
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-acrom">
              Сеанс ароматерапии
            </h3>
            <p className="text-gray-700 font-acrom">
              Ароматестирование по методу Арома-код, индивидуальный подбор масел
              и программа.
            </p>
            <div className="text-xl font-bold text-blue-600">
              Стоимость: 6000 ₽
            </div>
            <button className="py-3 w-full rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
              Записаться
            </button>
          </div>
          {/* Сокращённый вариант */}
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-acrom">
              Знакомство с методом Арома-код
            </h3>
            <p className="text-gray-700 font-acrom">
              Краткое знакомство с методом и подбор базовых масел.
            </p>
            <div className="text-xl font-bold text-blue-600">
              Стоимость: 3000 ₽
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
