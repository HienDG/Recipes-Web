import { useBookmark } from "../../hooks";

import { RatingStar } from "../ui";

import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlinePrinter,
  AiOutlineShareAlt,
  AiFillHeart,
} from "react-icons/ai";

const PrvHeader = ({ recipe, params }) => {
  const bookmark = useBookmark(params.id, "recipes");

  return (
    <div className="grid-in-header">
      <h1 className="text-[3rem] font-bold leading-[3.25rem] mb-4">{recipe.title}</h1>
      <div className="mt-4">
        <div className="flex flex-col gap-4 md:items-center md:flex-row">
          <RatingStar className="pr-4" />
          <div className="flex">
            <div className="text-[20px] md:px-4 pr-4 border-r-2 border-[rgba(0,0,0,.15)]  md:border-l-2 border-solid">
              0 reviews
            </div>
            <div className="text-[20px] px-4">1 Photos</div>
          </div>
        </div>
      </div>
      <p className="my-4 text-lg leading-[1.75rem]">
        These almond flour pancakes are a wonderful substitute for regular pancakes when watching
        your carbs! They are very filling and are on the dense side. This is a basic recipe that can
        be tweaked. Any sweetener can be substituted for maple syrup. Enjoy!
      </p>
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="pr-4">
                <span className="text-lg">Recipe by {recipe.publisher}</span>
              </div>
              <p className="text-base leading-[1.25rem] px-4  border-l-2 border-l-[rgba(0,0,0,.15)] border-solid">
                Updated on June 6, 2022
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex font-bold">
            <div className="w-[7rem] flex justify-center h-[3.5rem] bg-[#d54215] hover:bg-[#b53811] rounded-[0.625rem] rounded-r-none">
              <button
                className="flex items-center justify-center gap-2 text-white group"
                onClick={bookmark.event.bind(null, recipe)}
              >
                <span>{bookmark.isSaved ? "Saved" : "Save"}</span>
                {bookmark.isSaved ? (
                  <AiFillHeart className="text-xl fill-white group-hover:scale-125" />
                ) : (
                  <AiOutlineHeart className="text-xl fill-white group-hover:scale-125" />
                )}
              </button>
            </div>
            <div className="w-[7rem] flex justify-center h-[3.5rem] bg-[#f5f6ea]">
              <button className="flex items-center justify-center gap-2">
                <span>Rate</span>
                <AiOutlineStar className="text-xl fill-[#d54215]" />
              </button>
            </div>
            <div className="w-[7rem] flex justify-center h-[3.5rem] bg-[#f5f6ea]">
              <button className="flex items-center justify-center gap-2">
                <span>Print</span>
                <AiOutlinePrinter className="text-xl fill-[#d54215]" />
              </button>
            </div>
            <div className="w-[7rem] flex justify-center h-[3.5rem] bg-[#f5f6ea] rounded-[0.625rem] rounded-l-none">
              <button className="flex items-center justify-center gap-2">
                <span>Share</span>
                <AiOutlineShareAlt className="text-xl fill-[#d54215]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrvHeader;
