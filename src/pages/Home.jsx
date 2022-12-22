import { useNavigate, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../context";

import { AiOutlineArrowRight } from "react-icons/ai";

import { COLLECTIONS } from "../components/utils";

import Recipes from "../components/Recipes";
import { LazyImage, LoadingSpinner } from "../components/ui";
import { useLoading } from "../hooks";

const Home = () => {
  const searchCtx = useContext(SearchContext);
  const location = useLocation();
  const navigate = useNavigate();
  const isLoading = useLoading(2, location.pathname);
  const SLICE = [...COLLECTIONS].slice(0, 3);

  const handleNavigation = () => {
    searchCtx.savedQuery("cake");
    navigate("/results");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-[0.625rem] md:p-4">
      <section className="text-gray-600 body-font">
        <div className="container w-[1200px] px-5 lg:gap-10 md:gap-4 max-w-fit mx-auto flex py-4 md:pt-10 md:pb-24 md:flex-row flex-col items-center">
          <div className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 `}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.allrecipes.com/thmb/MNwvkS7RCztE0OiWKmePc1XC4SI=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7270753-eileens-spicy-gingerbread-men-photo-by-kim-2000-72dpi-d550ec1b334942a59138cc013be35b2f.jpg"
            />
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
                onClick={handleNavigation}
                className="inline-flex items-center justify-center gap-3 px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
              >
                <p>Learn More</p>
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Recipes title="What's New" type="chocolate" />
      <section className="text-gray-600 body-font">
        <div className="container py-24 px-5 mx-auto w-[1200px] max-w-full">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
              <h2 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                Popular recipe collections...
              </h2>
              <div className="w-20 h-1 bg-green-500 rounded"></div>
            </div>
            <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
              Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum
              fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna
              cursus eget nunc scelerisque viverra mauris
            </p>
          </div>
          <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
            {SLICE.map((item) => (
              <div className="w-full p-4 mb-6 md:w-1/2 lg:w-1/3 sm:mb-0" key={item.id}>
                <LazyImage
                  wrapperClassName="h-64 overflow-hidden rounded-lg"
                  imageClassName="object-cover object-center w-full h-full"
                  image={item.image_url}
                  title={item.title}
                  effect="opacity"
                />
                <h2 className="mt-5 text-xl font-bold text-gray-900 title-font">{item.title}</h2>
                <p className="mt-2 text-base leading-relaxed first-letter:uppercase">
                  {item.description}
                </p>
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 mt-3 text-lg text-blue-500 md:text-base hover:scale-110"
                >
                  Learn More
                  <AiOutlineArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
