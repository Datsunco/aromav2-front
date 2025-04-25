interface FeatCardProps {
  title: string,
  description: string,
  image: string,
}

const FeatCard = ({ title, description, image }: FeatCardProps) => {
  return (
    <div className="group relative w-[300px] h-[300px] rounded-3xl overflow-hidden transition-all duration-300">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Градиентный оверлей для названия (всегда виден) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      
      {/* Градиентный оверлей при наведении */}
      <div className="absolute inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Контент */}
      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        {/* Верхний текст */}
        <div>
          <h4 className="text-white/80 text-lg font-normal mb-1 group-hover:text-white transition-colors duration-300">Профессия</h4>
          <h3 className="text-white text-2xl font-semibold transition-colors duration-300">{title}</h3>
        </div>

        {/* Нижний текст */}
        <div className="transform translate-y-[20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatCard

