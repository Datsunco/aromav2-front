import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Comma from "icons/comma"
import Image from "next/image"
import Link from "next/link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="mt-40 w-full rounded-t-3xl bg-[#292929] md:rounded-none">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between">
        {/* Верхняя часть */}
        <div className="absolute hidden h-40 w-full -translate-y-40 justify-between gap-10 rounded-2xl bg-[#B4C3D2] px-10 py-8 md:flex">
          <div className="flex w-80 flex-col items-center gap-y-2">
            <div className="flex w-48 items-center justify-between rounded-3xl bg-white px-5 py-2">
              <span className="font-acrom text-base font-normal uppercase">
                приезжайте
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="https://yandex.ru/maps/10740/mytischi/?ll=37.724481%2C55.893263&mode=search&oid=76074700005&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTWzlgLS3EJAEbNhTWVR8ktAEhIJ7upVZHRAQj8RIT6w479AQD8iBgABAgMEBSgKOABA9FNIAWoCcnWdAc3MzD2gAQCoAQC9AUCU2cjCAQblmZ%2BzmwKCAi7QsNGA0L7QvNCwINGB0YLRg9C00LjRjyDQktC00L7RhdC90L7QstC10L3QuNC1igIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=37.724481%2C55.893263&sspn=0.013518%2C0.012033&text=%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%92%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5&z=15"
              className="px-3 text-center font-acrom text-sm font-normal uppercase text-black"
            >
              г. Мытиши, ул. Веры Волошиной, дом 14, бизнес-центр Разумихин, 3
              этаж, кабинет 315
            </a>
          </div>

          <div className="flex w-80 flex-col items-center gap-y-2">
            <div className="flex w-48 items-center justify-between rounded-3xl bg-white px-5 py-2">
              <span className="font-acrom text-base font-normal uppercase">
                звоните
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="tel:+79166757895"
              className="text-center font-acrom text-sm font-normal uppercase"
            >
              8 916 675-78-95
            </a>
          </div>

          <div className="flex w-80 flex-col items-center gap-y-2">
            <div className="flex w-48 items-center justify-between rounded-3xl bg-white px-5 py-2">
              <span className="font-acrom text-base font-normal uppercase">
                пишите
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="https://t.me/zhannadotsenko"
              className="font-acrom text-sm font-normal uppercase"
            >
              телеграмм
              <br /> @zhannadotsenko
            </a>
          </div>
        </div>

        {/* Основная часть */}
        <div className="grid w-full grid-flow-row grid-cols-2 justify-between gap-y-4 px-4 pb-20 pt-10 md:flex md:flex-row md:px-10 md:pt-40 lg:px-20">
          <div className="flex flex-col gap-y-4">
            <Image
              src="/circlelogo.png"
              alt="Osterrig"
              width={100}
              height={50}
              className="h-[75px] w-[75px] object-contain md:h-[100px] md:w-[100px]"
            />
            {/* <Image  alt="Вдохновение" width={180} height={130} /> */}
            <div className="flex gap-x-4">
              <Link
                href="https://vk.com"
                className="text-white transition-colors hover:text-[#E4CFB7]"
              >
                {/* <Comma className="h-6 w-6" /> */}
              </Link>
              <Link
                href="https://telegram.org"
                className="text-white transition-colors hover:text-[#E4CFB7]"
              >
                {/* <Comma className="h-6 w-6" /> */}
              </Link>
              <Link
                href="https://whatsapp.com"
                className="text-white transition-colors hover:text-[#E4CFB7]"
              >
                {/* <Comma className="h-6 w-6" /> */}
              </Link>
            </div>
          </div>
          <div className="md:flex"></div>

          {/* блок кнопочек */}
          <div className="flex flex-col gap-y-2 md:hidden">
            <div className="flex w-40 items-center gap-4 rounded-3xl bg-white px-4 py-2">
              <span className="font-acrom text-xs font-normal uppercase">
                приезжайте
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="https://yandex.ru/maps/10740/mytischi/?ll=37.724481%2C55.893263&mode=search&oid=76074700005&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTWzlgLS3EJAEbNhTWVR8ktAEhIJ7upVZHRAQj8RIT6w479AQD8iBgABAgMEBSgKOABA9FNIAWoCcnWdAc3MzD2gAQCoAQC9AUCU2cjCAQblmZ%2BzmwKCAi7QsNGA0L7QvNCwINGB0YLRg9C00LjRjyDQktC00L7RhdC90L7QstC10L3QuNC1igIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=37.724481%2C55.893263&sspn=0.013518%2C0.012033&text=%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%92%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5&z=15"
              className="px-3 font-acrom text-xs font-normal uppercase text-white"
            >
              г. Мытиши, ул. Веры Волошиной, дом 14, бизнес-центр Разумихин, 3
              этаж, кабинет 315
            </a>
          </div>

          <div className="flex flex-col gap-y-2 md:hidden">
            <div className="flex w-40 items-center gap-4 rounded-3xl bg-white px-4 py-2">
              <span className="font-acrom text-xs font-normal uppercase">
                звоните
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="tel:+79166757895"
              className="px-3 font-acrom text-xs font-normal uppercase text-white"
            >
              8 916 675-78-95
            </a>
          </div>

          <div className="flex flex-col gap-y-2 md:hidden">
            <div className="flex w-40 items-center gap-4 rounded-3xl bg-white px-4 py-2">
              <span className="font-acrom text-xs font-normal uppercase">
                пишите
              </span>
              {/* <Comma className="w-5 h-5" /> */}
            </div>
            <a
              href="https://t.me/zhannadotsenko"
              className="px-3 font-acrom text-xs font-normal uppercase text-white"
            >
              телеграмм
              <br /> @zhannadotsenko
            </a>
          </div>

          {/* блок кнопочек */}

          <div className="col-span-2 grid grid-cols-2 gap-3 px-4 md:flex md:gap-6">
            <div className="flex flex-col gap-y-2">
              <span className="font-acrom text-sm uppercase text-white">
                Меню
              </span>
              <Link
                href="/categories/chairs"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Главная
              </Link>
              <Link
                href="/categories/tables"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Каталог
              </Link>
              <Link
                href="/categories/sofas"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Заказы
              </Link>
              <Link
                href="/categories/sofas"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Избранное
              </Link>
              <Link
                href="/categories/sofas"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Корзина
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-acrom text-sm uppercase text-white">
                Информация
              </span>
              <Link
                href="/about"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                О компании
              </Link>
              <Link
                href="/delivery"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Доставка
              </Link>
              <Link
                href="/contacts"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Контакты
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-acrom text-sm uppercase text-white">
                Для клиентов
              </span>
              <Link
                href="/categories/chairs"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/categories/tables"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                Доставка и оплата
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="font-acrom text-sm uppercase text-white">
                Реквизиты
              </span>
              <Link
                href="/categories/chairs"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                ИП Доценко Жанна Семёновна
              </Link>
              <Link
                href="/categories/tables"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                ИНН: 504809277960
              </Link>
              <Link
                href="/categories/sofas"
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                ОГРНИП: 323508100184664
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
