"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"
import { Event } from "types/event"
import { Banner } from "types/banner"

export const getBannerData = async (): Promise<Banner> => {
  const next = {
    ...(await getCacheOptions("banner")),
  }

  return sdk.client.fetch<Banner>("/store/banner", {
    next,
    cache: "force-cache",
  })
  // .then(({ banner }) => banner)
}
