import React from "react";
import { Link } from "react-router-dom";

import { LazyImage } from "./ui/index";
import useBookmark from "../hooks/useBookmark";

import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BsFillChatFill, BsArrowRightShort } from "react-icons/bs";

const Recipe = ({ recipe, type, path, category }) => {
  const bookmark = useBookmark(recipe.id, type);
  // #6366f1
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2">
      <div className="relative h-full overflow-hidden transition border-2 border-gray-200 rounded-lg border-opacity-60 group">
        <LazyImage
          image={recipe.image_url}
          title={recipe.title}
          effect="opacity"
          wrapperClassName="w-full mx-auto flex justify-center items-center bg-[#f0f0f0]"
          imageClassName="object-cover object-center w-full lg:h-48 md:h-36"
        />
        <div className="absolute top-[1.2rem]  -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={bookmark.event.bind(null, recipe)}>
            <div className="flex justify-center items-center text-[#000] w-12 h-12 ">
              <AiFillHeart
                className={`text-3xl ${
                  bookmark.isSaved ? "fill-[#f56565]" : "fill-[#333] hover:fill-[#f56565]"
                }`}
              />
            </div>
          </button>
        </div>
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            CATEGORY: <span className="capitalize">{category}</span>
          </h2>
          <h1 className="mb-3  text-lg font-medium text-gray-900 capitalize title-font h-[56px] overflow-hidden flex items-center">
            {recipe.title}
          </h1>
          <p className="mb-3 leading-relaxed h-[150px]">
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

export default Recipe;
