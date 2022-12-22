import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { SearchContext } from "../context";

import { useSearch } from "../hooks";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import "animate.css";

const SearchBox = () => {
  const [isClose, setIsClose] = useState(true);
  const handleClose = () => {
    setIsClose((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const searchCtx = useContext(SearchContext);

  const { state, event } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    searchCtx.savedQuery(state.value);
    event.reset();

    navigate("/results");

    handleClose();
  };

  return (
    <div className="relative hidden lg:block ">
      <div>
        <button className="p-[1rem]" onClick={handleClose}>
          {isClose ? (
            <AiOutlineSearch className="text-[1.5rem] fill-white" />
          ) : (
            <AiOutlineClose className="fill-white text-[1.5rem]" />
          )}
        </button>
      </div>
      <div
        className={`absolute h-[60px] top-0 ${
          isClose ? "-right-[700px]" : "right-[60px] animate__fadeInRight"
        } md:w-[30rem] z-[100] ml-auto hidden md:flex md:items-center bg-[#48bb78] animate__animated animate__delay-.1s`}
      >
        <form className="w-full ml-auto" onSubmit={handleSearch}>
          <div className="flex items-center justify-end">
            <input
              placeholder="Search over 1,000,000 recipes..."
              className=" py-[12px] px-[20px] border-[1px] border-r-0 border-[#ccc] outline-none flex-1"
              type="text"
              value={state.value}
              onChange={event.change}
              onBlur={event.blur}
            />
            <button
              className="w-[3rem] h-[3.125rem] flex items-center justify-center bg-[#d54215] hover:bg-[#b53811] disabled:pointer-events-auto"
              disabled={state.error}
            >
              <AiOutlineSearch className="fill-white text-[1.5rem]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
