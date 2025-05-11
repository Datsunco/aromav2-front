import Check from "icons/check"
import React from "react"

interface FactsBlockProps {
  title: string
  features: { title: string; description: string }[]
}

const FactsBlock = ({ title, features }: FactsBlockProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-10">
      <h1 className="text-4xl md:text-5xl font-semibold mb-16 font-acrom">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        {features.map((item) => (
          <div className="bg-[#F5F5F5] rounded-[32px] p-8 flex gap-3 md:block">
            <div className="bg-black rounded-full min-w-6 h-6 md:w-8 md:h-8 flex items-center justify-center mb-6">
              <Check className="text-white w-5 h-5" />
            </div>
            <div className="">
              <h2 className="text-2xl/6 font-bold mb-4">{item.title}</h2>
              <p className="text-base/4 font-medium text-gray-600 font-acrom">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FactsBlock
