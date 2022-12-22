import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { SearchContext } from "../context";

import { MENU_LIST } from "./utils/helper";

const Alphabetical = () => {
  const searchCtx = useContext(SearchContext);
  const navigate = useNavigate();
  const handleScroll = (event) => {
    const idTarget = event.target.dataset.list;
    const scrollToElement = document.querySelector(`#alphabetical-list__${idTarget}`);
    scrollToElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  };

  const handleNavigation = (event) => {
    const dataTag = event.target.dataset.recipe;
    searchCtx.savedQuery(dataTag);

    navigate("/results");
  };

  return (
    <div className="container mx-auto w-[72rem] max-w-[95%] md:px-5 px-[0.625rem]">
      <h2 className="text-[1.125rem] font-bold mb-[1rem] leading-6">
        Find a topic by its first letter:
      </h2>
      <ol className="flex gap-2 flex-wrap items-center justify-center md:justify-start">
        {MENU_LIST.map((item, i) => (
          <li key={item.key + i}>
            <button
              disabled={item.queries.length === 0}
              data-list={item.key + i}
              onClick={handleScroll}
              className="text-[1rem] disabled:border-[rgba(0,0,0,.15)] disabled:text-[rgba(0,0,0,.3)] disabled:bg-[#fff] disabled:pointer-events-none cursor-pointer flex items-center justify-center border-[#d54215] border-solid font-bold border-[1px] w-[2.25rem] h-[2.25rem] uppercase hover:text-[#fff] hover:bg-[#d54215]"
            >
              {item.key}
            </button>
          </li>
        ))}
      </ol>
      <div>
        {MENU_LIST.map((item, i) => (
          <div
            key={item.queries + i + 30}
            hidden={item.queries.length === 0}
            className="text-[#000] leading-[1.75rem] text-[1.125rem]"
          >
            <h3
              id={`alphabetical-list__${item.key + i}`}
              className="flex justify-center items-center leading-[2rem] text-[1.5rem] font-bold mt-[3rem] mb-[1.5rem] bg-black text-white w-[3rem] h-[3rem] uppercase"
            >
              {item.key}
            </h3>
            <ul className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
              {item.queries.map((item, i) => (
                <li key={item + i} className="border-t-[1px] border-[#ccc] py-2">
                  <button
                    className="first-letter:uppercase text-[1.125rem] font-bold hover:text-[#d54215]"
                    data-recipe={item}
                    onClick={handleNavigation}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alphabetical;
