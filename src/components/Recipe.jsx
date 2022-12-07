import { MdBookmark } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

import { Link } from "react-router-dom";

import * as Ui from "./ui/index";

const Recipe = ({ recipe }) => {
  return (
    <div key={recipe.id} className='cursor-pointer'>
      <div className='border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <Ui.LazyImage image={recipe.image_url} effect='blur' />
        </div>
        <div className='absolute top-[1.2rem] -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center text-[#000] w-12 h-12 '>
              <AiOutlineHeart className='text-3xl hover:fill-orange-600' />
            </div>
          </button>
        </div>
      </div>
      <div className='text-[#000] border border-[#e4e4e4]  h-[150px] flex items-center flex-col justify-center gap-y-2'>
        <div className='text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase'>
          {recipe.publisher}
        </div>
        <Link>
          <h2 className='font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center'>
            {recipe.title}
          </h2>
        </Link>
        <div className='font-semibold'></div>
      </div>
    </div>
  );
};

export default Recipe;
