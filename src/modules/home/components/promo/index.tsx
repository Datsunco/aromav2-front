import { Button } from "@medusajs/ui"

const Promo = () => {
  return (
    <div className="sticky top-0 h-14 bg-[#d9ff79] lg:rounded-[40px] lg:mx-1 lg:mt-1 flex justify-between items-center px-6 md:px-20 z-30">
      <span className="text-base md:text-2xl font-medium font-acrom">
        Тут будет какой-то рекламный текст
      </span>
      <Button variant="secondary" className="px-4 py-2 rounded-lg">
        <p className="text-sm font-acrom font-medium outline-none border-none shadow-none">
          Смотреть
        </p>
      </Button>
    </div>
  )
}

export default Promo
