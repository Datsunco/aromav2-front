import React from "react"

import clsx from "clsx"

interface ServicePropsCard {
  title: string
  img: string
  classname: string
}

const ServiceCard = ({ title, img, classname }: ServicePropsCard) => {
  return (
    <div
      className={clsx(
        "w-[400px] h-[180px] rounded-3xl p-6 flex items-start gap-x-4 transition-all duration-300 hover:scale-[102%] hover:shadow-lg cursor-pointer",
        classname
      )}
    >
      <div className="flex flex-col gap-y-2">
        <p className="text-gray-600 text-sm">Мероприятие</p>
        <h3 className=" text-lg/6 font-medium max-w-[250px]">{title}</h3>
        <p className="text-gray-600 text-sm mt-8">3 часа</p>
      </div>
        <img
          src="/images/creationaromo.png"
          alt="Ароматерапия"
          className="w-[90px] h-[90px] ml-auto rounded-2xl"
        />
    </div>
  )
}

export default ServiceCard
