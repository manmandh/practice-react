import { Header } from "~/components/commons/Header/Header"
import { Banner } from "~/components/commons/Banner/Banner"
import { Category } from "~/components/commons/Category/Category"
import { RecipeList } from "./RecipeList"
import { Information } from "~/components/commons/Information/Information"

export default function HomePage() {

  return <>
    <Header />
    <Banner/>
    <Category/>
    <RecipeList/>
    <Information/>
  </>
}
