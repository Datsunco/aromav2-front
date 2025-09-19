import Header from "@modules/default/header"

import Banner from "@modules/default/banner"
import ServiceList from "@modules/default/service"

import { ServiceCardType } from "types/service"
import GirlsBanner from "../v2components/banner"
import Types from "../v2components/types"
import HolidaySection from "../v2components/info"
import Benefits from "../v2components/benefits"
import EventsScroll from "../v2components/event-scroll"
import { Event } from "types/event"
import { listEvents } from "@lib/data/event"
import BigGirlBirthday from "../v2components/big-girl-birthday"
import Appointment from "@modules/default/appointment"
import InfoBlock from "@modules/default/info-first-block"
import Review from "@modules/checkout/components/review"
import ReviewCarousel from "@modules/default/reviews"
import FunctionsList from "@modules/home/v2components/functions-list"
import NumerologyTeaSection from "../v2components/tea"

const data: ServiceCardType[] = [
  {
    type: "Мероприятие",
    title: "Создание ресурсного аромата",
    link: "/services/resource-aroma",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
  {
    type: "Мероприятие",
    title: "Создание индивидуального парфюма",
    link: "/services/individual-parfume",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#C7F9D4]",
  },
  {
    type: "Мероприятие",
    title: "Архетипы и аромаплатье",
    link: "/services/aroma-dress",
    img: "/images/creationaromo.png",
    time: "3 часа",
    classname: "bg-[#FFEFC8]",
  },
  // {
  //   type: "Мероприятие",
  //   title: "Создание ресурсного аромата по дате рождения",
  //   link: "/",
  //   img: "/images/creationaromo.png",
  //   time: "3 часа",
  //   classname: "bg-[#E9E9F5]",
  // },
  // {
  //   type: "Мероприятие",
  //   title: "Пятничные посиделки",
  //   link: "/",
  //   img: "",
  //   time: "3 часа",
  //   classname: "bg-[#F8F8F8]",
  // },
  // {
  //   type: "Мероприятие",
  //   title: "День Рождения Большой ДЕВОЧКИ",
  //   link: "/",
  //   img: "",
  //   time: "3 часа",
  //   classname: "bg-[#FFEFC8]",
  // },
]

export default async function WomanMeetTemplate({
  events,
}: {
  events: Event[]
}) {
  const data = await listEvents()

  return (
    <div className="">
      <GirlsBanner />
      {/* <HolidaySection /> */}
      <Types />
      {/* <Benefits /> */}
      <EventsScroll events={events} />
      <NumerologyTeaSection />
      {/* <BigGirlBirthday /> */}
      <div className="mx-4 mt-20 max-w-5xl rounded-[60px] bg-white pt-12 md:mx-auto md:mt-40">
        <InfoBlock
          imgSrc={[
            "/images/girls/team.jpg",
            "/images/aromotherapy/child/boy.jpg",
          ]}
        >
          <div className="">
            <h1 className="font-jost text-[40px]/10 font-normal tracking-tight text-black">
              <span className="font-literature text-3xl font-medium text-[#2E4F6C]">
                Ароматический сеанс
              </span>{" "}
              - ваш путь к энергии и бодрости
            </h1>
            {/* <p className="max-w-xl font-acrom text-lg/5 font-medium text-gray-600">
              Ароматерапия помогает детям гармонично развиваться, укрепляет
              иммунитет и создаёт основу для здоровой взрослой жизни. Особенно
              важна работа с обонянием — ключевым чувством, которое в
              современном мире часто остаётся неразвитым.
            </p> */}
          </div>
        </InfoBlock>
      </div>
      <Appointment />
      <FunctionsList />
      <ReviewCarousel />
      {/* <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      <section className="max-w-6xl mx-auto flex flex-col mt-2 md:mt-8 lg:mt-16">
        <Banner img="/images/wonem-meet.png" title={"Девичники"} />
        <div className="flex min-h-[800px] mt-10 flex-col lg:flex-row px-2">
          <ServiceList serviceList={data} />
        </div>
      </section> */}
    </div>
  )
}
