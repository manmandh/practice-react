import React from 'react';
import { RecipeCard } from '~/components/commons/RecipeCard/RecipeCard';
import { recipes } from '~/components/commons/RecipeCard/recipes';

const RecipeList: React.FC = () => {
  return (
    <div className="px-8 pt-[150px] flex flex-col gap-[52px]">
      <div className='text-center flex flex-col'>
        <h2 className="text-[48px] font-primary-600 mb-6 font-[600]">Simple and tasty recipes</h2>
        <p className="font-primary-400 mx-auto w-[706px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            title={recipe.title}
            image={recipe.image}
            time={recipe.time}
            category={recipe.category}
            timeIcon={recipe.timeIcon}
            categoryIcon={recipe.categoryIcon}
          />
        ))}
      </div>
    </div>
  );
};

export {RecipeList};
