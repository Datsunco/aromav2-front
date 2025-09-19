import Header from "@modules/default/header"
import Banner from "@modules/default/service-banner"
// import InfoBlock from "@modules/default/info-block"
import InfoBlock from "@modules/default/info-first-block"
import ReviewCarousel from "@modules/default/reviews"
import ResultsSection from "../components/result-section"
import MultiAccordion from "@modules/default/service-program"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"
import AromaDateBanner from "../v2components/banner"
import Info from "../v2components/info"
import Benefits from "../v2components/benefits"
import Appointment from "@modules/default/appointment"
import HowItWorksSection from "../../inividual-aroma/components/how-it-works"
import Prices from "../v2components/prices"

export const coupleAromaSections = [
  {
    id: "difference",
    badge: "Отличие от индивидуальной",
    items: [
      {
        id: "diff-1",
        title: "Индивидуальная терапия",
        content: (
          <p>
            В индивидуальной ароматерапии мы работаем над ресурсностью человека
            и раскрытием его возможностей.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "diff-2",
        title: "Парная терапия",
        content: (
          <p>
            В парной ароматерапии упор делается на раскрытие и взращивание
            нужных каждому архетипов для гармоничного взаимодействия.
          </p>
        ),
      },
    ],
  },
  {
    id: "process",
    badge: "Как проходит",
    items: [
      {
        id: "step-1",
        title: "1. Ароматестирование пары",
        content: (
          <p>
            Выявляем текущую ситуацию в отношениях через реакцию на ароматы.
            Определяем болевые точки и потенциал развития.
          </p>
        ),
      },
      {
        id: "step-2",
        title: "2. Гармонизация",
        content: (
          <p>
            С помощью специально подобранных эфирных масел постепенно шаг за
            шагом сглаживаем острые углы в отношениях.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Создание общих средств",
        content: (
          <ul className="list-disc space-y-1 pl-5">
            <li>Ароматерапевтические ванны для двоих</li>
            <li>Смесь для диффузора</li>
            <li>Общий крем для тела</li>
          </ul>
        ),
      },
      {
        id: "step-4",
        title: "4. Рекомендации",
        content: (
          <p>
            Даю рекомендации по использованию ароматов в повседневной жизни для
            поддержания гармонии.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Гармонизация",
    description:
      "Специальные ароматы помогают сгладить острые углы в отношениях.",
  },
  {
    title: "Общие ритуалы",
    description:
      "Совместные ванны, массажи с кремом создают новые точки соприкосновения.",
  },
  {
    title: "Раскрытие архетипов",
    description:
      "Ароматы помогают раскрыть нужные качества для гармоничных отношений.",
  },
  {
    title: "Новый уровень близости",
    description: "Ароматы мягко улучшают интимную сферу отношений.",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/couple/couple-1.jpg",
    title: "Ароматестирование пары",
    description:
      "Через реакцию на ароматы мы выявляем текущее состояние отношений и потенциал развития.",
  },
  {
    img: "/images/couple/couple-2.jpg",
    title: "Совместные ритуалы",
    description:
      "Общие ванны и массажи с ароматным кремом становятся новыми объединяющими практиками.",
  },
  {
    img: "/images/couple/couple-3.jpg",
    title: "Гармонизация",
    description:
      "Ароматы мягко сглаживают конфликты и помогают найти общий язык.",
  },
]

const factsBlockData = [
  {
    title: "Для кого",
    description:
      "Для пар, которые хотят улучшить отношения, но не знают, с чего начать. Когда есть понимание, что желаемые отношения нужно строить.",
  },
  {
    title: "Как уговорить партнёра",
    description:
      "Мужчину уговорить обычно трудно. Предложите это как новый совместный опыт, а не терапию. Акцент на приятные процедуры - ванны, массажи.",
  },
  {
    title: "Результат",
    description:
      "Каждый взрослеет, осознаёт свою роль в паре, начинает жить более осознанно. Отношения становятся более гармоничными и наполненными.",
  },
]

export default function CoupleAromaTemplate() {
  return (
    <div className="">
      <AromaDateBanner />
      <Info />
      <Benefits />
      <Appointment />
      <Prices />
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
                Парная ароматерапия
              </span>{" "}
              — новый уровень отношений
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
