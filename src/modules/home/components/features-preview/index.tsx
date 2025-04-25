import { TabsDemo } from "./features-tab"

const FeaturesPreview = () => {
  return (
    <div className="flex flex-col  mt-28 lg:mt-44 max-w-5xl mx-auto items-center justify-center">
      <h1 className="text-2xl md:text-5xl font-bold font-acrom max-w-xl text-center">
        Очень много разных{" "}
        <span className="font-literature">интересностей</span>
      </h1>
      <TabsDemo />
      <div className="flex gap-4"></div>
    </div>
  )
}

export default FeaturesPreview
