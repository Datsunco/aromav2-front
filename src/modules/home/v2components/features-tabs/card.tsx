interface FeatCardProps {
  title: string
  description: string
  image: string
}

const FeatCard = ({ title, description, image }: FeatCardProps) => {
  return (
    <div className="group relative cursor-pointer w-[140px] h-[140px] md:w-[192px] md:h-[192px] xl:w-[300px] xl:h-[300px] rounded-[30px] md:rounded-[32px] xl:rounded-[60px] overflow-hidden transition-all duration-300">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Градиентный оверлей для названия (всегда виден) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Градиентный оверлей при наведении */}
      <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Контент */}
      <div className="relative h-full flex flex-col justify-between p-2 md:p-5 xl:p-6 z-10">
        {/* Верхний текст */}
        <div>
          {/* <h4 className="text-white/80 text-lg font-normal mb-1 group-hover:text-white transition-colors duration-300">
            Профессия
          </h4> */}
          <h3 className="flex mt-4 transform translate-y-[45px] md:translate-y-[70px] xl:translate-y-[150px] group-hover:translate-y-[-10px] md:group-hover:translate-y-[-20px]  transition-all duration-300  text-white text-sm/tight xl:text-2xl md:text-base font-medium md:font-semibold">
            {title}
          </h3>
        </div>

        {/* Нижний текст */}
        <div className="transform translate-y-[20px] xl:translate-y-[20px]  md:translate-y-[-30px] opacity-0 group-hover:translate-y-[-10px] md:group-hover:translate-y-[0px] group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-xs md:text-sm xl:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatCard
