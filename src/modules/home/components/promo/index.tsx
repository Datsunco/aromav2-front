import { Button } from "@medusajs/ui"
import Link from "next/link"
import { Banner } from "types/banner"

const Promo = ({ banner }: { banner: Banner | null }) => {
  return (
    <div className="sticky top-0 h-14 bg-[#d9ff79] lg:rounded-[40px] lg:mx-1 lg:mt-1 flex justify-between items-center px-6 md:px-20 z-30">
      <span className="text-base md:text-2xl font-medium font-acrom">
        {banner?.content ?? ""}
      </span>
      <Link href={banner?.link ?? ""}>
        <Button variant="secondary" className="px-4 py-2 rounded-lg">
          <p className="text-sm font-acrom font-medium outline-none border-none shadow-none">
            Смотреть
          </p>
        </Button>
      </Link>
    </div>
  )
}

export default Promo
