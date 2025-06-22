import IndividualAromaTemplate from "@modules/services/aromatherapy/inividual-aroma/templates"
import MomAromaTemplate from "@modules/services/aromatherapy/mom-aroma/templates"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Аромасеанс Вместе с мамой",
  description: "Аромасеанс Вместе с мамой",
}

export default async function MomAromatherapy() {
  return <MomAromaTemplate />
}
