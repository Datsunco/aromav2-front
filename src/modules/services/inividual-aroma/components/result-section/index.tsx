import Comma from "icons/comma"
import Image from "next/image"
import Link from "next/link"
// import { ExternalLink } from "lucide-react"
// import { div } from "@/components/ui/div"

export default function ResultsSection() {
  const testimonials = [
    {
      name: "Елена",
      text: "После консультации с Жанной и использования индивидуальной ароматерапевтической композиции я заметила значительное улучшение сна и снижение тревожности. Очень благодарна за профессиональный подход!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Александр",
      text: "Никогда не думал, что ароматерапия может так помочь с концентрацией и работоспособностью. Композиция, которую создала для меня Жанна, стала незаменимым помощником в рабочие дни.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Мария",
      text: "Обратилась с проблемой хронической усталости. После курса ароматерапии почувствовала прилив энергии и улучшение общего самочувствия. Рекомендую всем, кто хочет естественным путем улучшить качество жизни.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const articles = [
    {
      title: "Эфирные масла для улучшения сна",
      link: "https://t.me/channel/article1",
    },
    {
      title: "Ароматерапия при стрессе и тревожности",
      link: "https://t.me/channel/article2",
    },
    {
      title: "Как правильно выбрать эфирные масла",
      link: "https://t.me/channel/article3",
    },
    {
      title: "Ароматерапия для повышения концентрации",
      link: "https://t.me/channel/article4",
    },
  ]

  return (
    <div className="px-2">
      <section className="w-full max-w-6xl container mx-auto px-8 py-16 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-acrom">
          Что вы получите в результате
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-gradient-to-b  from-blue-400 to-blue-600 bg-opacity-20  text-white">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M3 5h4" />
                <path d="M19 17v4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">
              Улучшение эмоционального состояния
            </h3>
            <p>
              Индивидуально подобранные ароматы помогут снизить уровень стресса,
              тревожности и улучшить настроение.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white shadow-sm">
            <div className="h-12 w-12 rounded-full bg-[#E4CFB7] flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap text-gray-600"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">
              Повышение энергии и работоспособности
            </h3>
            <p className="text-gray-600">
              Правильно подобранные эфирные масла помогут бороться с усталостью
              и повысят вашу продуктивность.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white shadow-sm">
            <div className="h-12 w-12 rounded-full bg-[#E4CFB7] flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-moon-star text-gray-600"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                <path d="M19 3v4" />
                <path d="M21 5h-4" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">Улучшение качества сна</h3>
            <p className="text-gray-600">
              Специальные ароматические композиции помогут нормализовать сон и
              избавиться от бессонницы.
            </p>
          </div>
        </div>

        {/* <h3 className="text-2xl font-bold mb-8">Истории клиентов</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 rounded-xl bg-white shadow-sm">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-medium">{testimonial.name}</h4>
            </div>
            <p className="text-gray-600 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div> */}

        <h3 className="text-2xl font-bold mb-8">
          Полезные статьи из моего Телеграм-канала
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.link}
              target="_blank"
              className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <span className="flex-1 text-purple-800">{article.title}</span>
              <Comma className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
