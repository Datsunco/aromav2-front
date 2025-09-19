import React from "react"

const Benefits = () => {
  return (
    <div className="relative">
      {/* фоновая подложка под всю секцию как на скрине */}
      <div className="pointer-events-none absolute inset-0 -z-10" />

      <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center xl:mt-24">
        {/* Заголовок как на снимке */}
        <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
          <span className="font-literature text-[#2E4F6C]">Прогноз на год</span>
          <br />
        </h2>

        {/* Левый и правый декор из твоей базы */}
        <img
          src="/images/home/benefits/pip.png"
          alt="пипетка"
          className="absolute left-0 top-60 z-0 h-52 w-32 md:top-20 md:h-64 md:w-40 xl:top-10 xl:h-[469px] xl:w-72"
        />

        {/* Дополнительные светлые «капсулы» как подложки карточек */}
        {/* <div className="pointer-events-none absolute inset-x-0 top-[220px] mx-auto hidden h-[180px] max-w-4xl rounded-[40px] bg-white/60 shadow-[0_8px_40px_rgba(0,0,0,0.06)] blur-[2px] md:block" /> */}

        {/* Ряд карточек — сохраняем твою группу и стили, меняем контент */}
        <div className="mt-14 flex items-center gap-4">
          {/* Карточка 1: Ваши возможности */}
          <article className="relative z-10 mx-8 hidden h-fit w-full flex-col gap-6 rounded-[60px] bg-gradient-to-b from-white/50 to-white/10 p-8 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:mx-0 md:flex md:max-w-[220px] md:rounded-[33px] md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
            {/* маленькая иллюстрация карты как на скрине */}
            <img
              src="/images/numerology/card.png"
              alt="Карта Таро"
              className="absolute h-20 w-20 -rotate-[20deg] opacity-90 md:-bottom-10 md:-left-16 md:h-32 md:w-32 xl:-bottom-20 xl:-left-24 xl:h-40 xl:w-40"
            />
            <p className="font-jost text-xl/tight font-medium md:text-base">
              Ваши возможности
            </p>
            <p className="font-jost font-light md:text-sm">
              Покажу твои возможности в этом году, чтобы год стал
              запоминающимся.
            </p>
          </article>

          {/* Карточка 2: Ближайшее будущее (центральная, слегка акцентная) */}
          <article className="relative mx-4 w-full flex-col gap-4 rounded-[60px] bg-[#B3C3D2]/[34] bg-gradient-to-b from-white/50 to-white/10 px-8 py-12 shadow-[inset_9px_9px_26.4px_0_#2437E21A] md:mx-0 md:max-w-[220px] md:rounded-[40px] md:px-5 md:py-5 md:pb-10 xl:max-w-[300px] xl:py-6">
            {/* фиолетовая планета поверх карточки как на скрине */}
            {/* <div className="pointer-events-none absolute -top-8 left-1/2 z-10 h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#9C6BFF_0%,#4C2AA6_60%,#2B195E_100%)] shadow-[0_6px_24px_rgba(76,42,166,0.45)] md:h-16 md:w-16 xl:h-20 xl:w-20" /> */}
            <img
              src="/images/numerology/planet.png"
              alt="Иконка подарка"
              className="absolute -top-2 left-1/2 h-10 w-10 -translate-y-1/2 opacity-90 md:h-16 md:w-16 xl:-bottom-10 xl:-right-20 xl:h-24 xl:w-24"
            />
            <p className="font-jost text-xl/tight font-medium">
              Ближайшее будущее
            </p>
            <p className="font-jost font-light">
              По дате рождения сделаю расчёт Матрицы Судьбы и посмотрю, какие
              события ожидают в ближайший год.
            </p>
            <p className="font-jost text-base font-medium text-[#2E4F6C]">
              1500 руб.
            </p>
          </article>

          {/* Правая колонка с лавандой как в твоей базе */}
          <div className="relative hidden w-full max-w-sm md:flex">
            {/* <img
              src="/images/home/benefits/lavanda.png"
              alt="Лаванда"
              className="absolute z-0 md:-right-6 md:-top-[80px] md:h-40 md:w-24 xl:-right-24 xl:-top-[80px] xl:h-72 xl:w-48"
            /> */}
            {/* Карточка 3: Отличный подарок */}
            <article className="relative z-10 flex h-fit flex-col gap-6 rounded-[60px] bg-gradient-to-b from-white/50 to-white/10 p-8 pb-10 shadow-[inset_9px_9px_26.4px_0_#2437E21A] backdrop-blur-[2px] md:max-w-[220px] md:rounded-[33px] md:px-5 md:py-3 md:pb-10 xl:max-w-[300px] xl:py-6">
              {/* маленькая медитирующая иконка снизу-справа */}
              <img
                src="/images/numerology/human.png"
                alt="Иконка подарка"
                className="absolute -bottom-2 -right-10 h-10 w-10 opacity-90 md:h-16 md:w-16 xl:-bottom-10 xl:-right-20 xl:h-24 xl:w-24"
              />
              <p className="font-jost text-xl/tight font-medium md:text-base">
                Отличный подарок
              </p>
              <p className="font-jost font-light md:text-sm">
                Подарите прогноз в декабре — на Новый год или прогноз на День
                Рождения — личный новый год.
              </p>
            </article>
          </div>
        </div>

        {/* Кнопка как на макете */}
        <button className="mt-10 rounded-full bg-[#2E4F6C] px-8 py-3 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(46,79,108,0.35)] transition hover:bg-[#24445D] active:scale-[0.99]">
          СДЕЛАТЬ ПОДАРОК СЕБЕ ИЛИ БЛИЗКИМ
        </button>
      </section>
    </div>
  )
}

export default Benefits
