// next-sitemap.config.js

/**
 * Исключаемые пути - служебные страницы, которые не должны индексироваться
 */
const excludedPaths = [
  "/checkout",
  "/cart",
  "/account/*",
  "/admin/*",
  "/api/*",
  "/_next/*",
  "/[sitemap]",
  "/404",
  "/500",
]

/**
 * Получение событий для sitemap
 */
const getEventPaths = async () => {
  try {
    console.log("[Sitemap] 🎯 Fetching events...")

    const res = await fetch(
      `${process.env.MEDUSA_BACKEND_URL}/store/event?limit=1000`,
      {
        method: "GET",
        headers: {
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      console.error(`❌ Sitemap: Failed to fetch events. Status: ${res.status}`)
      return []
    }

    const { events } = await res.json()
    console.log(`[Sitemap] ✅ Found ${events?.length || 0} events.`)

    if (!events) return []

    return events.map((event) => ({
      path: `/events/${event.id}`,
      lastmod: event.updated_at || event.created_at,
      changefreq: "weekly",
      priority: 0.6,
    }))
  } catch (error) {
    console.error("❌ Sitemap: Error fetching event paths:", error)
    return []
  }
}

/**
 * Получение продуктов для sitemap (если есть магазин)
 */
const getProductPaths = async () => {
  try {
    console.log("[Sitemap] 🛍️ Fetching products...")

    const res = await fetch(
      `${process.env.MEDUSA_BACKEND_URL}/store/products?limit=1000&fields=handle,updated_at`,
      {
        method: "GET",
        headers: {
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      console.error(
        `❌ Sitemap: Failed to fetch products. Status: ${res.status}`
      )
      return []
    }

    const { products } = await res.json()
    console.log(`[Sitemap] ✅ Found ${products?.length || 0} products.`)

    if (!products) return []

    return products.map((product) => ({
      path: `/products/${product.handle}`,
      lastmod: product.updated_at,
      changefreq: "weekly",
      priority: 0.5,
    }))
  } catch (error) {
    console.error("❌ Sitemap: Error fetching product paths:", error)
    return []
  }
}

/**
 * Получение категорий для sitemap
 */
const getCategoryPaths = async () => {
  try {
    console.log("[Sitemap] 📂 Fetching categories...")

    const res = await fetch(
      `${process.env.MEDUSA_BACKEND_URL}/store/product-categories?limit=1000&fields=handle,updated_at`,
      {
        method: "GET",
        headers: {
          "x-publishable-api-key":
            process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
          "Content-Type": "application/json",
        },
      }
    )

    if (!res.ok) {
      console.error(
        `❌ Sitemap: Failed to fetch categories. Status: ${res.status}`
      )
      return []
    }

    const { product_categories } = await res.json()
    console.log(
      `[Sitemap] ✅ Found ${product_categories?.length || 0} categories.`
    )

    if (!product_categories) return []

    return product_categories.map((category) => ({
      path: `/categories/${category.handle}`,
      lastmod: category.updated_at,
      changefreq: "weekly",
      priority: 0.7,
    }))
  } catch (error) {
    console.error("❌ Sitemap: Error fetching category paths:", error)
    return []
  }
}

/**
 * Генерация статических путей для всех основных страниц
 */
const generateStaticPaths = () => {
  console.log("[Sitemap] 🚀 Generating static paths...")

  const paths = []

  // Основные страницы с их приоритетами и частотой обновления
  const mainPages = [
    { path: "/", priority: 1.0, changefreq: "daily" },
    { path: "/aromatherapy", priority: 0.9, changefreq: "weekly" },
    { path: "/girls", priority: 0.9, changefreq: "weekly" },
    { path: "/numerology", priority: 0.9, changefreq: "weekly" },
    { path: "/classes", priority: 0.8, changefreq: "weekly" },
    { path: "/events", priority: 0.8, changefreq: "daily" },
    { path: "/store", priority: 0.7, changefreq: "daily" },
  ]

  // Услуги
  const services = [
    {
      path: "/services/individual-aroma",
      priority: 0.8,
      changefreq: "monthly",
    },
    { path: "/services/family-aroma", priority: 0.8, changefreq: "monthly" },
    { path: "/services/child-aroma", priority: 0.8, changefreq: "monthly" },
    { path: "/services/mom-aroma", priority: 0.8, changefreq: "monthly" },
    {
      path: "/services/individual-parfume",
      priority: 0.8,
      changefreq: "monthly",
    },
    { path: "/services/resource-aroma", priority: 0.8, changefreq: "monthly" },
    { path: "/services/aromo-dress", priority: 0.8, changefreq: "monthly" },
  ]

  // Функции
  const functions = [
    { path: "/functions/name-energy", priority: 0.7, changefreq: "monthly" },
    { path: "/functions/potential", priority: 0.7, changefreq: "monthly" },
  ]

  // Добавляем все статические страницы
  const allStaticPages = [...mainPages, ...services, ...functions]

  allStaticPages.forEach((page) => {
    paths.push({
      path: page.path,
      priority: page.priority,
      changefreq: page.changefreq,
      lastmod: new Date().toISOString(),
    })
  })

  console.log(`[Sitemap] ✅ Generated ${paths.length} static paths`)
  return paths
}

/**
 * Основной конфиг next-sitemap
 */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://aroma-vdohnovenie.ru",
  generateRobotsTxt: true,
  exclude: excludedPaths,

  // Настройки для robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/admin/",
          "/api/",
          "/_next/",
          "/checkout",
          "/cart",
          "/account/",
          "/checkout/*",
          "/account/*",
        ],
      },
      // Ограничения для AI-ботов (защита от парсинга)
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot",
        disallow: "/",
      },
    ],
    additionalSitemaps: [
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://aroma-vdohnovenie.ru"
      }/sitemap-events.xml`,
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://aroma-vdohnovenie.ru"
      }/sitemap-products.xml`,
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "https://aroma-vdohnovenie.ru"
      }/sitemap-categories.xml`,
    ],
  },

  // Трансформация URL - настройка приоритетов и частоты обновления
  transform: async (config, path) => {
    // Определяем приоритет на основе пути
    let priority = 0.5
    let changefreq = "monthly"

    if (path === "/") {
      priority = 1.0
      changefreq = "daily"
    } else if (
      path.includes("/aromatherapy") ||
      path.includes("/girls") ||
      path.includes("/numerology")
    ) {
      priority = 0.9
      changefreq = "weekly"
    } else if (path.includes("/events") || path.includes("/classes")) {
      priority = 0.8
      changefreq = "weekly"
    } else if (path.includes("/services")) {
      priority = 0.8
      changefreq = "monthly"
    } else if (path.includes("/functions")) {
      priority = 0.7
      changefreq = "monthly"
    } else if (path.includes("/store") || path.includes("/categories")) {
      priority = 0.7
      changefreq = "weekly"
    } else if (path.includes("/products")) {
      priority = 0.6
      changefreq = "weekly"
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

  // Дополнительные пути - события, продукты, категории и статические страницы
  additionalPaths: async (config) => {
    console.log("[Sitemap] 📋 Generating additional paths...")

    const [staticPaths, eventPaths, productPaths, categoryPaths] =
      await Promise.all([
        generateStaticPaths(),
        getEventPaths(),
        getProductPaths(),
        getCategoryPaths(),
      ])

    const allAdditionalPaths = [
      // Статические страницы
      ...staticPaths.map((p) => ({
        loc: p.path,
        changefreq: p.changefreq,
        priority: p.priority,
        lastmod: p.lastmod,
      })),
      // События
      ...eventPaths.map((event) => ({
        loc: event.path,
        changefreq: event.changefreq,
        priority: event.priority,
        lastmod: event.lastmod,
      })),
      // Продукты
      ...productPaths.map((product) => ({
        loc: product.path,
        changefreq: product.changefreq,
        priority: product.priority,
        lastmod: product.lastmod,
      })),
      // Категории
      ...categoryPaths.map((category) => ({
        loc: category.path,
        changefreq: category.changefreq,
        priority: category.priority,
        lastmod: category.lastmod,
      })),
    ]

    console.log(
      `[Sitemap] ✅ Total additional paths: ${allAdditionalPaths.length}`
    )
    console.log(`  - Static paths: ${staticPaths.length}`)
    console.log(`  - Event paths: ${eventPaths.length}`)
    console.log(`  - Product paths: ${productPaths.length}`)
    console.log(`  - Category paths: ${categoryPaths.length}`)

    return allAdditionalPaths
  },

  // Дополнительные настройки
  generateIndexSitemap: true, // Создает sitemap index для больших сайтов
  sitemapSize: 5000, // Максимум URL в одном sitemap файле
  autoLastmod: true, // Автоматически добавляет lastmod

  // Исключаем динамические роуты, которые уже обрабатываются в additionalPaths
  exclude: [
    ...excludedPaths,
    "/events/[id]",
    "/products/[handle]",
    "/categories/[...category]",
    "/categories/[handle]",
  ],
}
