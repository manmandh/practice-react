import React from 'react';
import { RecipeCard } from '~/components/commons/RecipeCard/RecipeCard';
import { recipes } from '~/components/commons/RecipeCard/recipes';


export const RecipeList: React.FC = () => {
  return (
    <div className="px-8 pt-[150px] flex flex-col gap-[52px]">
      <div className='text-center flex flex-col'>
        <h2 className="text-[48px] font-primary-600 mb-6 font-[600]">Simple and tasty recipes</h2>
        <p className="font-primary-400 mx-auto w-1/2">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 custom-500:grid-cols-2 custom-500:gap-[15px] gap-[40px]">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            image={recipe.image}
            time={recipe.time}
            category={recipe.category}
            timeIcon={recipe.timeIcon}
            categoryIcon={recipe.categoryIcon}
            backgroundColor={true}
          />
        ))}
      </div>
    </div>
  );
};

export const RecipeListTwo: React.FC = () => {
  return (
    <div className="mx-8 mt-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">
          Try this delicious recipe to make your day
        </h1>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
          minim.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 custom-530:grid-cols-2 gap-8">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            image={recipe.image}
            time={recipe.time}
            category={recipe.category}
            timeIcon={recipe.timeIcon}
            categoryIcon={recipe.categoryIcon}
            backgroundColor = {false}
          />
        ))}
      </div>
    </div>
  );
};
