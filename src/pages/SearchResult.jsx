import { useContext } from "react";

import { SearchContext } from "../context";

import { SEARCH_QUERIES } from "../components/utils/fake-data";

import {
  AiFillFacebook,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

import { ErrorMessage, PlaceHolder } from "../components/ui/index";
import Recipe from "../components/Recipe";

const SearchResult = () => {
  const searchCtx = useContext(SearchContext);

  const recipes = [...searchCtx.recipes];
  const maxLength = [...searchCtx.recipes].length;

  const [filter] = SEARCH_QUERIES.filter((item) => item === searchCtx.query);

  if (!filter) return <ErrorMessage />;

  return (
    <section className="container mx-auto max-w-[95%]">
      <div className="flex cursor-pointer justify-center mb-[2rem] lg:text-[2.25rem] lg:mt-8 md:mt-4 text-[1.5rem] items-center gap-4 flex-col">
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
      <div className="container mx-auto mt-4 ">
        <div className="w-[1100px] mx-auto max-w-full mb-[2rem]">
          {searchCtx.isLoading ? (
            <PlaceHolder number={16} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] gap-y-[1.5rem] max-w-sm mx-auto md:max-w-none md:mx-0">
              {recipes.map((recipe) => (
                <Recipe recipe={recipe} key={recipe.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
