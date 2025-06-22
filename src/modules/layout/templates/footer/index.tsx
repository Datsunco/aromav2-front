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
    <footer className="w-full bg-[#292929] mt-40 rounded-t-3xl md:rounded-none">
      <div className="relative flex items-center justify-between max-w-5xl mx-auto ">
        {/* Верхняя часть */}
        <div className="hidden md:flex absolute bg-[#B4C3D2] rounded-2xl w-full h-40 -translate-y-40 justify-between px-10 gap-10 py-8">
          <div className="w-80 flex flex-col gap-y-2 items-center">
            <div className="bg-white py-2 px-5 rounded-3xl w-48 flex items-center justify-between">
              <span className="font-acrom uppercase font-normal text-base ">
                приезжайте
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="https://yandex.ru/maps/10740/mytischi/?ll=37.724481%2C55.893263&mode=search&oid=76074700005&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTWzlgLS3EJAEbNhTWVR8ktAEhIJ7upVZHRAQj8RIT6w479AQD8iBgABAgMEBSgKOABA9FNIAWoCcnWdAc3MzD2gAQCoAQC9AUCU2cjCAQblmZ%2BzmwKCAi7QsNGA0L7QvNCwINGB0YLRg9C00LjRjyDQktC00L7RhdC90L7QstC10L3QuNC1igIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=37.724481%2C55.893263&sspn=0.013518%2C0.012033&text=%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%92%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5&z=15"
              className="px-3 font-acrom uppercase text-center font-normal text-sm text-black"
            >
              г. Мытиши, ул. Веры Волошиной, дом 14, бизнес-центр Разумихин, 3
              этаж, кабинет 315
            </a>
          </div>

          <div className="w-80 flex flex-col gap-y-2 items-center">
            <div className="bg-white py-2 px-5 rounded-3xl w-48 flex items-center justify-between">
              <span className="font-acrom uppercase font-normal text-base ">
                звоните
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="tel:+79166757895"
              className="font-acrom uppercase font-normal text-sm text-center"
            >
              8 916 675-78-95
            </a>
          </div>

          <div className="w-80 flex flex-col gap-y-2 items-center">
            <div className="bg-white py-2 px-5 rounded-3xl w-48 flex items-center justify-between">
              <span className="font-acrom uppercase font-normal text-base ">
                пишите
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="https://t.me/zhannadotsenko"
              className="font-acrom uppercase font-normal text-sm "
            >
              телеграмм
              <br /> @zhannadotsenko
            </a>
          </div>
        </div>

        {/* Основная часть */}
        <div className="grid grid-flow-row grid-cols-2 md:flex md:flex-row gap-y-4 justify-between w-full pt-10 md:pt-40 px-4 md:px-10 lg:px-20 pb-20 ">
          <div className="flex flex-col gap-y-4">
            <Image
              src="/circlelogo.png"
              alt="Osterrig"
              width={100}
              height={50}
              className="object-contain w-[75px] h-[75px] md:w-[100px] md:h-[100px]"
            />
            {/* <Image  alt="Вдохновение" width={180} height={130} /> */}
            <div className="flex gap-x-4">
              <Link
                href="https://vk.com"
                className="text-white hover:text-[#E4CFB7] transition-colors"
              >
                <Comma className="w-6 h-6" />
              </Link>
              <Link
                href="https://telegram.org"
                className="text-white hover:text-[#E4CFB7] transition-colors"
              >
                <Comma className="w-6 h-6" />
              </Link>
              <Link
                href="https://whatsapp.com"
                className="text-white hover:text-[#E4CFB7] transition-colors"
              >
                <Comma className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="md:flex"></div>

          {/* блок кнопочек */}
          <div className="flex md:hidden flex-col gap-y-2 ">
            <div className="bg-white py-2 px-4 w-40 rounded-3xl gap-4 flex items-center">
              <span className="font-acrom uppercase font-normal text-xs ">
                приезжайте
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="https://yandex.ru/maps/10740/mytischi/?ll=37.724481%2C55.893263&mode=search&oid=76074700005&ol=biz&sctx=ZAAAAAgBEAAaKAoSCTWzlgLS3EJAEbNhTWVR8ktAEhIJ7upVZHRAQj8RIT6w479AQD8iBgABAgMEBSgKOABA9FNIAWoCcnWdAc3MzD2gAQCoAQC9AUCU2cjCAQblmZ%2BzmwKCAi7QsNGA0L7QvNCwINGB0YLRg9C00LjRjyDQktC00L7RhdC90L7QstC10L3QuNC1igIAkgIAmgIKdG91Y2gtbWFwcw%3D%3D&sll=37.724481%2C55.893263&sspn=0.013518%2C0.012033&text=%D0%B0%D1%80%D0%BE%D0%BC%D0%B0%20%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F%20%D0%92%D0%B4%D0%BE%D1%85%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B5&z=15"
              className="px-3 font-acrom uppercase font-normal text-xs text-white"
            >
              г. Мытиши, ул. Веры Волошиной, дом 14, бизнес-центр Разумихин, 3
              этаж, кабинет 315
            </a>
          </div>

          <div className="flex md:hidden flex-col gap-y-2 ">
            <div className="bg-white py-2 px-4 w-40 rounded-3xl gap-4 flex items-center">
              <span className="font-acrom uppercase font-normal text-xs ">
                звоните
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="tel:+79166757895"
              className="px-3 font-acrom uppercase font-normal text-xs text-white"
            >
              8 916 675-78-95
            </a>
          </div>

          <div className="flex md:hidden flex-col gap-y-2 ">
            <div className="bg-white py-2 px-4 w-40 rounded-3xl gap-4 flex items-center">
              <span className="font-acrom uppercase font-normal text-xs ">
                пишите
              </span>
              <Comma className="w-5 h-5" />
            </div>
            <a
              href="https://t.me/zhannadotsenko"
              className="px-3 font-acrom uppercase font-normal text-xs text-white"
            >
              телеграмм
              <br /> @zhannadotsenko
            </a>
          </div>

          {/* блок кнопочек */}

          <div className="px-4 col-span-2 grid grid-cols-2 gap-3 md:flex md:gap-6">
            <div className="flex flex-col gap-y-2">
              <span className="text-white font-acrom uppercase text-sm">
                Меню
              </span>
              <Link
                href="/categories/chairs"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Главная
              </Link>
              <Link
                href="/categories/tables"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Каталог
              </Link>
              <Link
                href="/categories/sofas"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Заказы
              </Link>
              <Link
                href="/categories/sofas"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Избранное
              </Link>
              <Link
                href="/categories/sofas"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Корзина
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-white font-acrom uppercase text-sm">
                Информация
              </span>
              <Link
                href="/about"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                О компании
              </Link>
              <Link
                href="/delivery"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Доставка
              </Link>
              <Link
                href="/contacts"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Контакты
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-white font-acrom uppercase text-sm">
                Для клиентов
              </span>
              <Link
                href="/categories/chairs"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/categories/tables"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Доставка и оплата
              </Link>
            </div>
            <div className="flex flex-col gap-y-2">
              <span className="text-white font-acrom uppercase text-sm">
                Реквизиты
              </span>
              <Link
                href="/categories/chairs"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                ИП Доценко Жанна Семёновна
              </Link>
              <Link
                href="/categories/tables"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                ИНН: 504809277960
              </Link>
              <Link
                href="/categories/sofas"
                className="text-white/60 hover:text-white transition-colors text-sm"
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
