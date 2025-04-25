import { Suspense } from "react"

import Header from "@modules/default/header"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import Banner from "@modules/default/banner"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="">
      <div className="max-w-5xl flex flex-col mx-auto ">
        <Header />
      </div>
      <section
        className="max-w-6xl mx-auto flex flex-col mt-8"
        data-testid="category-container"
      >
        <Banner title="Магазин" img="/images/test.png" />
        <div className="flex flex-col md:flex-row mt-16">
          <RefinementList sortBy={sort} />
          <div className="w-full">
            <div className="mb-8 text-2xl-semi">
              <h1 data-testid="store-page-title">All products</h1>
            </div>
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                countryCode={countryCode}
              />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StoreTemplate
