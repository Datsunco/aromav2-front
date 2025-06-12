"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getCacheOptions } from "./cookies"
import { Event } from "types/event"

export const listEvents = async (): Promise<{
  collections: Event[]
  count: number
}> => {
  const next = {
    ...(await getCacheOptions("events")),
  }

  return sdk.client
    .fetch<{ events: Event[]; count: number }>("/store/event", {
      next,
      cache: "force-cache",
    })
    .then(({ events }) => ({ collections: events, count: events.length }))
}

export const getEventById = async (id: string): Promise<Event | null> => {
  const next = {
    ...(await getCacheOptions("events")),
  }

  try {
    return sdk.client
      .fetch<{ event: Event }>(`/store/event`, {
        query: { id },
        next,
        cache: "force-cache",
      })
      .then(({ event }) => event)
  } catch (error) {
    console.error("Error fetching event:", error)
    return null
  }
}
