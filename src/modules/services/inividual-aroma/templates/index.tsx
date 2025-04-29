"use client"

import Header from "@modules/default/header"

import Banner from "../components/banner"
import InfoBlock from "../components/info-first-block"
import SecondInfoBlock from "../components/info-second-block"
import InfoThirdBlock from "../components/info-third-block"
import ReviewCarousel from "@modules/default/reviews"
import HowItWorksSection from "../components/how-it-works"
import ResultsSection from "../components/result-section"
import { AccordionItem } from "../components/course-program"
import MultiAccordion from "@modules/default/service-program"

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
  // {
  //   id: "why-choose",
  //   badge: "Почему выбирают мою студию",
  //   items: [
  //     {
  //       id: "why-1",
  //       title: "Профессиональный подход",
  //       content: (
  //         <p>
  //           Работаю по авторской методике Арома-код, основанной на опыте ведущих
  //           специалистов.
  //         </p>
  //       ),
  //       isExpanded: true,
  //     },
  //     {
  //       id: "why-2",
  //       title: "Индивидуальное сопровождение",
  //       content: (
  //         <p>
  //           Поддерживаю вас на каждом этапе, отвечаю на вопросы и помогаю
  //           внедрять ароматерапию в повседневную жизнь.
  //         </p>
  //       ),
  //     },
  //     {
  //       id: "why-3",
  //       title: "Гарантия натуральности",
  //       content: (
  //         <p>Использую только 100% натуральные эфирные масла и компоненты.</p>
  //       ),
  //     },
  //     {
  //       id: "why-4",
  //       title: "Уютная атмосфера",
  //       content: (
  //         <p>
  //           В студии царит атмосфера уюта, заботы и доверия — вы сможете
  //           полностью расслабиться и почувствовать себя в безопасности.
  //         </p>
  //       ),
  //     },
  //     {
  //       id: "why-5",
  //       title: "Подарочные сертификаты",
  //       content: (
  //         <p>
  //           Возможность приобрести сертификат для близких — отличный способ
  //           подарить заботу и новые ощущения.
  //         </p>
  //       ),
  //     },
  //   ],
  // },
  // {
  //   id: "client-stories",
  //   badge: "Истории клиентов",
  //   items: [
  //     {
  //       id: "story-1",
  //       title: "Анна, 34 года",
  //       content: (
  //         <p>
  //           После курса ароматерапии я стала спокойнее реагировать на стресс,
  //           улучшился сон и появилось больше энергии для новых дел.
  //         </p>
  //       ),
  //       isExpanded: true,
  //     },
  //     {
  //       id: "story-2",
  //       title: "Мария, 28 лет",
  //       content: (
  //         <p>
  //           Ароматестирование помогло мне лучше понять себя и свои потребности.
  //           Теперь эфирные масла — часть моего ежедневного ритуала.
  //         </p>
  //       ),
  //     },
  //     {
  //       id: "story-3",
  //       title: "Больше историй и полезных статей",
  //       content: (
  //         <a
  //           href="https://t.me/your_channel"
  //           target="_blank"
  //           className="text-blue-600 underline font-acrom"
  //         >
  //           Читать в моём Телеграм-канале →
  //         </a>
  //       ),
  //     },
  //   ],
  // },
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
          />
        </div>
        <InfoBlock />
        <SecondInfoBlock />
        <InfoThirdBlock />
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
