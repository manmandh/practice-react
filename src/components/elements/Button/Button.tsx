import circle from '~/assets/icons/view-circle.svg';
import { IButtonProps } from '~/commons/interfaces/IButtonProps';

 export const ViewRecipesButton: React.FC<IButtonProps> = ({ children, showIcon = true, className }) => {
  return (
    <button
      className={`gap-2 flex items-center space-x-2 bg-primary text-white rounded-[12px] custom-900:rounded-[16px] px-[30px] sm:px-[37px] py-[16px] sm:py-[22px] hover:bg-blue-600 focus:outline-none ${className}`}
    >
      {children}
      {showIcon && (
        <img src={circle} alt="circle icon" className="w-4 custom-900:w-5 h-4 custom-900:h-5" />
      )}
    </button>
  );
};