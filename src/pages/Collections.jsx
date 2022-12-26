import { memo } from "react";
import { Link } from "react-router-dom";

import { COLLECTIONS } from "../components/utils";
import { LazyLoadImg } from "../components/ui";

import { AiOutlineArrowRight } from "react-icons/ai";

const Collections = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto w-[1200px] max-w-full">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Most popular recipe collections this week
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum
            tempus egestas. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {COLLECTIONS.map((collection) => (
            <div className="w-full p-4 lg:w-1/3 sm:w-1/2 cursor-pointer flex" key={collection.id}>
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full"
                  src={collection.image_url}
                />
                <div className="relative z-10 w-full px-8 py-10 bg-white border-4 border-gray-200 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm font-medium tracking-widest text-indigo-500 capitalize title-font">
                    {collection.query}
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    {collection.title}
                  </h1>
                  <p className="leading-relaxed first-letter:uppercase">{collection.description}</p>
                  <Link
                    to={collection.path}
                    className="inline-flex items-center gap-2 mt-3 text-lg text-blue-500 md:text-base hover:scale-110"
                  >
                    Learn More
                    <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Collections);
