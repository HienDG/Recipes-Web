import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import { SidebarContext } from "../context";

import { MdBookmark } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/logo/logo.png";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const { setIsOpen } = useContext(SidebarContext);

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="py-[0.5rem] max-h-fit md:p-[0.5rem] bg-[#48bb78] border-b border-[#48bb78] fixed top-0 left-0 right-0 z-[100]">
      <div className="flex items-center container mx-auto max-w-[95%] justify-center text-[#000] gap-4">
        <div
          className="lg:hidden flex md:p-[1rem] px-[1.5rem] cursor-pointer "
          onClick={handleClose}
        >
          <TiThMenu className="text-[1.5rem] text-white" />
        </div>

        <Link
          to="/"
          className="text-3xl text-white font-medium px-[1rem] mx-auto lg:m-0 flex gap-2 md:items-center md:justify-center lg:border-r-[4px] lg:border-white"
        >
          <img src={logo} alt="icon" className="h-[40px] rounded-[50%]" />
          <span>Recipes</span>
        </Link>
        <nav className="xl:gap-[1.5rem] text-white mr-auto lg:gap-[1rem] md:gap-[0.5rem] lg:flex hidden justify-center items-center text-xl ">
          <div className="flex gap-3">
            <NavLink className={(item) => (item.isActive ? "font-extrabold" : "")} to="/">
              <div className="p-[10px]">Home</div>
            </NavLink>
            <NavLink to="/menu" className={(item) => (item.isActive ? "font-extrabold" : "")}>
              <div className="p-[10px]">Menu</div>
            </NavLink>
            <NavLink
              to="/collections"
              className={(item) => (item.isActive ? "font-extrabold" : "")}
            >
              <div className="p-[10px]">Collections</div>
            </NavLink>
          </div>
        </nav>
        <div className="inline-flex items-center justify-center gap-2">
          <SearchBox />
          <Link
            to="/saves"
            className="cursor-pointer md:p-[1rem] px-[1rem] py-[1rem] flex items-center gap-[0.5rem]"
          >
            <MdBookmark
              className="text-[1.5rem] fill-white hover:fill-orange-600"
              aria-label="Saves"
              title="Saves"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
