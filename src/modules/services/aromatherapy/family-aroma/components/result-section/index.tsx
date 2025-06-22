"use client"

import Comma from "icons/comma"
import Link from "next/link"

export default function ResultsSection() {
  const articles = [
    {
      title: "Как ароматы влияют на отношения",
      link: "https://t.me/channel/article1",
    },
    {
      title: "Совместные ритуалы для пар",
      link: "https://t.me/channel/article2",
    },
    {
      title: "Ароматы для гармонии в паре",
      link: "https://t.me/channel/article3",
    },
  ]

  return (
    <div className="px-2">
      <section className="w-full max-w-6xl container mx-auto px-8 py-16 bg-gray-50 rounded-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center font-acrom">
          Что изменится в ваших отношениях
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-400 to-blue-600 text-white">
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
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">
              Более глубокая близость
            </h3>
            <p>
              Совместные ароматические ритуалы создают новую форму близости и
              доверия в паре.
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
                className="lucide lucide-sparkles text-gray-600"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">
              Улучшение интимной сферы
            </h3>
            <p className="text-gray-600">
              Специально подобранные ароматы мягко усиливают сексуальную
              гармонию.
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
                className="lucide lucide-scales text-gray-600"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
              </svg>
            </div>
            <h3 className="text-xl font-acrom font-semibold mb-3">
              Гармония и баланс
            </h3>
            <p className="text-gray-600">
              Ароматы помогают сгладить конфликты и найти баланс в отношениях.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-8">Полезные статьи о парах</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
