import React from "react"

// Все данные вынесены для удобства редактирования
const data = {
  title: "Чай с нумерологом",
  subtitle: "Познавать себя. Что может быть интереснее?",
  introParagraphs: [
    'Я приглашаю вас на встречу "Чай с нумерологом", на которой вы узнаете о себе интересное через нумерологию. Ещё Пифагор говорил, что числа - есть сущность всех вещей.',
    "Числа управляют миром и с их помощью человек может изменить свою жизнь в лучшую сторону.",
  ],
  listTitle: "Что вас ждет на встрече?",
  listItems: [
    "Вы с моей помощью прикоснётесь к таинству цифр и сами сделаете расчёт своей Матрицы Судьбы - это карта судьбы человека. Ключ к пониманию, код человека - дата рождения.",
    "В этих цифрах зашифрована ваша судьба. Ваши задачи, предназначения, способности, таланты, ваши отношения с людьми и деньгами, события вашей жизни и трудности, - вся ваша жизнь.",
    "Вы узнаете о себе много нового. Часто с Матрицы Судьбы выстраивается верный Путь человека. В конце встречи вас ждёт розыгрыш приятного бонуса.",
  ],
  images: {
    teaPouring: "/images/women-meets/tea.png", // <- Укажите свой путь
    womanSmiling: "/images/women-meets/hair.png",
  },
}

const NumerologyTeaSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Заголовок и подзаголовок */}
        <header className="text-center">
          <h2 className="font-kurale text-5xl text-[#2E4F6C] md:text-6xl xl:text-7xl">
            {data.title}
          </h2>
          <p className="mt-4 font-jost text-lg text-[#2E4F6C]/80">
            {data.subtitle}
          </p>
        </header>

        <div className="mt-12">
          {/* Вступительный текст (общий для всех версий) */}
          <div className="mx-auto max-w-3xl space-y-4 text-left font-jost text-lg text-[#2E4F6C] md:max-w-none md:text-left">
            <p>{data.introParagraphs[0]}</p>
            <p className="hidden md:block">{data.introParagraphs[1]}</p>
          </div>

          {/* --- МОБИЛЬНАЯ ВЕРСИЯ БЛОКА С ФОТО (БЕЗ РАМКИ) --- */}
          <div className="relative mt-10 md:hidden">
            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src={data.images.teaPouring}
                alt="Чаепитие"
                className="h-full max-h-[300px] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <h3 className="font-jost text-2xl font-bold text-white">
                  {data.listTitle}
                </h3>
              </div>
            </div>
          </div>

          {/* --- ОСНОВНАЯ СЕТКА (ТЕКСТ + ДЕСКТОПНЫЕ ФОТО) --- */}
          <div className="mt-10 grid grid-cols-1 gap-x-16 md:grid-cols-2">
            {/* Левая колонка: Список */}
            <div className="flex flex-col">
              <h3 className="hidden font-jost text-3xl font-bold text-[#2E4F6C] md:block">
                {data.listTitle}
              </h3>
              <ol className="mt-8 space-y-8">
                {data.listItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-x-4 md:gap-x-6"
                  >
                    <span className="font-jost text-6xl font-bold leading-none text-[#2E4F6C]/20">
                      {index + 1}.
                    </span>
                    <p className="pt-2 font-jost text-base text-[#2E4F6C] md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Правая колонка: Коллаж из фото (только для десктопа) */}
            <div className="relative hidden min-h-[400px] md:block">
              <div className="absolute right-0 top-0 h-[280px] w-[320px] overflow-hidden rounded-[30px] shadow-lg md:h-[350px] xl:w-[400px]">
                <img
                  src={data.images.womanSmiling}
                  alt="Нумеролог"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 z-10 h-[300px] w-[350px] overflow-hidden rounded-[30px] shadow-xl xl:h-[380px] xl:w-[440px]">
                <img
                  src={data.images.teaPouring}
                  alt="Чаепитие"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NumerologyTeaSection
