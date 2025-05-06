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
    badge: "Как проходит встреча",
    items: [
      {
        id: "step-1",
        title: "1. Погружение в мир архетипов",
        content: (
          <p>
            Мы исследуем 6 ключевых женских архетипов через ароматы. Вы узнаете,
            какие энергии в вас уже живут, а какие хотите развить.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Обонятельное тестирование",
        content: (
          <p>
            Вы познакомитесь с ароматами каждого архетипа и выберете те, что
            резонируют с вашей душой. Ваше обоняние подскажет, какие энергии вам
            нужны прямо сейчас.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Создание аромаплатья",
        content: (
          <p>
            Под руководством эксперта вы составите уникальную парфюмерную
            композицию, которая станет вашим ароматическим "платьем" для
            желаемого архетипа.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Ритуал примерки",
        content: (
          <p>
            Вы "примерите" новый архетип через созданный аромат. Это волшебный
            момент трансформации, когда вы физически ощущаете нужные качества в
            себе.
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
        title: "Понимание своих энергий",
        content: (
          <p>
            Узнаете, какие архетипы в вас преобладают и как гармонизировать их
            баланс для счастливой жизни.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "result-2",
        title: "Индивидуальный аромат",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Флакон духов с вашим уникальным ароматом (10 мл)</li>
            <li>Описание свойств вашей композиции</li>
            <li>Рекомендации по использованию</li>
          </ul>
        ),
      },
      {
        id: "result-3",
        title: "Инструмент трансформации",
        content: (
          <p>
            Аромат, который поможет "включать" нужные качества в повседневной
            жизни - уверенность, нежность, мудрость или творчество.
          </p>
        ),
      },
      {
        id: "result-4",
        title: "Незабываемый опыт",
        content: (
          <p>
            2 часа погружения в мир ароматов и женских энергий в кругу
            единомышленниц.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Откройте свои энергии",
    description: "Узнайте, какие архетипы в вас живут и как их балансировать",
  },
  {
    title: "Создайте аромат-трансформер",
    description: "Индивидуальная парфюмерная композиция для нужного состояния",
  },
  {
    title: "Примерьте новую себя",
    description: "Через аромат активируйте желаемые качества характера",
  },
  {
    title: "Волшебный инструмент",
    description: "Готовое решение для повседневного использования",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/photo.png",
    title: "6 женских архетипов",
    description:
      "Исследуем энергии Богини, Феи, Амазонки, Матери, Гейши и Императрицы через ароматы. Узнайте, какие из них есть в вас и какие хотите развить.",
  },
  {
    img: "/images/aromotherapy.png",
    title: "Магия ароматов",
    description:
      "Каждый архетип имеет свои запахи-проводники. Через обоняние мы получаем прямой доступ к подсознанию и нужным качествам.",
  },
  {
    img: "/images/photo.png",
    title: "Ваше аромаплатье",
    description:
      "Создадим парфюмерную композицию, которая станет вашим инструментом для быстрого входа в нужное состояние.",
  },
]

const factsBlockData = [
  {
    title: "Для кого это?",
    description:
      "Для женщин, которые хотят лучше понимать себя, развивать нужные качества и иметь волшебный инструмент для повседневной трансформации.",
  },
  {
    title: "Как работает?",
    description:
      "Ароматы напрямую воздействуют на лимбическую систему мозга, отвечающую за эмоции и память. Это быстрый способ доступа к нужным состояниям.",
  },
  {
    title: "Почему в группе?",
    description:
      "Женская энергия усиливается в кругу единомышленниц. Общие insights и поддержка делают процесс глубже и ценнее.",
  },
]

export default function ArchetypesPerfumeTemplate() {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto">
        <Header />
      </div>

      {/* Главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/wonem-meet.png"
            title={"Архетипы и аромаплатье"}
            bgColor="#EDE1FF"
            features={bannerFeatures}
          />
        </div>

        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Какой архетип вы хотите <br className="sm:hidden" />
            примерить сегодня?
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>

        <InfoBlock imgSrc={["/images/wonem-meet.png", "/images/aroma.jpg"]}>
          <>
            <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
              <span className="font-literature text-3xl text-blue-400">
                Аромаплатье -
              </span>{" "}
              ваш ключ к трансформации
            </h1>
            <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
              Всего за 2 часа вы создадите парфюмерную композицию, которая
              поможет "включать" нужные качества в повседневной жизни -
              уверенность, мудрость, творчество или нежность.
            </p>
          </>
        </InfoBlock>

        <FactsBlock title="Кратко про терапию" features={factsBlockData} />
      </section>

      <div className="px-4">
        <MultiAccordion
          title="Как проходит создание аромаплатья"
          blocks={aromaSections}
          className="mt-40"
        />
      </div>

      {/* Блок с ценами */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Индивидуальная встреча */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Групповая встреча</h3>
            <p className="mb-6">
              От 3-х человек. 2 часа погружения в мир архетипов и создания
              индивидуального аромата в кругу единомышленниц.
            </p>
            <div className="text-3xl font-bold mb-6">2 000 ₽</div>
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium">
              Ближайшие встречи
            </button>
          </div>

          {/* Вдвоем с подругой */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Вдвоём с подругой</h3>
            <p className="mb-6">
              Особый формат для вас и подруги. Более камерная атмосфера и
              индивидуальный подход.
            </p>
            <div className="text-3xl font-bold mb-6">2 500 ₽</div>
            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium">
              Записаться
            </button>
          </div>
        </div>

        {/* Подарочный сертификат */}
        <div className="mt-8 bg-[#F5F5F5] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Подарочный сертификат</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Необычный подарок для той, кому хотите пожелать самопознания и
            трансформации через ароматы.
          </p>
          <button className="py-3 px-6 rounded-xl bg-black text-white font-medium">
            Подарить впечатление
          </button>
        </div>
      </section>

      <ReviewCarousel />

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-blue-600 text-white font-acrom font-medium text-lg">
          Записаться на встречу
        </button>
      </div>
    </div>
  )
}
