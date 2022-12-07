import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { MdBookmark } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isClose, setIsClose] = useState(true);
  const handleClose = () => {
    setIsClose((prevState) => !prevState);
  };

  return (
    <nav className='py-[0.5rem] max-h-fit md:p-[0.5rem] bg-[#fff] border-b-[2px] border-[#ccc] fixed top-0 left-0 right-0 z-10'>
      <div className='flex items-center justify-between container mx-auto max-w-[95%] md:max-w-full text-[#000]'>
        <div
          className='md:hidden flex md:p-[1rem] px-[1.5rem] cursor-pointer'
          onClick={handleClose}
        >
          {isClose ? (
            <TiThMenu className='text-[1.5rem]' />
          ) : (
            <AiOutlineClose className='text-[1.5rem]' />
          )}
        </div>
        <Link to='/' className='text-3xl font-medium px-[1rem]'>
          Recipes
        </Link>
        <div className='xl:gap-[1.5rem] lg:gap-[1rem] md:gap-[0.5rem] flex justify-center items-center text-xl '>
          <div className='md:flex hidden'>
            <NavLink className={(item) => (item.isActive ? " text-red-500" : "")} to='/'>
              <div className='p-[10px]'>Home</div>
            </NavLink>
            <NavLink to='/menu' className={(item) => (item.isActive ? "text-red-500 " : "")}>
              <div className='p-[10px]'>Menu</div>
            </NavLink>
          </div>
          <div className='cursor-pointer md:p-[1rem] px-[1.5rem] py-2'>
            <MdBookmark className='text-[1.5rem] hover:fill-orange-600' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
