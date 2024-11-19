import { Header } from "~/components/commons/Header/Header"
import { Banner } from "~/components/commons/Banner/Banner"
import { Category } from "~/components/commons/Category/Category"
import { RecipeList, RecipeListTwo } from "./RecipeList"
import { Information } from "~/components/commons/Information/Information"
import { InstagramPost } from "~/components/commons/InstagramPost/InstagramPost"
import { TittleIns } from "~/components/commons/InstagramPost/TittleIns"
import { DeliciousnessMail } from "~/components/commons/DeliciousnessMail/DeliciousnessMail"
import { Footer } from "~/components/commons/Footer/Footer"

const postData = [
    {
      username: "Foodieland. ",
      location: "Tokyo, Japan",
      likes: 44686,
      caption: "The vegetables dishes need to have certain vitamin for those people",
      date: "September 19"
    },
    {
      username: "Foodieland2. ",
      location: "New York, USA",
      likes: 32154,
      caption: "A delicious pizza night with friends!",
      date: "October 12"
    },
    {
      username: "Foodieland2. ",
      location: "New York, USA",
      likes: 32154,
      caption: "A delicious pizza night with friends!",
      date: "October 12"
    },
    {
      username: "Foodieland2. ",
      location: "New York, USA",
      likes: 32154,
      caption: "A delicious pizza night with friends!",
      date: "October 12"
    }
];

export default function HomePage() {

  return <>
    <Header />
    <Banner/>
    <Category/>
    <RecipeList/>
    <div className='px-8 mt-12 block bg-custom-gradient'>
      <TittleIns/>
      <div className="gap-10 font-primary-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
        {postData.map((post, index) => (
          <InstagramPost
            key={index}
            username={post.username}
            location={post.location}
            likes={post.likes}
            caption={post.caption}
            date={post.date}
          />
        ))}
      </div>
    </div>
    <Information/>
    <RecipeListTwo/>
    <DeliciousnessMail/>
    <Footer/>
  </>
}
