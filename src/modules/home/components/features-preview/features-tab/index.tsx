import { Button } from "@medusajs/ui"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@modules/layout/components/tabs"
import FeatCard from "../feat-card"

const tabs = [
  {
    value: "service",
    label: "Услуги",
  },
  {
    value: "events",
    label: "Мероприятия",
  },
  {
    value: "products",
    label: "Товары",
  },
  {
    value: "other",
    label: "Что-то еще",
  },
]

const services = [
  {
    value: "service",
    label: "Прием аромотерапии",
    description: "Прием аромотерапии",
    image: "/images/aromotherapy.png",
  },
  {
    value: "service",
    label: "Нумерологический разбор",
    description: "Прием аромотерапии",
    image: "/images/numerology.png",
  },
  {
    value: "service",
    label: "Нумерологический разбор",
    description: "Прием аромотерапии",
    image: "/images/numerology.png",
  },
  {
    value: "service",
    label: "Прием аромотерапии",
    description: "Прием аромотерапии",
    image: "/images/aromotherapy.png",
  },
  {
    value: "service",
    label: "Прием аромотерапии",
    description: "Прием аромотерапии",
    image: "/images/aromotherapy.png",
  },
  {
    value: "service",
    label: "Прием аромотерапии",
    description: "Прием аромотерапии",
    image: "/images/aromotherapy.png",
  },
]

export function TabsDemo() {
  return (
    <Tabs
      defaultValue={tabs[0].value}
      className="mt-12 w-[350px] md:w-[932px] h-[300px] md:h-[632px]"
    >
      <TabsList className="grid w-full grid-cols-4 bg-[#F5F5F5] rounded-[40px] h-[50px] px-1 gap-1 lg:gap-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="font-acrom h-full text-xs rounded-[40px] data-[state=active]:bg-black data-[state=active]:text-white"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* Товары
        </TabsTrigger>
        <TabsTrigger
          value="other"
          className="font-acrom h-full rounded-[40px] data-[state=active]:bg-black data-[state=active]:text-white"
        >
          Что-то еще
        </TabsTrigger> */}
      <TabsContent value="service">
        <div className=" flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pt-4 overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0">
              <FeatCard
                key={index}
                title={service.label}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="events">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pt-4 overflow-hidden">
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0">
              <FeatCard
                key={index}
                title={service.label}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="products"></TabsContent>
      <TabsContent value="other"></TabsContent>
    </Tabs>
  )
}
