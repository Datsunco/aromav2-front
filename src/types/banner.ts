export interface Banner {
  id: string
  content: string | null
  link: string | null
}

export type SectionTitle =
  | "Ароматерапия"
  | "Девичники"
  | "Нумерология"
  | "Мастер-классы"
  | "Женские встречи"
  | "Магазин"
export type SectionLink =
  | "/aromatherapy"
  | "/girls"
  | "/numerology"
  | "/women-meet"
  | "/classes"
  | "/store"
