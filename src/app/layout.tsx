import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import localFont from "next/font/local"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: "%s | Арома Вдохновение",
    default: "Арома Вдохновение",
  },
  description: "Мир ароматерапии, мастер-классов и духовного развития",
  keywords: [
    "ароматерапия",
    "эфирные масла",
    "мастер-классы",
    "нумерология",
    "события",
  ],
  authors: [{ name: "Арома Вдохновение" }],
  creator: "Арома Вдохновение",
  publisher: "Арома Вдохновение",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Арома Вдохновение",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aroma_inspiration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const Acrom = localFont({
  src: [
    {
      path: "../../public/fonts/Acrom-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acrom-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acrom-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Acrom-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-acrom",
})

const Literature = localFont({
  src: [
    {
      path: "../../public/fonts/Literature.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-literature",
})

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${Acrom.variable} ${Literature.variable}`}
    >
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
