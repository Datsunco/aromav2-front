import Header from "@modules/default/header"

import Banner from "@modules/default/service-banner"
import InfoBlock from "@modules/default/info-first-block"
import ReviewCarousel from "@modules/default/reviews"
import HowItWorksSection from "../components/how-it-works"
import ResultsSection from "../components/result-section"
import MultiAccordion from "@modules/default/service-program"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"
import AromaDateBanner from "../v2components/banner"
import Info from "../v2components/info"
import Benefits from "../v2components/benefits"
import Appointment from "@modules/default/appointment"
import Prices from "../v2components/prices"
import AromaIndividInfoSection from "../v2components/data"

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
          <ul className="list-disc space-y-1 pl-5">
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
    img: "/images/mom.jpg",
    title: "Погружение в себя через ароматы",
    description: "Ароматы помогают раскрыть истинные желания...",
  },
  {
    img: "/images/mom.jpg",
    title: "Ресурсное состояние",
    description: "Когда тело получает необходимый ресурс...",
  },
  {
    img: "/images/mom.jpg",
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
      <AromaDateBanner />
      <Info />
      <Benefits />
      <Appointment />
      <Prices />
      <AromaIndividInfoSection />
      <div className="mx-auto mt-20 max-w-5xl md:mt-40">
        <InfoBlock
          imgSrc={[
            "/images/aroma-date/hands.png",
            "/images/aromotherapy/child/girl1.jpg",
            "/images/aromotherapy/child/boy.jpg",
          ]}
        >
          <>
            <h1 className="font-jost text-[40px]/10 font-normal tracking-tight text-black">
              <span className="font-literature text-3xl font-medium text-[#2E4F6C]">
                Путь к гармонии и ресурсному состоянию
              </span>{" "}
              {/* — новый уровень отношений */}
            </h1>
            {/* <p className="max-w-xl font-acrom text-lg/5 font-medium text-gray-600">
              Ароматерапия помогает детям гармонично развиваться, укрепляет
              иммунитет и создаёт основу для здоровой взрослой жизни. Особенно
              важна работа с обонянием — ключевым чувством, которое в
              современном мире часто остаётся неразвитым.
            </p> */}
          </>
        </InfoBlock>
      </div>
      <ReviewCarousel />
    </div>
  )
}
