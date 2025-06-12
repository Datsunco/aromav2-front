export interface Event {
  id: string
  title: string
  subtitle: string
  description: string
  location: string
  link: string
  start_date: string
  is_published: boolean
  image_urls: {
    urls: string[]
  }
}
