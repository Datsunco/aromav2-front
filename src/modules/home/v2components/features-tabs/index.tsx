import { Button } from "@medusajs/ui"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@modules/layout/components/tabs"
import FeatCard from "./card"

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
  // {
  //   value: "other",
  //   label: "Что-то еще",
  // },
]

const services = [
  {
    value: "service",
    label: "Прием ароматолога",
    description: "Прием аромотерапии",
    image: "/images/home/tabs/aroma.png",
  },
  {
    value: "service",
    label: "Нумерологический разбор",
    description: "Нумерологический разбор",
    image: "/images/home/tabs/numeric.png",
  },
  {
    value: "service",
    label: "Создание индивидуального парфюма",
    description: "Создание индивидуального парфюма",
    image: "/images/home/tabs/parf2.jpg",
  },
  {
    value: "service",
    label: "Создание ресурсного аромата",
    description: "Создание ресурсного аромата",
    image: "/images/home/tabs/resource2.jpg",
  },
  {
    value: "service",
    label: "Кофе с психологом",
    description: "Кофе с психологом",
    image: "/images/home/tabs/coffeepng.png",
  },
  {
    value: "service",
    label: "Прогноз на год",
    description: "Прогноз на год",
    image: "/images/home/tabs/predict.png",
  },
]

const FeaturesTabs = () => {
  return (
    <section className="mx-auto mt-14 flex max-w-5xl flex-col items-center justify-center xl:mt-24">
      <h2 className="max-w-xl text-center font-acrom text-[30px] font-bold md:text-[35px]/none xl:text-[45px]/none">
        Выберите то, что вам
        <br />
        <span className="font-literature text-[#2E4F6C]">по душе</span>
      </h2>
      <Tabs
        defaultValue={tabs[0].value}
        className="mt-12 h-[530px] w-[300px] md:h-[492px] md:w-[593px] xl:h-[700px] xl:w-[932px]" // w-[350px] md:w-[932px] h-[300px] md:h-[632px]
      >
        <TabsList className="grid h-[50px] w-full grid-cols-3 gap-1 rounded-[40px] bg-[#F5F5F5] px-1 lg:gap-2">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="h-full rounded-[40px] font-acrom text-xs data-[state=active]:bg-black data-[state=active]:text-white"
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
          <div className="grid grid-cols-2 gap-2 overflow-hidden pt-2 md:grid-cols-3">
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
          <div className="grid grid-cols-2 gap-2 overflow-hidden pt-2 md:grid-cols-3">
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
      <div className="flex gap-4"></div>
    </section>
  )
}

export default FeaturesTabs
