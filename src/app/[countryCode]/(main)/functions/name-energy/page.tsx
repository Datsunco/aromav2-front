import PotentialFunctionTemplate from "@modules/functions/potential/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Узнай энергию своего имени",
  description: "",
}

export default async function PotentialFunction() {
  return <PotentialFunctionTemplate />
}
