import { AiOutlineArrowRight } from "react-icons/ai";
import background from "../../assets/hero/gingerbread.png";

const HrTop = ({ handleNav, title }) => {
  return (
    <section className="text-gray-600 body-font p-[0.625rem] md:p-4" title="Top">
      <div className="container w-[1200px] px-5 lg:gap-10 md:gap-4 max-w-fit mx-auto flex py-4 md:pt-10 md:pb-24 md:flex-row flex-col items-center">
        <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 `}>
          <img className="object-cover object-center rounded" alt="hero" src={background} />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left">
          <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 `}>
            Our Complete Collection of Christmas Cookies
            <br className="hidden lg:inline-block" />
          </h1>
          <p className={`mb-8 leading-relaxed`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={`flex justify-center`}>
            <button
              onClick={handleNav.bind(null, title)}
              className="inline-flex items-center justify-center gap-3 px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
            >
              <p>Learn More</p>
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrTop;
