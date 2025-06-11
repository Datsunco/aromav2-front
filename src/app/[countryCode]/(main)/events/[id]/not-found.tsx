import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Мероприятие не найдено
        </h2>
        <p className="text-gray-600 mb-8">
          К сожалению, запрашиваемое мероприятие не существует или было удалено.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#B4C3D2] hover:bg-[#9BB0C4] text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
