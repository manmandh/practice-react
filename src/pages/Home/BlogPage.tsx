import { ChefGuide } from "~/components/commons/ChefGuide/ChefGuide";
import { Header } from "~/components/commons/Header/Header";
import { DeliciousnessMail } from "~/components/commons/DeliciousnessMail/DeliciousnessMail";
import { Footer } from "~/components/commons/Footer/Footer";
import { RecipeListTwo } from "./RecipeList";

export default function BlogPage() {
  return <>
    <Header/>
    <ChefGuide/>
    <DeliciousnessMail/>
    <RecipeListTwo/>
    <Footer/>
  </>
}
