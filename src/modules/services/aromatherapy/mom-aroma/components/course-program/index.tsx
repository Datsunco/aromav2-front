import { useState } from "react"
import ChevronDown from "@modules/common/icons/chevron-down"
import { cn } from "@lib/util/cn"
import React from "react"

export type AccordionItem = {
  id: string
  title: string
  content: React.ReactNode
  isExpanded?: boolean
}

type AccordionSectionProps = {
  title?: string
  items: AccordionItem[]
  badge?: string
  className?: string
}

export default function AccordionSection({
  title,
  items,
  badge,
  className = "",
}: AccordionSectionProps) {
  const [sections, setSections] = useState(
    items.map((item) => ({ ...item, isExpanded: item.isExpanded ?? false }))
  )

  const toggleSection = (id: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    )
  }

  return (
    <section
      className={cn("max-w-6xl mx-auto bg-gray-50 p-8 rounded-3xl", className)}
    >
      {title && (
        <h2 className="text-3xl font-acrom font-semibold mb-6">{title}</h2>
      )}
      {badge && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm rounded-full">
            {badge}
          </span>
        </div>
      )}
      <div>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={cn(
              "bg-white overflow-hidden border-b-[1px]",
              index === 0 && "rounded-t-3xl",
              index === sections.length - 1 && "border-none rounded-b-3xl"
            )}
          >
            <div
              className="flex justify-between items-start p-6 cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex-1">
                <h3 className="font-semibold font-acrom text-xl">
                  {section.title}
                </h3>
              </div>
              <div
                className={cn(
                  "ml-4 mt-1 p-2 rounded-full bg-gray-100 duration-100 transition-all flex items-center justify-center",
                  section.isExpanded === true && "bg-black"
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 mt-[1px] text-gray-500 duration-100 transition-all",
                    section.isExpanded === true && "rotate-180 text-white"
                  )}
                />
              </div>
            </div>
            {section.isExpanded && (
              <div className="px-6 pb-6 text-gray-700 text-base font-acrom">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
