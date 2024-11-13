import { Header } from "~/components/commons/Header/Header"
import { Banner } from "~/components/commons/Banner/Banner"
import { Category } from "~/components/commons/Category/Category"
import { RecipeList, RecipeListTwo } from "./RecipeList"
import { Information } from "~/components/commons/Information/Information"
import { InstagramPost } from "~/components/commons/InstagramPost/InstagramPost"
import { TittleIns } from "~/components/commons/InstagramPost/TittleIns"

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
    <div className='px-8 mt-12 block'>
      <TittleIns/>
      <div className="flex gap-10 font-primary-500">
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
  </>
}
