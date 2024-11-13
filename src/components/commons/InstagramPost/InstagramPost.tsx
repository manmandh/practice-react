import React from 'react';
import Foodieland from "~/assets/icons/foodie.svg"
import OfficialIcon from "~/assets/icons/official-Icon.svg"
import ThreeDots from "~/assets/icons/shape.svg"
import Vegetable from "~/assets/images/vegetables.png"
import Like from "~/assets/icons/like.svg"
import Comment from "~/assets/icons/comment.svg"
import Send from "~/assets/icons/send.svg"
import Save from "~/assets/icons/special-icon.svg"
import AvtUser from "~/assets/icons/craig_love.svg"

interface PostProps {
  username: string;
  location: string;
  likes: number;
  caption: string;
  date: string;
}

export const InstagramPost: React.FC<PostProps> = ({ username, location, likes, caption, date }) => {
  return (
    <div className="w-[350px] mx-auto">
      <div className="flex items-center p-3 justify-between">
        <div className='flex gap-1'>
          <img src={Foodieland} alt="" />
          <div className=''>
            <div className='flex items-center'>
              <p className='text-secondary'>{username}</p>
              <img className='w-4 h-4' src={OfficialIcon} alt="" />
            </div>
            <p className="text-gray-500 text-sm m-0">{location}</p>
          </div>
        </div>
        <img src={ThreeDots} alt="" />
      </div>
      <div className="relative">
        <img src={Vegetable} alt="Post" className="w-full h-auto" />
        <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
          1/3
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex gap-1'>
          <img src={Like} alt="icon" />
          <img src={Comment} alt="icon" />
          <img src={Send} alt="icon" />
        </div>
        <div className='flex gap-1 items-center'>
          <span className='w-2 h-2 rounded-full bg-blue-500'></span>
          <span className='w-2 h-2 rounded-full bg-blue-500'></span>
          <span className='w-2 h-2 rounded-full bg-blue-500'></span>
        </div>
        <img src={Save} alt="icon" />
      </div>
      <div className="py-3">
        <div className='flex gap-2'>
          <img src={AvtUser} alt="" />
          <p className="font-primary-600 text-[12px]">
            Liked by <strong className="font-bold">craig_love</strong> and <strong className="font-bold">{likes}</strong> others
          </p>
        </div>
        <p className="my-2 text-[12px] line-clamp-1">
          <strong>{username}</strong> {caption}
        </p>
        <p className="text-gray-500 text-[10px]">{date}</p>
      </div>
    </div>

  );
};
