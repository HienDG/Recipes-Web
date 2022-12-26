import { Link } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import { LazyImage } from "../ui";
import { COLLECTIONS } from "../utils";

const PrCollections = ({ maxLength = 3 }) => {
  const SLICE = [...COLLECTIONS].slice(0, maxLength);

  return (
    <section className="text-gray-600 body-font bg-white py-14 px-[0.625rem] md:px-4">
      <div className="container py-5 px-5 mx-auto w-[1200px] max-w-full">
        <div className="flex flex-wrap w-full mb-20">
          <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
            <h2 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Popular recipe collections...
            </h2>
            <div className="w-20 h-1 bg-green-500 rounded"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum
            fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus
            eget nunc scelerisque viverra mauris
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
              <h2 className="mt-5 text-xl hover:scale-105 font-bold cursor-pointer text-gray-900 title-font text-center">
                <Link to={item.path}>{item.title}</Link>
              </h2>
              <p className="mt-2 text-base leading-relaxed first-letter:uppercase">
                {item.description}
              </p>
              <Link
                to={item.path}
                className="inline-flex items-center gap-2 mt-3 text-lg font-bold text-blue-500 md:text-base hover:scale-110"
              >
                Learn More
                <AiOutlineArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-5 leading-[0] mt-5 text-center">
        <div className="flex justify-center items-center lg:px-5">
          <Link className="max-w-[300px] w-full block" to="/collections">
            <span className="flex justify-center">
              <span className="bg-[#48bb78] focus:outline-none hover:bg-green-600 hover:border-green-600 text-xl border-[2px] border-solid border-[#48bb78] text-white py-[7px] px-[1.75rem] rounded-md">
                <span>More recipe collections</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrCollections;
