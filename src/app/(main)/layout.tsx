import { Metadata } from "next"

import { StoreCartShippingOption } from "@medusajs/types"

import Nav from "@modules/layout/templates/nav"
import Promo from "@modules/home/components/promo"
import Footer from "@modules/layout/templates/footer"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"

import { getBaseURL } from "@lib/util/env"
import { retrieveCustomer } from "@lib/data/customer"
import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { getBannerData } from "@lib/data/banner"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  const customer = await retrieveCustomer()
  const cart = await retrieveCart()
  let shippingOptions: StoreCartShippingOption[] = []

  if (cart) {
    const { shipping_options } = await listCartOptions()

    shippingOptions = shipping_options
  }

  // const banner = await getBannerData()

  return (
    <>
      <Nav />
      <Promo />
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}

      {/* {cart && (
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )} */}
      {props.children}
      <Footer />
    </>
  )
}
