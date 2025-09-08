import Header from "@modules/default/header"
import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"
import AromaBanner from "../v2components/banner"

const data: ServiceCardType[] = [
  {
    type: "Услуга",
    title: "Индивидуальный прием ароматолога",
    link: "/services/individual-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#FFEFC8]",
  },
  {
    type: "Услуга",
    title: "Для пары. Гармонизация отношений",
    link: "/services/family-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Услуга",
    title: "Аромасеанс Вместе с мамой",
    link: "/services/mom-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Услуга",
    title: "Прием ароматолога для детей",
    link: "/services/child-aroma",
    img: "/images/creationaromo.png",
    time: "2 часа",
    classname: "bg-[#E9E9F5]",
  },
]

export default function AromatherapyTemplate({}: {}) {
  return (
    <div className="">
      <AromaBanner />
      {/* <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      <section className="max-w-6xl mx-auto flex flex-col mt-2 md:mt-8 lg:mt-16">
        <Banner title="Ароматерапия" img="/images/test.png" />
        <div className="flex min-h-[800px] mt-10 flex-col lg:flex-row px-2">
          <ServiceList serviceList={data} />
        </div>
      </section> */}
    </div>
  )
}
