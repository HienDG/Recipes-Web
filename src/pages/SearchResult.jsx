import { useContext, memo } from "react";

import { SearchContext } from "../context";

import { SEARCH_QUERIES } from "../components/utils/fake-data";

import {
  AiFillFacebook,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { ErrorMessage } from "../components/ui/index";
import { PrRecipeItem } from "../components";

const SearchResult = () => {
  const searchCtx = useContext(SearchContext);
  const recipes = [...searchCtx.recipes];
  const maxLength = [...searchCtx.recipes].length;

  const [filter] = SEARCH_QUERIES.filter((item) => item === searchCtx.query);

  return (
    <>
      {!filter ? (
        <ErrorMessage />
      ) : (
        <section className="container mx-auto max-w-full">
          <div className="flex justify-center mb-[2rem] lg:text-[2.25rem] lg:mt-8 md:mt-4 text-[1.5rem] items-center gap-4 flex-col">
            <h1 className="text-[3rem] leading-[3.25rem] first-letter:uppercase font-bold">
              {searchCtx.query}
            </h1>
            <p className="text-center leading-[1.75rem] text-[1.125rem]">
              Add the unique flavor of {searchCtx.query} to your meals with more than {maxLength}{" "}
              trusted {searchCtx.query} recipes complete with ratings, reviews and cooking tips.
            </p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-2">
              <li className="w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] border-[1px] border-solid border-[rgba(0,0,0,.65)] cursor-pointer">
                <AiFillFacebook className="fill-[#3B5998] text-[1.5rem]" />
              </li>
              <li className="w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] border-[1px] border-solid border-[rgba(0,0,0,.65)] cursor-pointer">
                <AiOutlineInstagram className="fill-[#ce4958] text-[1.5rem]" />
              </li>
              <li className="w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] border-[1px] border-solid border-[rgba(0,0,0,.65)] cursor-pointer">
                <AiOutlineTwitter className="fill-[#1DA1F2] text-[1.5rem]" />
              </li>
              <li className="w-[3rem] h-[3rem] flex items-center justify-center rounded-[50%] border-[1px] border-solid border-[rgba(0,0,0,.65)] cursor-pointer">
                <AiOutlineMail className="fill-[#595959] text-[1.5rem]" />
              </li>
            </ul>
          </div>
          <div className="container mx-auto mt-4 py-24">
            <div className="w-[1200px] mx-auto max-w-full mb-[2rem]">
              <div className="flex flex-wrap -m-4">
                {recipes.map((recipe) => (
                  <PrRecipeItem
                    recipe={recipe}
                    key={recipe.id}
                    className="h-[200px] gap-y-2"
                    type="recipes"
                    path={`/results/${recipe.id}`}
                    category={searchCtx.query}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default memo(SearchResult);
