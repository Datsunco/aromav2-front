import React from "react"

// Все данные вынесены для удобства редактирования
const data = {
  title: "Матрица судьбы",
  subtitle: "Познавать себя. Что может быть интереснее?",
  introParagraphs: [
    `Матрица Судьбы - это карта судьбы человека. 
Всё есть энергия. И человек -  набор энергий. Ключ к пониманию, код человека - дата рождения. \n\r

В этих цифрах зашифрована ваша судьба. Ваши задачи, предназначения, способности, таланты, ваши отношения с людьми и деньгами, события вашей жизни и трудности, - вся ваша жизнь.
И чтобы жизнь складывалась более управляемо, хорошо знать свою Матрицу.`,
  ],
  listTitle: "Что вас ждет на встрече?",
  listItems: [
    "Я расшифрую вашу дату рождения. И вы узнаете о себе много нового и найдёте ответы на большинство вопросов.",
    "Если вы хотите понять, в чём ваше предназначение. Если у вас вроде всё хорошо, но нет радости в жизни. Если чувствуете в себе большой потенциал, но не знаете, как применить. Если давно хотите сменить работу, но не знаете в какую сферу податься.",
    "Консультация проходит онлайн. Вы задаёте интересующие вас вопросы - я отвечаю и помогаю вам двигаться по жизни по верной дороге. Не плутая во тьме. Подсвечиваю вам путь 💡Часто с Матрицы Судьбы выстраивается верный Путь человека. Пришло время стать СОБОЙ.",
  ],
  images: {
    womanSmiling: "/images/numerology/needle2.png ",
    teaPouring: "/images/numerology/trash.jpg", // <- Укажите свой путь
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
