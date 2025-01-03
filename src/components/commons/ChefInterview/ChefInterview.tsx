import { SocialIcon, socialMediaIcons } from "../Header/Header";
import direction from '~/assets/images/direction.png';

export const ChefInterview = () => {
  return (
    <div className="mx-auto px-8 bg-white mb-10">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content: Questions */}
        <div className="flex-1 space-y-8 pr-8">
          {/* Question 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">How did you start out in the food industry?</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">What do you like most about your job?</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Do you cook at home on your days off?</h2>
            <img
              src={direction}
              alt="Cooking at home"
              className="w-full h-auto mt-4 rounded-md shadow-md"
            />
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.
            </p>
          </div>
        </div>

        {/* Right Content: Share Icons */}
        <div className="flex-none lg:w-[20%] lg:pl-8 mt-8 lg:mt-0 border-l border-gray-300 flex flex-col items-center space-y-4">
          <span className="block text-gray-800 font-bold mt-4">SHARE THIS ON:</span>
          <div className="space-y-4">
            {socialMediaIcons.map((iconSrc) => (
              <SocialIcon key={iconSrc} iconSrc={iconSrc} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
