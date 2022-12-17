import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";

import * as Ui from "./ui/index";
import useBookmark from "../hooks/useBookmark";

const Recipe = ({ recipe, className, type, path }) => {
  const bookmark = useBookmark(recipe.id, type);

  return (
    <div key={recipe.id} className="cursor-pointer bg-white">
      <div className="border border-[#e4e4e4] h-[300px] relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <Ui.LazyImage image={recipe.image_url} effect="blur" />
        </div>
        <div className="absolute top-[1.2rem] -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={bookmark.event.bind(null, recipe)}>
            <div className="flex justify-center items-center text-[#000] w-12 h-12 ">
              {bookmark.isSaved ? (
                <AiFillHeart className="text-3xl fill-orange-600 " />
              ) : (
                <AiOutlineHeart className="text-3xl hover:fill-orange-600 " />
              )}
            </div>
          </button>
          <Link to={path} className="flex justify-center items-center text-[#000] w-12 h-12 ">
            <AiOutlineEye className="text-3xl" />
          </Link>
        </div>
      </div>
      <div
        className={`text-[#000] border border-[#e4e4e4] ${className} grid grid-row-1 place-items-center place-content-around`}
      >
        <div className="text-sm text-[rgba(0,0,0,.65)] mb-[0.5rem] uppercase">
          {recipe.publisher || recipe.query}
        </div>
        <Link className="hover:underline" to={path}>
          <h2 className="font-semibold mb-1 text-[1.25rem] first-letter:uppercase text-center">
            {recipe.title}
          </h2>
        </Link>
        <Ui.RatingStar />
      </div>
    </div>
  );
};

export default Recipe;
