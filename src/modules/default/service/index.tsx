import React from "react"

import ServiceCard from "./components/service-card"
import { ServiceCardType } from "types/service"

interface ServiceListProps {
  serviceList: ServiceCardType[]
}

const ServiceList = ({ serviceList }: ServiceListProps) => {
  return (
    <div className="flex flex-col gap-y-10 mt-10 lg:ml-auto">
      <h2 className="font-acrom text-3xl font-medium">Наши услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto justify-center items-center w-full">
        {serviceList.map((serviceItem) => {
          return(
            <ServiceCard
            {...serviceItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ServiceList
