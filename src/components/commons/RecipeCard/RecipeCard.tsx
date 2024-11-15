import { IRecipeCardProps } from "~/commons/interfaces/IRecipeCardProps";

const RecipeCard: React.FC<IRecipeCardProps> = ({title, image, time, category, timeIcon, categoryIcon, backgroundColor}) =>{
  return (
    <div className={`${backgroundColor? 'bg-gradient-to-b from-transparent-blue to-light-blue' : ''} rounded-[30px]`}>
      <img src={image} alt={title} className="w-full h-40 px-4 object-cover rounded-[30px]" />
      <div className="px-4">
        <h3 className="line-clamp-2 text-[24px] font-primary-600 my-4">{title}</h3>
        <div className="flex items-center my-[27px] text-gray-700 gap-6">
          <div className="flex items-center text-sm font-primary-500">
            <img src={timeIcon} alt="timer icon" className="w-4 h-4 mr-2" />
            {time}
          </div>
          <div className="flex items-center text-sm font-primary-500">
            <img src={categoryIcon} alt="category icon" className="w-4 h-4 mr-2" />
            {category}
          </div>
        </div>
      </div>
    </div>

  )
}

export {RecipeCard}
