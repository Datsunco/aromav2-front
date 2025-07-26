"use client"

import React, { useState } from "react"
import ChevronDown from "@modules/common/icons/chevron-down"
import { cn } from "@lib/util/cn"

export type AccordionItem = {
  id: string
  title: string
  content: React.ReactNode
  isExpanded?: boolean
}

export type AccordionBlock = {
  id: string
  badge: string
  items: AccordionItem[]
}

type MultiAccordionProps = {
  title: string
  blocks: AccordionBlock[]
  className?: string
}

export default function MultiAccordion({
  title,
  blocks,
  className = "",
}: MultiAccordionProps) {
  // Сохраняем состояние раскрытия для каждого пункта в каждом блоке
  const [expanded, setExpanded] = useState(() =>
    blocks.map((block) => block.items.map((item) => !!item.isExpanded))
  )

  const toggle = (blockIdx: number, itemIdx: number) => {
    setExpanded((prev) =>
      prev.map((blockArr, bIdx) =>
        bIdx === blockIdx
          ? blockArr.map((isOpen, iIdx) =>
              iIdx === itemIdx ? !isOpen : isOpen
            )
          : blockArr
      )
    )
  }

  return (
    <section
      className={cn(
        "max-w-6xl mx-auto bg-gray-50 p-4 md:p-8 rounded-3xl",
        className
      )}
    >
      {title && (
        <h2 className=" p-4 text-3xl font-acrom font-semibold mb-8">{title}</h2>
      )}
      {blocks.map((block, blockIdx) => (
        <div key={block.id} className={blockIdx > 0 ? "mt-8" : ""}>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-full">
              {block.badge}
            </span>
          </div>
          <div>
            {block.items.map((item, itemIdx) => (
              <div
                key={item.id}
                className={cn(
                  "bg-white overflow-hidden border-b-[1px]",
                  itemIdx === 0 && "rounded-t-3xl",
                  itemIdx === block.items.length - 1 &&
                    "border-none rounded-b-3xl"
                )}
              >
                <div
                  className="flex justify-between items-start p-6 cursor-pointer"
                  onClick={() => toggle(blockIdx, itemIdx)}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold font-acrom text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      "ml-4 mt-1 p-2 rounded-full bg-gray-100 duration-100 transition-all flex items-center justify-center",
                      expanded[blockIdx][itemIdx] && "bg-black"
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 mt-[1px] text-gray-500 duration-100 transition-all",
                        expanded[blockIdx][itemIdx] && "rotate-180 text-white"
                      )}
                    />
                  </div>
                </div>
                {expanded[blockIdx][itemIdx] && (
                  <div className="px-6 pb-6 text-gray-700 text-base font-acrom">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
