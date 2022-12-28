import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { SearchContext } from "../context";
import { useSearch } from "../hooks";

import { AiOutlineSearch } from "react-icons/ai";

import Alphabetical from "../components/Alphabetical";

const Menu = () => {
  const navigate = useNavigate();
  const searchCtx = useContext(SearchContext);
  const { state, event } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    searchCtx.savedQuery(state.value);
    event.reset();

    navigate("/results");
  };

  return (
    <div>
      <section className="bg-[#f5f6ea] mb-8 py-24">
        <div className="md:p-8 p-2 text-black leading-7 container mx-auto h-[17.625rem] grid grid-rows-2 gap-3">
          <h1 className="leading-[2.75rem] text-[2.25rem] mb-3 font-bold text-center flex justify-center items-center">
            Menu A - Z
          </h1>
          <div className="w-full h-fit py-5 px-10">
            <form
              className="mx-auto md:w-full lg:w-[70%] border-[2px] bg-white border-[#ccc] rounded-xl flex justify-center items-center"
              onSubmit={handleSearch}
            >
              <input
                placeholder="Search over 1,000,000 recipes..."
                className=" py-[12px] px-[20px]  outline-none flex-1 ml-10"
                type="text"
                value={state.value}
                onChange={event.change}
                onBlur={event.blur}
              />
              <button
                className="w-[3.5rem] h-[3.5rem] flex items-center justify-center  disabled:pointer-events-auto"
                disabled={state.error}
              >
                <AiOutlineSearch className="fill-black text-[1.5rem]" />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Alphabetical />
    </div>
  );
};

export default Menu;
