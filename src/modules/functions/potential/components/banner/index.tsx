"use client"

import type React from "react"
import { useState } from "react"
// import { Sparkles, ChevronDown, Loader2 } from "lucide-react"
import { Loader } from "@medusajs/icons"
import ChevronDown from "@modules/common/icons/chevron-down"
import { Card, CardContent, CardHeader, CardTitle } from "components/card"
import Input from "@modules/common/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "components/select"
import { motion, AnimatePresence } from "framer-motion"

export default function BirthDatePotential() {
  const [birthDate, setBirthDate] = useState("")
  const [name, setName] = useState("")
  const [gender, setGender] = useState("female")
  const [showResult, setShowResult] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState(0)
  const [activeTab, setActiveTab] = useState("general")

  const loadingSteps = [
    "Анализ даты рождения...",
    "Расчет числовых значений...",
    "Определение потенциала...",
    "Формирование рекомендаций...",
    "Готово!",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setLoadingStep(0)

    // Имитация процесса загрузки с шагами
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            setShowResult(true)
          }, 500)
          return prev
        }
        return prev + 1
      })
    }, 800)
  }

  const resetForm = () => {
    setBirthDate("")
    setName("")
    setShowResult(false)
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2 md:px-4 py-0">
      <div className="bg-[#f3e6ff] rounded-3xl md:p-12 relative overflow-hidden">
        <div className="max-w-3xl">
          <div className="px-8 pt-12 md:p-8 ">
            <h1 className="text-4xl md:text-5xl font-acrom font-semibold mb-6">
              Узнать потенциал по дате рождения
            </h1>
            <p className="text-lg mb-8">
              Раскройте свой истинный потенциал и узнайте о скрытых талантах,
              которые заложены в вашей дате рождения. Нумерологический анализ
              поможет вам лучше понять себя и свой жизненный путь.
            </p>
          </div>
          <AnimatePresence mode="wait">
            {!showResult && !isLoading && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="p-3 md:p-8 "
              >
                <div className="bg-[#2e1a47] rounded-3xl p-6 md:p-8 shadow-xl">
                  <div className="flex mb-6 space-x-2 overflow-x-auto">
                    {[{ id: "general", label: "Общая" }].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full text-white whitespace-nowrap transition-all ${
                          activeTab === tab.id
                            ? "bg-[#b84bff]"
                            : "bg-[#3d2a5c] bg-opacity-50 hover:bg-opacity-70"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger className="w-full bg-white rounded-full h-14 px-6 text-base">
                          <SelectValue placeholder="Выберите пол" />
                          {/* <ChevronDown className="h-5 w-5 opacity-50" /> */}
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="male">Мужской пол</SelectItem>
                          <SelectItem value="female">Женский пол</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white rounded-full h-14 px-6 text-base"
                        placeholder="Имя"
                        required
                      />
                    </div>

                    <div>
                      <Input
                        type="text"
                        // placeholder="ДД.ММ.ГГГГ"

                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full bg-white rounded-full h-14 px-6 text-base"
                        required
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => {
                          if (!e.target.value) e.target.type = "text"
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-14 rounded-full font-medium text-white text-lg mt-4
                        bg-gradient-to-r from-[#b84bff] to-[#3b82f6] hover:opacity-90 transition-all"
                    >
                      РАССЧИТАТЬ ПОТЕНЦИАЛ
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#2e1a47] rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="relative mb-8">
                    <Loader className="h-16 w-16 text-[#b84bff] animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-bold">
                        {Math.min(loadingStep + 1, loadingSteps.length)}/
                        {loadingSteps.length}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-2">
                    {loadingSteps[loadingStep]}
                  </h3>

                  <div className="w-full max-w-md bg-[#3d2a5c] rounded-full h-2 mt-4">
                    <div
                      className="bg-gradient-to-r from-[#b84bff] to-[#3b82f6] h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          ((loadingStep + 1) / loadingSteps.length) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}

            {showResult && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#2e1a47] rounded-3xl p-6 md:p-8 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <ChevronDown className="h-8 w-8 text-[#b84bff]" />
                    <h2 className="text-2xl font-serif">Ваш потенциал</h2>
                  </div>

                  <div className="text-[#b3a8c0] mb-8">
                    Результаты анализа для {name}, {birthDate}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4 text-white">
                        Основные числа
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-[#3d2a5c] p-4 rounded-xl text-center">
                          <div className="text-3xl font-bold text-[#b84bff]">
                            7
                          </div>
                          <div className="text-sm text-[#b3a8c0] mt-1">
                            Число жизненного пути
                          </div>
                        </div>
                        <div className="bg-[#3d2a5c] p-4 rounded-xl text-center">
                          <div className="text-3xl font-bold text-[#b84bff]">
                            4
                          </div>
                          <div className="text-sm text-[#b3a8c0] mt-1">
                            Число выражения
                          </div>
                        </div>
                        <div className="bg-[#3d2a5c] p-4 rounded-xl text-center">
                          <div className="text-3xl font-bold text-[#b84bff]">
                            9
                          </div>
                          <div className="text-sm text-[#b3a8c0] mt-1">
                            Число души
                          </div>
                        </div>
                        <div className="bg-[#3d2a5c] p-4 rounded-xl text-center">
                          <div className="text-3xl font-bold text-[#b84bff]">
                            2
                          </div>
                          <div className="text-sm text-[#b3a8c0] mt-1">
                            Число личности
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-[#3d2a5c] w-full"></div>

                    <div>
                      <h3 className="text-xl font-medium mb-4 text-white">
                        Ваш потенциал
                      </h3>
                      <div className="space-y-4 text-[#b3a8c0]">
                        <p>
                          Ваше число жизненного пути{" "}
                          <span className="text-white font-medium">7</span>{" "}
                          указывает на глубокий аналитический ум и склонность к
                          духовным поискам. Вы обладаете сильной интуицией и
                          способностью видеть скрытые связи между явлениями.
                        </p>
                        <p>
                          Число выражения{" "}
                          <span className="text-white font-medium">4</span>{" "}
                          говорит о вашей практичности, надежности и
                          организованности. Вы умеете структурировать хаос и
                          создавать прочный фундамент для будущих достижений.
                        </p>
                        <p>
                          Число души{" "}
                          <span className="text-white font-medium">9</span>{" "}
                          раскрывает вашу гуманистическую натуру и стремление
                          помогать другим. Вы обладаете врожденной мудростью и
                          способностью к состраданию.
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-[#3d2a5c] w-full"></div>

                    <div>
                      <h3 className="text-xl font-medium mb-4 text-white">
                        Рекомендации
                      </h3>
                      <ul className="space-y-3 text-[#b3a8c0]">
                        <li className="flex items-start gap-3">
                          <div className="min-w-5 h-5 rounded-full bg-[#b84bff] mt-1"></div>
                          Развивайте свои аналитические способности через
                          изучение сложных систем
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-5 h-5 rounded-full bg-[#b84bff] mt-1"></div>
                          Уделяйте время духовным практикам и медитации
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-5 h-5 rounded-full bg-[#b84bff] mt-1"></div>
                          Используйте свою интуицию при принятии важных решений
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-5 h-5 rounded-full bg-[#b84bff] mt-1"></div>
                          Создавайте структуру и порядок в повседневной жизни
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="min-w-5 h-5 rounded-full bg-[#b84bff] mt-1"></div>
                          Найдите способы применить свои гуманистические
                          ценности на практике
                        </li>
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full h-14 rounded-full font-medium text-white text-lg mt-8
                      bg-gradient-to-r from-[#b84bff] to-[#3b82f6] hover:opacity-90 transition-all"
                  >
                    РАССЧИТАТЬ ДЛЯ ДРУГОЙ ДАТЫ
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 pointer-events-none opacity-80 hidden md:block">
          <div className="relative w-full h-full">
            <div className="absolute right-12 bottom-12 w-32 h-32 bg-[#ffecd9] rounded-full"></div>
            <div className="absolute right-24 bottom-24 w-48 h-48 border-2 border-[#3b82f6]/20 rounded-full"></div>
            <div className="absolute right-36 bottom-8 w-16 h-16 bg-[#3b82f6]/10 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              Откройте свои энергии
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Узнайте, какие архетипы в вас живут и как их балансировать для
              гармоничной жизни.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              Создайте аромат-трансформер
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Индивидуальная парфюмерная композиция для нужного состояния и
              настроения.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              Примерьте новую себя
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Через аромат активируйте желаемые качества характера и раскройте
              свой потенциал.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-xl font-serif">
              Волшебный инструмент
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Готовое решение для повседневного использования и трансформации
              вашей жизни.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
