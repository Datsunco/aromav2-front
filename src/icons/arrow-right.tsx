import React from "react"

import { IconProps } from "types/icon"

const ArrowRight = ({
  size = "16",
  color = "currentColor",
  ...attributes
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      //   class="lucide lucide-arrow-right-icon lucide-arrow-right"
      {...attributes}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default ArrowRight
