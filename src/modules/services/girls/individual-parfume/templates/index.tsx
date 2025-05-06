"use client"
import Header from "@modules/default/header"
import Banner from "@modules/default/service-banner"
import ReviewCarousel from "@modules/default/reviews"
import MultiAccordion from "@modules/default/service-program"
import InfoBlock from "@modules/default/info-first-block"
import ImageCollapsible from "@modules/default/image-collapsible"
import FactsBlock from "@modules/default/facts-block"

export const perfumeSections = [
  {
    id: "process",
    badge: "Как проходит мастер-класс",
    items: [
      {
        id: "step-1",
        title: "1. Погружение в мир парфюмерии",
        content: (
          <p>
            Краткий экскурс в историю парфюмерии и основы создания духов. Вы
            узнаете о нотах, аккордах и правилах составления гармоничных
            композиций.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "step-2",
        title: "2. Знакомство с ароматами",
        content: (
          <p>
            Тестирование различных эфирных масел и парфюмерных аккордов. Вы
            определите свои предпочтения и создадите уникальную парфюмерную
            палитру.
          </p>
        ),
      },
      {
        id: "step-3",
        title: "3. Создание своего аромата",
        content: (
          <p>
            Под руководством парфюмера вы составите индивидуальную композицию,
            экспериментируя с сочетаниями и пропорциями.
          </p>
        ),
      },
      {
        id: "step-4",
        title: "4. Оформление духов",
        content: (
          <p>
            Ваш аромат будет помещен в элегантный флакон. Вы получите 10 мл
            готовых духов и их рецептуру для возможного повторения.
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
        title: "Уникальный парфюм",
        content: (
          <p>
            Духи, созданные по вашему вкусу из натуральных эфирных масел без
            синтетических добавок.
          </p>
        ),
        isExpanded: true,
      },
      {
        id: "result-2",
        title: "Знания и навыки",
        content: (
          <p>
            Основы парфюмерного искусства, которые можно применять для создания
            других ароматов.
          </p>
        ),
      },
      {
        id: "result-3",
        title: "Готовые материалы",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Флакон духов 10 мл</li>
            <li>Рецептура вашего аромата</li>
            <li>Памятка по составлению композиций</li>
          </ul>
        ),
      },
      {
        id: "result-4",
        title: "Незабываемый опыт",
        content: (
          <p>
            3 часа погружения в творческий процесс и ароматерапию в приятной
            компании.
          </p>
        ),
      },
    ],
  },
]

const bannerFeatures = [
  {
    title: "Натуральные ингредиенты",
    description: "Только качественные эфирные масла без синтетики",
  },
  {
    title: "Профессиональный подход",
    description: "Обучение основам парфюмерного искусства от эксперта",
  },
  {
    title: "Творческая свобода",
    description: "Полная свобода в создании своего уникального аромата",
  },
  {
    title: "Готовый результат",
    description: "Вы унесете с собой флакон духов и рецептуру",
  },
]

const imageCollapsibleData = [
  {
    img: "/images/event/individual-parfume/aroma-dress.jpg",
    title: "Искусство парфюмерии",
    description:
      "Прикоснитесь к таинству создания духов и почувствуйте себя настоящим парфюмером, экспериментируя с ароматами.",
  },
  {
    img: "/images/event/individual-parfume/1.jpg",
    title: "Натуральные компоненты",
    description:
      "Мы используем только натуральные эфирные масла высшего качества, чтобы ваши духи были не только ароматными, но и полезными.",
  },
  {
    img: "/images/event/individual-parfume/2.jpg",
    title: "Творческий процесс",
    description:
      "Создайте аромат, который будет отражать вашу индивидуальность - свежий, цветочный, древесный или ориентальный.",
  },
]

const factsBlockData = [
  {
    title: "Для кого это?",
    description:
      "Для тех, кто ценит индивидуальность, любит экспериментировать с ароматами или ищет необычный формат для встречи с друзьями.",
  },
  {
    title: "Формат мероприятия",
    description:
      "Мастер-класс продолжительностью 2,5-3 часа в группе до 5 человек для максимально индивидуального подхода.",
  },
  {
    title: "Почему стоит попробовать?",
    description:
      "Это уникальный опыт создания чего-то действительно своего, а также возможность узнать много нового о мире ароматов.",
  },
]

export default function IndividualPerfumeTemplate() {
  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto">
        <Header />
      </div>

      {/* Главная секция */}
      <section className="max-w-6xl mx-auto flex flex-col mt-8">
        <div className="px-2 lg:px-0">
          <Banner
            img="/images/perfume-workshop.jpg"
            title={"Создание индивидуального парфюма"}
            bgColor="#F0E8FF"
            features={bannerFeatures}
          />
        </div>

        <div className="mt-20 md:mt-40">
          <h1 className="font-acrom font-bold mb-10 md:mb-8 text-4xl md:text-5xl md:font-semibold px-6">
            Создайте духи, <br className="sm:hidden" />
            которые расскажут вашу историю
          </h1>
          <ImageCollapsible features={imageCollapsibleData} />
        </div>

        <InfoBlock
          imgSrc={[
            "/images/event/aroma-dress.jpg",
            "/images/event/aroma-dress.jpg",
          ]}
        >
          <>
            <h1 className="text-[40px]/10 font-bold font-acrom tracking-tight text-black">
              <span className="font-literature text-3xl text-purple-500">
                Парфюмерный мастер-класс -
              </span>{" "}
              ваш путь к уникальному аромату
            </h1>
            <p className="text-lg/5 font-medium text-gray-600 max-w-xl font-acrom">
              За 3 часа вы создадите авторские духи из натуральных компонентов,
              узнаете секреты парфюмерного искусства и получите готовый продукт
              в элегантном флаконе.
            </p>
          </>
        </InfoBlock>

        <FactsBlock title="Кратко про мастер-класс" features={factsBlockData} />
      </section>

      <div className="px-4">
        <MultiAccordion
          title="Процесс создания парфюма"
          blocks={perfumeSections}
          className="mt-40"
        />
      </div>

      {/* Блок с ценами */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Групповой мастер-класс */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Групповой мастер-класс</h3>
            <p className="mb-6">
              От 3 до 5 человек. 3 часа творчества в приятной компании. Идеально
              для девичников, дней рождения и корпоративов.
            </p>
            <div className="text-3xl font-bold mb-6">3 000 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Ближайшие встречи
            </button>
          </div>

          {/* Вдвоем с подругой */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Вдвоём с подругой</h3>
            <p className="mb-6">
              Камерный формат для вас и подруги, сестры или мамы. Более
              индивидуальный подход и внимание.
            </p>
            <div className="text-3xl font-bold mb-6">3 500 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Записаться
            </button>
          </div>

          {/* Индивидуально */}
          <div className="bg-[#F5F5F5] rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Индивидуальный сеанс</h3>
            <p className="mb-6">
              Эксклюзивное внимание парфюмера только для вас. Роскошь создания
              аромата в приватной обстановке.
            </p>
            <div className="text-3xl font-bold mb-6">5 000 ₽</div>
            <button className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium">
              Записаться
            </button>
          </div>
        </div>

        {/* Подарочный сертификат */}
        <div className="mt-8 bg-[#F5F5F5] rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Подарочный сертификат</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Необычный подарок для ценителей прекрасного. Дарите впечатления и
            возможность создать свой уникальный аромат.
          </p>
          <button className="py-3 px-6 rounded-xl bg-black text-white font-medium">
            Подарить впечатление
          </button>
        </div>
      </section>

      <ReviewCarousel />

      <div className="md:hidden z-50 fixed bottom-0 w-full bg-white rounded-t-3xl h-20 flex justify-center items-center shadow-inner">
        <button className="py-3 w-full mx-7 rounded-xl bg-purple-600 text-white font-acrom font-medium text-lg">
          Записаться на мастер-класс
        </button>
      </div>
    </div>
  )
}
