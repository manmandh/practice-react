import { ViewRecipesButton } from "~/components/elements/Button/Button";
import avtUser from "~/assets/icons/craig_love.svg";
import creamyPasta from '~/assets/images/creamy-pasta.png';
import healthyFood from '~/assets/images/healthy-food.png';
import { Pagination } from "~/components/elements/Pagination/Pagination";
import { useState } from "react";


export const RecipeAndArticle = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page: number) =>{
    setCurrentPage(page);
  }
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="mx-auto font-primary-600">
        {/* Tittle */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Recipe & Article</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex mx-auto items-center bg-white p-2 rounded-[16px] shadow-lg max-w-md max-custom-500:block mb-8">
            <input
              type="email"
              placeholder="Search article, newss or recipe"
              className="flex-grow px-4 py-2 text-sm outline-none rounded-l-full"
            />
            <ViewRecipesButton showIcon={false}>Search</ViewRecipesButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recipe Posts */}
          <div className="col-span-2 space-y-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <img src={creamyPasta} alt="" />
                <div className='justify-between flex flex-col'>
                  <h2 className="text-[24px] font-semibold text-gray-800">
                    Crochet Projects for Noodle Lovers {index + 1}
                  </h2>
                  <p className="text-[16px] text-gray-600">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                  </p>
                  <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                      <img src={avtUser} alt="icon" />
                      <p className="text-[16px] text-primary font-bold">Robert Fox</p>
                    </div>
                    <p className="text-[14px] text-gray-500">12 November 2021</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tasty Recipes */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Tasty Recipes</h3>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center gap-4 mb-4">
                   <img src={creamyPasta} className='w-[180px] h-[180px]' alt="" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">Recipe {index + 1}</h4>
                    <p className="text-xs text-gray-500">By Author Name</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reminder */}
            <div className="absolute bg-green-400 w-[400px] h-[400px] rounded-lg text-center">
              <img
                src={healthyFood}
                alt="Healthy food reminder"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="relative transform">
                <p className="text-lg text-center font-bold text-white">Don't forget to eat healthy food!</p>
                <p className="text-sm text-white top-0">www.foodiehub.com</p>
              </div>
            </div>

          </div>
        </div>
        {/*Pagination*/}
        <div className="flex justify-center mt-10">
          <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
