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
            <h2 className="text-2xl/6 font-bold mb-4">
              Почувствуйте себя через ароматы
            </h2>
            <p className="text-base/4 font-medium text-gray-600 font-acrom">
              На сеансе ароматерапии вы вдыхаете ароматы, погружаетесь в
              великолепные ощущения, расслабляетесь, и ваш организм говорит
              через ароматы, что ему нужно для счастья.
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
              После вашего ухода я составлю вашу ароматограмму. И пришлю вам
              информацию о состоянии вашего организма, а также предложу
              индивидуальную программу ароматерапии.
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
              Постепенно погрузитесь в профессию
            </h2>
            <p className="text-base/4 font-medium text-gray-600 font-acrom">
              Изучите основы математики и статистики, а затем на продвинутом
              уровне изучите машинное обучение или анализ данных на выбор.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondInfoBlock
