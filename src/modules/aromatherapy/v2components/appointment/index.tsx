import { Button } from "@medusajs/ui"

export default function Appointment() {
  return (
    <main className="mx-auto mt-20 flex w-full max-w-5xl items-center justify-center px-10 py-4 md:px-0">
      <div
        className="relative flex h-[300px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-[2rem] shadow-[inset_9px_9px_26.4px_0_rgba(36,55,226,0.1),_-5px_-3px_16px_0_rgba(0,0,0,0.1)] xl:h-[417px]" // Добавили обе тени здесь
        style={{
          // Multiple background images: градиент + изображение
          // Цвет #E3E7F3B5 как overlay. B5 = 70.98% alpha.
          backgroundImage:
            "linear-gradient(rgba(227, 231, 243, 0.7098), rgba(227, 231, 243, 0.7098)), url(/images/aromotherapy/appointment.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*
          Убираем старый оверлей, так как новый background-image с градиентом
          уже выполняет эту функцию более эффективно и аккуратно.
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[0.5px]" />
        */}

        {/* Content */}
        <div className="relative z-10 w-full px-8 text-center">
          <h1 className="mb-1 font-acrom text-2xl font-medium leading-relaxed text-[#191919] md:text-5xl">
            Студия ароматерапии
          </h1>

          <h2 className="font-acrom text-2xl font-medium leading-none text-[#191919] md:text-5xl">
            <span style={{ color: "#2e4f6c" }} className="font-kurale">
              «ВДОХновение»
            </span>{" "}
            — ваш путь
            <br />к гармонии и счастью
          </h2>

          <Button className="mt-10 h-auto rounded-full bg-[#2e4f6c] px-10 py-2 text-sm font-medium text-white hover:bg-[#2e4f6c]/90 md:px-16 md:py-3 md:text-base xl:text-lg">
            ЗАПИСАТЬСЯ
          </Button>
        </div>
      </div>
    </main>
  )
}
