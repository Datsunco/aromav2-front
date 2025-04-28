import Check from "icons/check"
import Image from "next/image"
import React from "react"

const SecondInfoBlock = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-10">
      <h1 className="text-5xl font-semibold mb-16 font-acrom">
        Кратко про терапию
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex gap-3 md:block">
          <div className="bg-black rounded-full min-w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mb-6">
            <Check className="text-white w-5 h-5" />
          </div>
          <div className="">
            <h2 className="text-2xl/6 font-bold mb-4">Ароматестирование</h2>
            <p className="text-base/4 font-medium text-gray-600 font-acrom">
              На сеансе вы проходите обонятельное тестирование, чтобы
              определить, какие эфирные масла наиболее подходят именно вам для
              поддержки и восстановления.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex gap-3 md:block">
          <div className="bg-black rounded-full min-w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mb-6">
            <Check className="text-white w-5 h-5" />
          </div>
          <div className="">
            <h2 className="text-2xl/6 font-bold mb-4">
              Индивидуальная программа
            </h2>
            <p className="text-base/4 font-medium text-gray-600 font-acrom">
              После тестирования я составляю для вас персональную ароматограмму
              и разрабатываю индивидуальную программу ароматерапии, учитывая
              ваши цели и состояние.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex gap-3 md:block">
          <div className="bg-black rounded-full min-w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mb-6">
            <Check className="text-white w-5 h-5" />
          </div>
          <div className="">
            <h2 className="text-2xl/6 font-bold mb-4">
              Путь к гармонии и ресурсному состоянию
            </h2>
            <p className="text-base/4 font-medium text-gray-600 font-acrom">
              Уже через несколько месяцев индивидуальной работы по методу
              Арома-код вы почувствуете новые силы, ясность мыслей и внутренний
              баланс. Это красивое познание себя для тех, кому важно понимать и
              чувствовать себя.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondInfoBlock
