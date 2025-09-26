"use client"

import { getBannerData } from "@lib/data/banner"
import { Button } from "@medusajs/ui"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Banner } from "types/banner"

const Promo = () => {
  const [banner, setBanner] = useState<Banner | null>(null)

  useEffect(() => {
    const getData = async () => {
      const banner = await getBannerData()
      setBanner(banner)
    }

    getData()
  }, [])

  return (
    <div className="sticky top-0 z-[50] flex h-14 items-center justify-between bg-[#B3C3D2] px-6 md:mx-6 md:px-20 lg:mt-2 lg:rounded-[40px]">
      <span className="font-acrom text-base font-medium md:text-2xl">
        {banner?.content ?? ""}
      </span>
      <Link href={banner?.link ?? ""}>
        <Button variant="secondary" className="rounded-lg px-4 py-2">
          <p className="border-none font-acrom text-sm font-medium shadow-none outline-none">
            Смотреть
          </p>
        </Button>
      </Link>
    </div>
  )
}

export default Promo
