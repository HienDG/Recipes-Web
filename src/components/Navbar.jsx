import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { SearchContext, SidebarContext } from "../context";

import { useSearch } from "../hooks";

import { MdBookmark } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const SearchForm = ({ children, closeForm }) => {
  const navigate = useNavigate();
  const searchCtx = useContext(SearchContext);

  const { state, event } = useSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    searchCtx.savedQuery(state.value);
    event.reset();

    navigate("/results");

    closeForm();
  };

  return (
    <form className="ml-auto w-[90%] lg:w-[70%] md:w-[80%] xl:w-[60%]" onSubmit={handleSearch}>
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
          className="w-[3rem] h-[3rem] flex items-center justify-center bg-[#d54215] hover:bg-[#b53811] disabled:pointer-events-auto"
          disabled={state.error}
        >
          <AiOutlineSearch className="fill-white text-[1.5rem]" />
        </button>
        <>{children}</>
      </div>
    </form>
  );
};

const SearchBox = () => {
  const [isClose, setIsClose] = useState(true);
  const handleClose = () => {
    setIsClose((prevState) => !prevState);
  };

  return (
    <div className="relative hidden lg:block ">
      <div>
        <button className="p-[1rem]" onClick={handleClose}>
          <AiOutlineSearch className="text-[1.25rem]" />
        </button>
      </div>
      {isClose ? null : (
        <div className="absolute top-0 right-0 lg:w-[50.5rem] md:w-[30rem] bg-white z-20 xl:w-[60.5rem] ml-auto hidden md:block">
          <SearchForm closeForm={handleClose}>
            <button
              className="w-[1.5rem] h-[1.5rem] align-middle ml-[0.75rem]"
              onClick={handleClose}
            >
              <AiOutlineClose className="fill-[rgba(0,0,0,.65)] text-[1.5rem]" />
            </button>
          </SearchForm>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { setIsOpen } = useContext(SidebarContext);

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="py-[0.5rem] max-h-fit md:p-[0.5rem] bg-[#fff] border-b-[2px] border-[#ccc] fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between container mx-auto max-w-[95%]  text-[#000]">
        <div
          className="lg:hidden flex md:p-[1rem] px-[1.5rem] cursor-pointer"
          onClick={handleClose}
        >
          <TiThMenu className="text-[1.5rem]" />
        </div>
        <Link to="/" className="text-3xl font-medium px-[1rem]">
          <div>Recipes</div>
        </Link>
        <div className="xl:gap-[1.5rem] lg:gap-[1rem] md:gap-[0.5rem] lg:flex hidden justify-center items-center text-xl ">
          <div className="flex">
            <NavLink className={(item) => (item.isActive ? " text-red-500" : "")} to="/">
              <div className="p-[10px]">Home</div>
            </NavLink>
            <NavLink to="/menu" className={(item) => (item.isActive ? "text-red-500 " : "")}>
              <div className="p-[10px]">Menu</div>
            </NavLink>
            <NavLink to="/collections" className={(item) => (item.isActive ? "text-red-500 " : "")}>
              <div className="p-[10px]">Collections</div>
            </NavLink>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <SearchBox />
          <div className="cursor-pointer md:p-[1rem] px-[1.5rem] py-2 flex items-center gap-[0.5rem]">
            <MdBookmark className="text-[1.5rem] hover:fill-orange-600" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
