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
import AromaBanner from "../v2components/banner"

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
            Ребёнок знакомится с различными эфирными маслами, отмечая свои
            ощущения и предпочтения.
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
    img: "/images/aromotherapy/child/boy3.jpg",
    title: "Ароматерапия для школьников",
    description:
      "Помогает справляться с учебной нагрузкой и повышает концентрацию.",
  },
  // {
  //   img: "/images/child-therapy-2.jpg",
  //   title: "Игровое тестирование",
  //   description:
  //     "Дети в увлекательной форме знакомятся с ароматами и выбирают свои.",
  // },
  {
    img: "/images/aromotherapy/child/girl&mom.jpg",
    title: "Семейный подход",
    description: "Родители активно участвуют в процессе и помогают ребёнку.",
  },
]

const factsBlockData = [
  {
    title: "Возрастные ограничения",
    description: "Работаю с детьми с 9 лет.",
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
      <AromaBanner />
      <Info />
      <Benefits />
      <Appointment />
      <Prices />
      <div className="mx-auto mt-20 max-w-5xl md:mt-40">
        <InfoBlock
          imgSrc={[
            "/images/aromotherapy/child/girl_photo.jpg",
            "/images/aromotherapy/child/boy.jpg",
          ]}
        >
          <>
            <h1 className="font-jost text-[40px]/10 font-normal tracking-tight text-black">
              <span className="font-literature text-3xl font-medium text-[#2E4F6C]">
                Детская ароматерапия
              </span>{" "}
              — это мягкая поддержка растущего организма
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
