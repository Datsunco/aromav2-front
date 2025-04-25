import React from "react"

import clsx from "clsx"
import { ServiceCardType } from "types/service"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ServiceCard = ({
  title,
  img,
  classname,
  type,
  time,
  link,
}: ServiceCardType) => {
  return (
    <LocalizedClientLink
      href={link}
      className=""
      data-testid="back-to-cart-link"
    >
      <div
        className={clsx(
          "w-full h-[180px] rounded-3xl p-6 flex items-start gap-x-4 transition-all duration-300 hover:scale-[102%] hover:shadow-lg cursor-pointer",
          "lg:w-[400px]",
          classname
        )}
      >
        <div className="flex flex-col gap-y-2">
          <p className="text-gray-600 text-sm">{type}</p>
          <h3 className=" text-lg/6 font-medium max-w-[250px]">{title}</h3>
          <p className="text-gray-600 text-sm mt-8">{time}</p>
        </div>
        <img
          src={img}
          alt={title}
          className="w-[90px] h-[90px] ml-auto rounded-2xl"
        />
      </div>
    </LocalizedClientLink>
  )
}

export default ServiceCard
