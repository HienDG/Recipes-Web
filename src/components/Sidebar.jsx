import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { SidebarContext, SearchContext } from "../context";
import { useSearch } from "../hooks";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SideBar = () => {
  const navigate = useNavigate();
  const searchCtx = useContext(SearchContext);
  const { handleClose, isOpen } = useContext(SidebarContext);
  const { state, event } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCtx.savedQuery(state.value);
    event.reset();

    navigate("/results");
  };

  return (
    <div
      className={`${
        isOpen ? "left-0" : "-left-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[55vw] xl:max-w-[50vw] transition-all duration-300 z-20`}
    >
      <div className="flex items-center justify-between py-5 px-[2rem] border-b-[2px] border-[#ccc]">
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={handleClose}
        >
          <AiOutlineClose className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 py-4 px-5">
        <div>
          <form className="flex  border-[2px]  border-[#333]" onSubmit={handleSubmit}>
            <input
              placeholder="Search over 1,000,000 recipes..."
              className=" py-[12px] px-[20px]  outline-none flex-1"
              type="text"
              value={state.value}
              onChange={event.change}
              onBlur={event.blur}
            />
            <button
              disabled={state.error}
              className="w-[3.5rem] h-[3.5rem] flex items-center justify-center  disabled:pointer-events-auto"
            >
              <AiOutlineSearch className="fill-black text-[1.5rem]" />
            </button>
          </form>
        </div>

        <div className="flex w-full flex-col gap-4">
          <NavLink to="/" className="uppercase font-semibold p-4 border-b border-[rgba(0,0,0,.15)]">
            <span className="mr-2">Home</span>
          </NavLink>
          <NavLink
            to="/menu"
            className="uppercase font-semibold p-4 border-b border-[rgba(0,0,0,.15)]"
          >
            <span className="mr-2">Menu</span>
          </NavLink>
          <NavLink
            to="/collections"
            className="uppercase font-semibold p-4 border-b border-[rgba(0,0,0,.15)]"
          >
            <span className="mr-2">Collections</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
