import { Header } from "~/components/commons/Header/Header"
import { Banner } from "~/components/commons/Banner/Banner"
import { Category } from "~/components/commons/Category/Category"
import { RecipeList, RecipeListTwo } from "./RecipeList"
import { Information } from "~/components/commons/Information/Information"
import { InstagramPost } from "~/components/commons/InstagramPost/InstagramPost"

export default function HomePage() {

  return <>
    <Header />
    <Banner/>
    <Category/>
    <RecipeList/>
    <InstagramPost
      username="Foodieland."
      location="Tokyo, Japan"
      likes={44686}
      caption="The vegetables dishes need to have certain vitamin for those people"
      date="September 19"
    />
    <Information/>
    <RecipeListTwo/>
  </>
}
