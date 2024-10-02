import hotRecipes from '~/assets/icons/hot-recipe.svg';
import timer from '~/assets/icons/timer.svg';
import forkKnife from '~/assets/icons/forkKnife.svg';
import johnSmith from '~/assets/icons/john-smith.svg';
import circle from '~/assets/icons/view-circle.svg';
import bakedSauce from '~/assets/images/baked-chicken-sauce.jpg';

export const Banner = () => {
  return (
    <>
      <div className="flex bg-white px-8 font-primary-600">
        <div className='bg-bgc-banner rounded-xl flex'>
          <div className="flex p-[50px] flex-col justify-between space-y-4 lg:w-1/2">
            <div className="flex bg-white w-[156px] h-[45px] rounded-[30px] p-[20px] items-center space-x-2">
              <img src={hotRecipes} alt="Hot Recipes" className="w-6 h-6" />
              <span className="text-sm font-bold text-primary">Hot Recipes</span>
            </div>
            <h1 className="text-3xl font-bold lg:text-4xl">
              Spicy delicious chicken wings
            </h1>
            <p className="opacity-60 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore.
            </p>
            <div className="flex space-x-6">
              <div className="flex py-[8px] px-[16px] w-[139px] h-[40px] bg-white items-center rounded-[30px] space-x-2">
                <img src={timer} alt="timer" className="w-5 h-5" />
                <span className="text-sm opacity-60">30 Minutes</span>
              </div>
              <div className="flex py-[8px] px-[16px] w-[139px] h-[40px] bg-white items-center rounded-[30px] space-x-2">
                <img src={forkKnife} alt="fork-knife" className="w-5 h-5" />
                <span className="text-sm opacity-60">Chicken</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-[84px]">
              <div className="flex items-center space-x-2">
                <img src={johnSmith} alt="John Smith" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm text-primary">John Smith</p>
                  <p className="text-xs opacity-60">15 March 2022</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-700">
                  View Recipes
                </button>
                <img src={circle} alt="circle icon" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end mt-6 lg:mt-0">
            <img
              src={bakedSauce}
              alt="Baked Chicken with Sauce"
              className="rounded-lg shadow-lg w-full h-auto lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
