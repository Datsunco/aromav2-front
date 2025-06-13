import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Event } from "types/event"

export default function EventListing({ events }: { events: Event[] }) {
  return (
    <div className="sm:container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold  font-acrom">Список мероприятий</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((item) => {
          return <EventCard key={item.id} {...item} />
        })}
        {/* Event Card 1 */}
      </div>
    </div>
  )
}

function EventCard({
  title,
  subtitle,
  description,
  start_date,
  image_urls,
  id,
}: Event) {
  return (
    <Link href={`/events/${id}`}>
      <div className="rounded-lg overflow-hidden bg-white shadow-md">
        <div className="relative">
          <Image
            src={
              image_urls.urls?.[0]
                ? image_urls.urls?.[0]
                : "/images/creationaromo.png"
            }
            alt={title}
            width={600}
            height={400}
            className="w-full h-[200px] object-cover"
          />

          {/* Rating Badge */}
          {/* {rating && (
          <div className="absolute top-4 left-4 bg-green-500 text-white font-bold rounded-full px-3 py-1">
            {rating}
          </div>
        )} */}

          {/* Favorite Button */}
          <button className="absolute top-4 right-4 text-white">
            <Heart className="w-7 h-7 stroke-white fill-transparent hover:fill-white transition-all" />
          </button>
        </div>

        {/* Event Details */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="text-gray-500 flex flex-col">
            <div className="flex items-center gap-2">
              <span>
                {format(new Date(start_date), "d MMMM ", { locale: ru })}
              </span>
              {/* {venue && (
              <>
                <span className="text-gray-300">•</span>
                <span>{venue}</span>
              </>
            )} */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
