"use client"

import Header from "@modules/default/header"

import Banner from "@modules/default/service-banner"
import InfoBlock from "@modules/default/info-first-block"
import InfoThirdBlock from "../components/info-third-block"
import ReviewCarousel from "@modules/default/reviews"
import FactsBlock from "@modules/default/facts-block"

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

export default function FamilyAromaTemplate({}: {}) {
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
        <InfoBlock imgSrc={["/images/photo.png"]}>
          <>
            <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
              <span className="font-literature text-3xl text-blue-400">
                Ароматерапия
              </span>{" "}
              — метод оздоровления человека
            </h1>
            <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
              Вы удивитесь, насколько точно Ваш нос расскажет о Вашем состоянии,
              об истинных желаниях, целях, потребностях, и укажет Вам путь для
              поддержки и помощи. Через диагностику Вы выберете те ароматы, а
              значит и биохимические молекулы, которые нужны именно Вам и именно
              сейчас для решения задач.
            </p>
          </>
        </InfoBlock>
        <FactsBlock title="Кратко про терапию" features={factsBlockData} />
        <InfoThirdBlock />
      </section>
      <ReviewCarousel />

      <div className="md:hidden fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться на прием
        </button>
      </div>
    </div>
  )
}
