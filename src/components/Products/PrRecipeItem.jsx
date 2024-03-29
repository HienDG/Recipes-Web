import React from "react";
import { Link } from "react-router-dom";

import { LazyImage } from "../ui/index";
import useBookmark from "../../hooks/useBookmark";

import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BsFillChatFill, BsArrowRightShort } from "react-icons/bs";

const PrRecipeItem = ({ recipe, type, path, category }) => {
  const bookmark = useBookmark(recipe.id, type);

  return (
    <div className="p-4 lg:w-1/3 md:w-1/2">
      <div className="relative h-full bg-[#f0f0f0] overflow-hidden transition border-2 border-gray-200 rounded-lg border-opacity-60 group shadow-md">
        <LazyImage
          image={recipe.image_url}
          title={recipe.title}
          effect="opacity"
          wrapperClassName="h-[200px] overflow-hidden mx-auto flex justify-center items-center"
          imageClassName="object-cover object-center w-full h-full"
        />
        <div className="absolute top-0 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={bookmark.event.bind(null, recipe)}>
            <div className="flex justify-center items-center text-[#000] w-12 h-12 rounded-[50%] bg-[#48bb78]">
              <AiFillHeart
                className={`text-3xl hover:scale-125 ${
                  bookmark.isSaved ? "fill-red-600" : "fill-white hover:fill-red-600"
                }`}
              />
            </div>
          </button>
        </div>
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            CATEGORY: <span className="capitalize">{category}</span>
          </h2>
          <h1 className="my-4 text-lg font-medium group-hover:underline cursor-pointer text-gray-900 capitalize title-font h-[30px] overflow-hidden">
            <Link to={path} className="text-center">
              {recipe.title}
            </Link>
          </h1>
          <p className="mb-3 leading-relaxed h-[170px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum
            tempus egestas.
          </p>
          <div className="flex flex-wrap items-center">
            <Link
              className="inline-flex items-center mr-auto text-green-500 md:mb-2 lg:mb-0 hover:scale-110"
              to={path}
            >
              Learn More
              <BsArrowRightShort className="text-xl" />
            </Link>
            <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 border-r-2 border-gray-200 lg:ml-auto md:ml-0">
              <AiOutlineEye />
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <BsFillChatFill />6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PrRecipeItem);
