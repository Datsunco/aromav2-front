import { getEventById } from "@lib/data/event"
import { Event } from "types/event"
import { Metadata } from "next"
import Header from "@modules/default/header"

// import { notFound } from "next/navigation"
import { Calendar, MapPin, Clock } from "lucide-react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params

  const event: Event | null = await getEventById(id)

  if (!event) {
    return {
      title: "Мероприятие не найдено - Арома Вдохновение",
      description: "Запрашиваемое мероприятие не существует или было удалено",
      robots: { index: false, follow: true },
    }
  }

  const eventDate = new Date(event.start_date)
  const formattedDate = eventDate.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const isUpcoming = eventDate > new Date()
  const eventStatus = isUpcoming
    ? "🎯 Предстоящее мероприятие"
    : "📚 Прошедшее мероприятие"

  return {
    title: `${event.title} ${formattedDate} - Арома Вдохновение`,
    description: `${eventStatus}: ${event.description || event.title}. 🌿 ${
      event.location ? `Место: ${event.location}. ` : ""
    }Запись: +7 916 675-78-95`,
    keywords: [
      event.title,
      "мероприятие ароматерапия",
      "событие Мытищи",
      event.location,
      "Жанна Доценко",
      "встреча ароматерапия",
    ].filter(Boolean),
    openGraph: {
      title: event.title,
      description: `${eventStatus}: ${
        event.description || event.title
      }. ${formattedDate}`,
      // type: "event",
      images: event.image_urls?.urls?.[0]
        ? [
            {
              url: event.image_urls.urls[0],
              width: 1200,
              height: 630,
              alt: event.title,
            },
          ]
        : [
            {
              url: "/images/default-event-og.jpg",
              width: 1200,
              height: 630,
              alt: event.title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: `${eventStatus}: ${event.description || event.title}`,
    },
    alternates: {
      canonical: `/events/${id}`,
    },
    other: event.location
      ? {
          "event:location": event.location,
          "event:start_time": event.start_date,
        }
      : undefined,
  }
}

export default async function EventPage(props: Props) {
  const params = await props.params
  const { id } = params

  let event: Event | null
  try {
    event = await getEventById(id)
    console.error(event)
  } catch (error) {
    console.error("Error in EventPage:", error)
    notFound()
  }

  if (!event) {
    console.log("Event not found for ID:", id)
    notFound()
  }

  console.log("test", event)

  const eventDate = new Date(event.start_date)
  const isUpcoming = eventDate > new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>

      {/* <div className="">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад
          </Link>
        </div>
      </div> */}

      <div className="max-w-6xl md:mx-auto px-1 md:px-4 py-2">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Главное изображение */}
          {event && (
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={event.image_urls.urls?.[0] ?? "/aroma.jpg"}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />

              <div className="absolute bottom-36 md:bottom-52 left-8 md:left-14 text-white">
                <h1 className="text-4xl md:text-5xl font-bold font-acrom mb-2 drop-shadow-lg max-w-[600px]">
                  {event.title}
                  {/* Посиделки с пивом деовчками и рыбкой */}
                </h1>
                <h1 className="text-xl md:text-2xl font-acrom mb-2 drop-shadow-lg max-w-[600px]">
                  {event.location},{" "}
                  {format(eventDate, "d MMMM ", { locale: ru })}
                  {/* Посиделки с пивом деовчками и рыбкой */}
                </h1>
              </div>

              <div className="absolute bottom-6 md:bottom-12  left-8 md:left-14  text-white">
                <button className="w-full bg-[#B4C3D2] hover:bg-[#9BB0C4] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                  Записаться на мероприятие
                </button>
              </div>
            </div>
          )}

          <div className="p-8">
            {/* Информация о мероприятии */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-[#B4C3D2]" />
                    <span className="font-medium">
                      {format(eventDate, "d MMMM yyyy", { locale: ru })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2 text-[#B4C3D2]" />
                    <span className="font-medium">
                      {format(eventDate, "HH:mm")}
                    </span>
                  </div>
                  {event.location && (
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-[#B4C3D2]" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  )}
                </div>

                {event.description && (
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                      О мероприятии
                    </h2>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {event.description}
                    </div>
                  </div>
                )}
              </div>

              {/* Боковая панель */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Детали мероприятия
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Дата
                    </span>
                    <p className="text-lg font-semibold text-gray-900">
                      {format(eventDate, "d MMMM yyyy", { locale: ru })}
                    </p>
                  </div>

                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Время
                    </span>
                    <p className="text-lg font-semibold text-gray-900">
                      {format(eventDate, "HH:mm")}
                    </p>
                  </div>

                  {event.location && (
                    <div>
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        Место
                      </span>
                      <p className="text-lg font-semibold text-gray-900">
                        {event.location}
                      </p>
                    </div>
                  )}
                </div>

                {/* {isUpcoming && ( */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-[#B4C3D2] hover:bg-[#9BB0C4] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300">
                    Записаться на мероприятие
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Свяжитесь с нами для записи
                  </p>
                </div>
                {/* )} */}
              </div>
            </div>

            {/* Галерея изображений */}
            {event.image_urls && event.image_urls.urls.length > 1 && (
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Фотогалерея
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.image_urls.urls.slice(1).map((url, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={url}
                        alt={`${event.title} - фото ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// import { Metadata } from "next"
// import { notFound } from "next/navigation"
// import Link from "next/link"
// import { getEventById } from "@lib/data/event"

// interface EventPageProps {
//   params: Promise<{
//     countryCode: string
//     id: string
//   }>
// }

// export default async function EventPage({ params }: EventPageProps) {
//   const resolvedParams = await params
//   const { id } = resolvedParams

//   console.log("Event ID:", id) // Для отладки

//   let event
//   try {
//     event = await getEventById(id)
//     console.error(event)
//   } catch (error) {
//     console.error("Error in EventPage:", error)
//     // notFound()
//   }

//   if (!event) {
//     console.log("Event not found for ID:", id)
//     // notFound()
//     return null
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-4xl mx-auto">
//         <Link
//           href="/"
//           className="inline-block mb-6 text-blue-600 hover:text-blue-800"
//         >
//           ← Вернуться на главную
//         </Link>

//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

//           {event.title && (
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-2">Описание</h2>
//               <p className="text-gray-700">{event.title}</p>
//             </div>
//           )}

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold mb-2">Дата и время</h3>
//               <p className="text-gray-700">
//                 {new Date(event.start_date).toLocaleString("ru-RU")}
//               </p>
//             </div>

//             {event.location && (
//               <div>
//                 <h3 className="font-semibold mb-2">Место проведения</h3>
//                 <p className="text-gray-700">{event.location}</p>
//               </div>
//             )}
//           </div>

//           {event.image_urls && event.image_urls.urls.length > 0 && (
//             <div className="mt-8">
//               <h3 className="font-semibold mb-4">Изображения</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {event.image_urls.urls.map((url, index) => (
//                   <img
//                     key={index}
//                     src={url}
//                     alt={`${event.title} - изображение ${index + 1}`}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-8 p-4 bg-gray-100 rounded-lg">
//             <h3 className="font-semibold mb-2">Отладочная информация</h3>
//             <pre className="text-sm text-gray-600">
//               {JSON.stringify(event, null, 2)}
//             </pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export async function generateMetadata({
//   params,
// }: EventPageProps): Promise<Metadata> {
//   const resolvedParams = await params
//   const { id } = resolvedParams

//   try {
//     const event = await getEventById(id)

//     if (!event) {
//       return {
//         title: "Мероприятие не найдено",
//       }
//     }

//     return {
//       title: `${event.title} - Арома Вдохновение`,
//       description: event.title || `Мероприятие ${event.title}`,
//     }
//   } catch (error) {
//     return {
//       title: "Ошибка загрузки мероприятия",
//     }
//   }
// }
