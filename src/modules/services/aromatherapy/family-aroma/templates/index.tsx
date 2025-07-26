import Header from "@modules/default/header"
import Banner from "@modules/default/service-banner"
// import InfoBlock from "@modules/default/info-block"
import InfoBlock from "@modules/default/info-first-block"
import ReviewCarousel from "@modules/default/reviews"
import HowItWorksSection from "../components/how-it-works"
import ResultsSection from "../components/result-section"
import MultiAccordion from "@modules/default/service-program"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"

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
          <ul className="list-disc pl-5 space-y-1">
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
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/couple/couple-banner.jpg"
            title={"Гармонизация отношений"}
            // subtitle="Парная ароматерапия для двоих"
            bgColor="#E4CFB7"
            features={bannerFeatures}
          />
        </div>

        <div className="mt-40">
          <InfoBlock imgSrc={["/images/couple/couple-main.jpg"]}>
            <>
              <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
                <span className="font-literature text-3xl text-blue-400">
                  Парная ароматерапия
                </span>{" "}
                — новый уровень отношений
              </h1>
              <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
                Я создаю общие ресурсные смеси ДЛЯ ДВОИХ. У вас будут и
                ароматерапевтические ванны, и смесь для диффузора, и общий
                вкусно пахнущий крем. Готовить партнёру ванну, потом растирать
                его шею и ноги кремом - это новая игра для вашей пары.
              </p>
            </>
          </InfoBlock>
        </div>

        <FactsBlock title="О парной ароматерапии" features={factsBlockData} />

        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Как это работает
            <br className="sm:hidden" /> в ваших отношениях
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>

        <ResultsSection />
        <div className="mt-40">
          <InfoBlock
            imgSrc={[
              "/images/mom.jpg",
              // "/images/aromotherapy/child/girl1.jpg",
              // "/images/aromotherapy/child/boy.jpg",
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

      <div className="px-4">
        <MultiAccordion
          title="Из чего состоит парная ароматерапия"
          blocks={coupleAromaSections}
          className="mt-40"
        />
      </div>

      <ReviewCarousel />

      <section className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold font-acrom mb-8">
          Ваши новые ритуалы
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-700 font-acrom mb-4">
              После сеанса у вас появятся прекрасные совместные практики:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700 font-acrom">
              <li>Совместные ароматические ванны</li>
              <li>Вечерние массажи с общим кремом</li>
              <li>Ароматизация спальни перед сном</li>
              <li>Новые тактильные контакты через ароматы</li>
            </ul>
          </div>
          <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold font-acrom">
              Парная ароматерапия
            </h3>
            <p className="text-gray-700 font-acrom">
              Включает полный комплект средств для двоих и рекомендации по
              использованию.
            </p>
            <div className="text-xl font-bold text-blue-600">
              Стоимость: 11 000 ₽
            </div>
            <button className="py-3 w-full rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
              Записаться
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-4 mb-20">
        <blockquote className="text-2xl italic text-gray-700 border-l-4 border-blue-500 pl-6 py-4 font-acrom">
          "И пусть плывёт ваш кораблик в нужном направлении к новым берегам
          ⛵️☀️ И чтобы так было, надо грести вёслами, а не плыть по течению."
        </blockquote>
      </section>

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться
        </button>
      </div>
    </div>
  )
}
